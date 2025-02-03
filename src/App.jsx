import { Routes, Route, Navigate } from "react-router-dom";
//pages
import {
  HomePage,
  AboutPage,
  ServicePage,
  CoursePage,
  CorporateBookingPage,
  ConsultingPage,
  CollegeTrainingsPage,
} from "./pages";

import Testing from "./pages/Testing";

//routes
import Unprotected from "./layout/Unprotected";

const App = () => {
  return (
    <div className="w-screen">
      <Routes>
        <Route path="/testing" element={<Testing />} />
        <Route path="/" element={<Unprotected />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route
            path="/services/corporate-trainings"
            element={<CorporateBookingPage />}
          />
          <Route
            path="/services/college-trainings"
            element={<CollegeTrainingsPage />}
          />
          <Route path="/services/consulting" element={<ConsultingPage />} />
          <Route path="/courses" element={<CoursePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
