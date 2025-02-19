const express = require("express");
const Doctor = require("../models/Doctor");
const Appointment = require("../models/Appointment");
const moment = require("moment")

const router = express();

router.get("/", async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

router.get("/:id/slots", async (req, res) => {
  const { id } = req.params;
  const { date } = req.query;

  const doctor = await Doctor.findById(id);
  if (!doctor) return res.status(404).json({ message: "Doctor not found" });

  const appointment = await Appointment.find({
    doctorId: id,
    date: { $gte: new Date(date) },
  });

  let availableSlots = [];
  let startTime = moment(`${date} ${doctor.workingHours.start}`);
  let endTime = moment(`${date} ${doctor.workingHours.end}`);

  while (startTime.isBefore(endTime)) {
    let slotAvailable = !appointments.some((appt) =>
      moment(appt.date).isBetween(
        startTime,
        startTime.clone().add(appt.duration, "minutes"),
        null,
        "[)"
      )
    );

    if (slotAvailable) {
      availableSlots.push(startTime.format("HH:mm"));
    }
    startTime.add(30, "minutes");
  }

  res.json({ availableSlots });
});

module.exports = router;
