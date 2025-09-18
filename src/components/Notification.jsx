import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NOTIFICATION_CONFIG } from '../constants';
import { NotificationDisplay } from './presentational/NotificationDisplay';

export const Notification = () => {
  const [notification, setNotification] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.message) {
      setNotification({
        message: location.state.message,
        type: location.state.type || 'success',
      });

      const timer = setTimeout(() => {
        setNotification(null);
      }, NOTIFICATION_CONFIG.AUTO_DISMISS_DELAY);

      return () => clearTimeout(timer);
    }
  }, [location.state]);

  const handleClose = () => {
    setNotification(null);
  };

  return (
    <NotificationDisplay notification={notification} onClose={handleClose} />
  );
};
