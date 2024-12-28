import { useEffect, useState } from "react";
import './styles/custom.css';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WhyUs from "./components/WhyUs";
import Popular from "./components/Popular";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { FormProvider } from "./context/FormContext";
import ProtectedRoute from "./context/ProtectedRoute";
import FreelancerDashboard from "./components/Dashboards/FreelancerDashboard";
import ClientDashboard from "./components/Dashboards/ClientDashboard";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <AuthProvider>
      <FormProvider>
        <Router>
          <AppContent />
        </Router>
      </FormProvider>
    </AuthProvider>
  );
};

const AppContent = () => {
  const location = useLocation();
  const { user } = useAuth(); // Now using the updated context

  // Determine if Navbar/Footer should be hidden
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";
  const isDashboardPage = location.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Conditionally render Navbar */}
      {!isAuthPage && !isDashboardPage && <Navbar />}
      <ScrollToTop />

      {/* Define Routes */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div>
              <main className="flex-grow pt-16 lg:pt-20" role="main">
                <section id="home" className="min-h-[calc(100vh-4rem)] py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
                  <h2 id="home-title" className="sr-only">Home</h2>
                  <Home />
                </section>
                <section id="whyus" className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
                  <h2 id="whyus-title" className="sr-only">Why Us</h2>
                  <WhyUs />
                </section>
                <section id="popular" className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
                  <h2 id="popular-title" className="sr-only">Popular</h2>
                  <Popular />
                </section>
                <section id="services" className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
                  <h2 id="services-title" className="sr-only">Services</h2>
                  <Services />
                </section>
                <section id="about" className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
                  <h2 id="about-title" className="sr-only">About</h2>
                  <About />
                </section>
                <section id="contact" className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
                  <h2 id="contact-title" className="sr-only">Contact</h2>
                  <Contact />
                </section>
              </main>
            </div>
          }
        />

        {/* Auth Routes */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard/client"
          element={
            <ProtectedRoute>
              {user && user.userType === "Client" ? <ClientDashboard /> : <div>Unauthorized</div>}
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/freelancer"
          element={
            <ProtectedRoute>
              {user && user.userType === "Freelancer" ? <FreelancerDashboard /> : <div>Unauthorized</div>}
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Conditionally render Footer */}
      {!isAuthPage && !isDashboardPage && <Footer />}
    </div>
  );
};

// Layout for Auth Pages
const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-4 left-4">
        <a href="/" className="text-blue-600 hover:text-blue-800 flex items-center space-x-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span>Back</span>
        </a>
      </div>
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
