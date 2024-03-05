import { useState, useEffect } from 'react';
import './Binary.scss';

const BinaryCounter = () => {
  const [binaryList, setBinaryList] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 16);
      setBinaryList(prevList => [randomNumber, ...prevList]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="binary-counter-container">
      <div className="binary-counter">
        {binaryList.map((number, index) => (
          <span key={index}>{number.toString(2).padStart(4, '0')}</span>
        ))}
      </div>
    </div>
  );
};

export default BinaryCounter;
