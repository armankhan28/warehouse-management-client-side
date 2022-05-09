import { useEffect, useState } from 'react';

const useServices = () => {
  const [services, SetServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/service')
      .then(res => res.json())
      .then(data => SetServices(data));
  }, []);
  return [services, SetServices];
};

export default useServices;
