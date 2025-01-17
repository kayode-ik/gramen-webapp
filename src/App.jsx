import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import ProjectPage from "./pages/Projects";
import ContactPage from "./pages/Contacts";
import NotFoundPage from "./pages/NotFound";
import SingleServicesPage from "./pages/Services/SingleServicesPage";
import SingleProjectPage from "./pages/Projects/SingleProjectPage";

function App() {
  return (
    <BrowserRouter>
      {/* Header */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<SingleServicesPage />} />
        {/* <Route
          path="/services/:slug"
          render={(props) => (
            <SingleServicesPage {...props} serveData={serviceData} />
          )}
        /> */}
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/:slug" element={<SingleProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/notfound" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// display: flex;
// flex-direction: column;
// gap: 20px;
// justify-content: center;
// align-items: center;
