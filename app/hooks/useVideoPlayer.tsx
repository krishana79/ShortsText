import { useState, useCallback } from "react";

const useVideoPlayer = (videoElemRef: any) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMetaLoaded: false,
    hoverTime: 0,
  });

  const playVideo = useCallback(() => {
    videoElemRef.current?.play();
    setPlayerState((previousplayerState) => {
      previousplayerState.isPlaying = true;
      return { ...previousplayerState };
    });
  }, []);
  const pauseVideo = useCallback(() => {
    videoElemRef.current?.pause();
    setPlayerState((previousplayerState) => {
      previousplayerState.isPlaying = false;
      return { ...previousplayerState };
    });
  }, []);

  return {
    playVideo,
    pauseVideo,
  };
};

export default useVideoPlayer;
