"use client";

import * as React from "react";
import VideoPlayerControls from "./ui/video-player-controls";

const VideoPlayer = () => {
  const [videoProgress, setVideoProgress] = React.useState<number>(0);
  const [videoDuration, setVideoDuration] = React.useState<number>();
  const [isPaused, setIsPaused] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setVideoDuration(video.duration);
    }
  }, []);

  React.useEffect(() => {
    if (isPaused) return;
    const currentTime = videoRef.current?.currentTime;
    if (videoDuration != null && currentTime != null) {
      let loadingTimeout = setTimeout(() => {
        if (videoProgress == currentTime / videoDuration) {
          setVideoProgress((prev) => prev + 0.000001);
        } else {
          setVideoProgress(currentTime / videoDuration);
        }
      }, 10);

      return () => {
        clearTimeout(loadingTimeout);
      };
    }
  }, [videoProgress, videoDuration, isPaused]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      setIsPaused(!video.paused);
      video.paused ? video.play() : video.pause();
    }
  };

  return (
    <section>
      <div className="relative w-[100%] max-w-6xl mx-auto my-8 rounded-xl overflow-hidden">
        <div className="absolute top-4 right-4 z-10">
          <VideoPlayerControls
            progress={videoProgress}
            isPaused={isPaused}
            onPlayPause={togglePlayPause}
          />
        </div>
        <video className="w-full" ref={videoRef} loop muted autoPlay>
          <source src="/assets/sample.mp4" />
        </video>
      </div>
    </section>
  );
};

export default VideoPlayer;
