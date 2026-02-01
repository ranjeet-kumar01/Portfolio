import { useState, useEffect } from "react";

const useTypewriter = (words, typingSpeed = 150, deletingSpeed = 50, delay = 1500) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setIsDeleting(true);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => prev + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  useEffect(() => {
    if (!isDeleting && text === words[wordIndex % words.length]) {
      const pause = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(pause);
    }
  }, [text, isDeleting, wordIndex, words, delay]);

  return text;
};

export default useTypewriter;
