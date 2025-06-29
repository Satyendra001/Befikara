import React, { useEffect, useRef } from 'react';
import backgroundVideo from "../assets/1.mp4";

console.log("Video path:", backgroundVideo);

const VideoTest = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current.play();
          console.log("Video playing successfully");
        } catch (error) {
          console.error("Video playback failed:", error);
        }
      };
      playVideo();
    }
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        controls // Added controls for testing
      >
        <source src={backgroundVideo} type="video/mp4" />
        Video not supported
      </video>
    </div>
  );
};

export default VideoTest;