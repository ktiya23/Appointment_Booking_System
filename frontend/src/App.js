import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import DoctorList from "../../frontend/src/components/DoctorList";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<DoctorList />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
