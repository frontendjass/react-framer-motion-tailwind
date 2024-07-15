import { motion } from 'framer-motion';

function App() {
  const readyText = 'Ready to go!';
  const rainbowText = [
    '#ff0000',
    '#ff7f00',
    '#ffff00',
    '#00ff00',
    '#0000ff',
    '#4b0082',
    '#9400d3',
  ];

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1>
        {readyText.split('').map((letter, index) => (
          <motion.span
            key={index}
            initial={{ color: '#FFFFFF' }}
            animate={{ color: rainbowText }}
            transition={{ duration: 2, delay: index * 0.1, repeat: Infinity }}
            className='text-5xl'
          >
            {letter}
          </motion.span>
        ))}
      </h1>
      <p className='text-center'>If the above text is centered and the color changes, it indicates that Tailwind and Framer Motion have been installed correctly!</p>
    </div>
  );
}

export default App;
