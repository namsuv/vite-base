import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthProps {
  isAuthenticated: boolean; // Modify this type as per your authentication logic
}

const requireAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P & AuthProps) => {
    const navigate = useNavigate();
    
    useEffect(() => {
      if (!props.isAuthenticated) {
        navigate('/');
      }
    }, [props.isAuthenticated]);

    return props.isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default requireAuth;
