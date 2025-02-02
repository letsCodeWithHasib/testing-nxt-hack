import { Routes, Route, Navigate } from "react-router-dom";
//pages
import {
  HomePage,
  AboutPage,
  ServicePage,
  BlogPage,
  CoursePage,
  CorporateBookingPage,
  Testing,
} from "./pages";

//routes
import Unprotected from "./layout/Unprotected";

const App = () => {
  return (
    <div className="w-screen">
      <Routes>
        <Route path="/Testing" element={<Testing />}></Route>
        <Route path="/" element={<Unprotected />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route
            path="/corporate-trainings"
            element={<CorporateBookingPage />}
          />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/courses" element={<CoursePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
