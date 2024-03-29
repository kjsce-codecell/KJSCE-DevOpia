import { useRef, useEffect } from 'react';
import Scramble from 'react-scramble';

// eslint-disable-next-line react/prop-types
const Scrambler = ({ text, bindMethod }) => {
  const scrambleRef = useRef(null);

  useEffect(() => {
    const restart = () => {
      scrambleRef.current.restart();
    };

    const pause = () => {
      scrambleRef.current.pause();
    };

    const start = () => {
      scrambleRef.current.start();
    };

    if (bindMethod) {
      bindMethod({ restart, pause, start });
    }
  },);

  return (
    <Scramble
      ref={scrambleRef}
      text={text}
      mouseEnterTrigger="restart"
      steps={[
        {
          roll: 10,
          action: '+',
          type: 'all',
        },
        {
          action: '-',
          type: 'forward',
        },
      ]}
    />
  );
};

export default Scrambler;
