import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Microphone = () => {
  const {
    transcript,
    listening,
    finalTranscript,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition({ commands: true });

  const [language, useLanguage] = 'en-US'

  useEffect(() => {
    if (finalTranscript !== '') {
      console.log('transcript: ', finalTranscript);
    }
  }, [finalTranscript]);

  const listen = (currLanguage = language) => {
    SpeechRecognition.startListening({
      language: currLanguage,
      continuous: true,
    });
  };

  const stop = () => {
    SpeechRecognition.stopListening();
  };

  return (
    <>
      <h1>Listening? {listening ? 'Yes' : 'No'}</h1>
      <button onClick={() => resetTranscript()}>Reset</button>
      <button onClick={() => listen()}>Listen</button>
      <button onClick={() => stop()}>Stop</button>

      <hr />
      <p>{transcript}</p>
    </>
  );
};

export default Microphone;
