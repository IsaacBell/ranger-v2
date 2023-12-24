import allCommands from '@/commands/';
import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Microphone = () => {
  const {
    transcript,
    listening,
    finalTranscript,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition({
    commands: allCommands,
    clearTranscriptOnListen: false,
  });

  const [language, setLanguage] = useState('en-US');

  useEffect(() => {
    if (finalTranscript !== '') {
      console.log('transcript: ', finalTranscript);
    }
  }, [finalTranscript]);

  const listen = () => {
    SpeechRecognition.startListening({
      language,
      continuous: true,
    });
  };

  const reset = () => resetTranscript();

  const changeLanguageTo = (lang: string) => {
    setLanguage(lang);
  }

  const stop = () => {
    SpeechRecognition.stopListening();
  };

  if (!browserSupportsSpeechRecognition) {
    return <></>
  }

  return (
    <>
      <h1>Listening? {listening ? 'Yes' : 'No'}</h1>

      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => listen()}>Listen</button>
      <button onClick={() => stop()}>Stop</button>

      <hr />
      <p>{transcript}</p>
    </>
  );
};

export default Microphone;
