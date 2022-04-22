import React, { useEffect, useState } from 'react';

const Hooks = () => {
    const [services, SetServices] = useState([]);
    useEffect(() => {
      fetch("data.json")
        .then((res) => res.json())
        .then((data) => SetServices(data));
    }, []);
  
    return [services, SetServices];
  };
  

export default Hooks;