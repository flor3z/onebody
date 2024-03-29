import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const { user } = UserAuth(null);

  if (!user) {
    navigate('/');
  }

  return children;
};

export default ProtectedRoute;
