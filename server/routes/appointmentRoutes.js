const express = require("express");
const Appointment = require("../models/Appointment");
const moment = require("moment");

const router = express.Router();

// Get all appointments
router.get("/", async (req, res) => {
  const appointments = await Appointment.find().populate("doctorId");
  res.json(appointments);
});

// Get single appointment
router.get("/:id", async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);
  if (!appointment) return res.status(404).json({ message: "Appointment not found" });
  res.json(appointment);
});

// Book an appointment
router.post("/", async (req, res) => {
  const { doctorId, date, duration, appointmentType, patientName, notes } = req.body;

  const existingAppointments = await Appointment.find({ doctorId, date: { $gte: new Date(date) } });

  let newAppointmentTime = moment(date);
  let isSlotTaken = existingAppointments.some((appt) =>
    moment(appt.date).isBetween(newAppointmentTime, newAppointmentTime.clone().add(duration, "minutes"), null, "[)")
  );

  if (isSlotTaken) {
    return res.status(400).json({ message: "Slot is already booked" });
  }

  const newAppointment = new Appointment({
    doctorId,
    date,
    duration,
    appointmentType,
    patientName,
    notes,
  });

  await newAppointment.save();
  res.json(newAppointment);
});

// Update appointment
router.put("/:id", async (req, res) => {
  const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedAppointment);
});

// Delete appointment
router.delete("/:id", async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ message: "Appointment canceled" });
});

module.exports = router;
