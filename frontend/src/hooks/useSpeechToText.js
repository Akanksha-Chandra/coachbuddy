import { useEffect, useState, useRef } from 'react';

const useSpeechToText = () => {
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef(null);
  const isRecognizing = useRef(false);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn('SpeechRecognition not supported in this browser');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (event) => {
      const interimTranscript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      setTranscript(interimTranscript);
    };

    recognition.onstart = () => { isRecognizing.current = true; };
    recognition.onend = () => { isRecognizing.current = false; };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, []);

  const startListening = () => {
    if (recognitionRef.current && !isRecognizing.current) {
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isRecognizing.current) {
      recognitionRef.current.stop();
    }
  };

  return { transcript, startListening, stopListening };
};


export default useSpeechToText;
