import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PropTypes from 'prop-types';


const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Use the user state from the context

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children; // Render the child route (component) if authenticated
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // Explicitly define children prop
};
export default ProtectedRoute;
