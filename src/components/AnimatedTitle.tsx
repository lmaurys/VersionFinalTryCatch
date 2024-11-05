import { motion } from 'framer-motion';

interface Props {
  text: string;
  highlightedText?: string;
}

export default function AnimatedTitle({ text, highlightedText }: Props) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const words = text.split(' ');

  return (
    <motion.h1
      className="text-5xl md:text-6xl font-bold text-dark mb-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <motion.span key={i} className="inline-block mr-4">
          {word.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
      {highlightedText && (
        <motion.span
          className="text-primary block mt-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {highlightedText.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      )}
    </motion.h1>
  );
}