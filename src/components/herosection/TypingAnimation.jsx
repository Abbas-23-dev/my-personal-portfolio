import { useEffect, useState } from 'react';

// const TypingAnimation = ({ text = '', speed = 100 }) => {
//   const [displayedText, setDisplayedText] = useState('');

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setDisplayedText((prev) => prev + text.charAt(index));
//       index++;
//       if (index === text.length) clearInterval(interval);
//     }, speed);

//     return () => clearInterval(interval);
//   }, [text, speed]);

//   return <span>{displayedText}</span>;
// };
const TypingAnimation = () => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  
  const texts = [
    "I am a React.js Developer",
    "I build Modern Web Apps",
    "I create User Experiences", 
    "I love Clean Code"
  ];
  
  React.useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);
  
  return (
    <span className="text-orange-400">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;
