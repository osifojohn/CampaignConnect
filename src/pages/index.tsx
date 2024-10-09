import { LoadingOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes/routeEnum';

const Landing = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const targetUrl = ROUTES.LANDING;
  const delay = 2000;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      navigate(targetUrl);
    }, delay);

    return () => clearTimeout(timeout);
  }, [navigate, targetUrl, delay]);

  return (
    <div className="redirect-container">
      {loading ? (
        <div className="loading-spinner">
          {/* <p>Loading...</p> */}
          <LoadingOutlined />
        </div>
      ) : null}
    </div>
  );
};

export default Landing;
