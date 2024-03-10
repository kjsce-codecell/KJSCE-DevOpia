import Scramble from 'react-scramble'

const Scrambler = (
  // eslint-disable-next-line react/prop-types
  { text }
) => {
  return (
    <Scramble
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
  )
}

export default Scrambler
