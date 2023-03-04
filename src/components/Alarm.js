import React, { useState, useEffect } from 'react';

const Alarm = ({ time, onAlarm }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const [hours, minutes] = time.split(':');
    const alarmTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), hours, minutes);

    if (currentTime >= alarmTime) {
      onAlarm();
    }
  }, [currentTime, time, onAlarm]);

  return null;
};

export default Alarm;
