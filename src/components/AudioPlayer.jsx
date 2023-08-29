import React, { useState, useRef, useEffect } from 'react';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const fixedVolume = 0.2;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = fixedVolume;
      audioRef.current.play();
    }
  }, []);

  return (
    <div className='bg-white flex flex-row w-fit h-fit'>
      <h2>Audio Player</h2>
      <audio ref={audioRef} autoPlay controls={false}>
        <source src="/effect.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className='border border-red-500'>
        {isPlaying ? (
          <h1 className='text-black' onClick={togglePlay}>Pause</h1>
        ) : (
          <h1 className='text-black' onClick={togglePlay}>Play</h1>
        )}
        <button className='text-black' onClick={() => audioRef.current.volume = fixedVolume}>Set Volume</button>
      </div>
    </div>
  );
}

export default AudioPlayer;

