import React from "react";

// Video background for star/space effect
const StarVideoBackground: React.FC = () => (
  <video
    autoPlay
    loop
    muted
    playsInline
    className="fixed inset-0 w-full h-full object-cover -z-30 pointer-events-none select-none"
    style={{ background: "transparent" }}
    aria-hidden="true"
  >
    <source src="/star-bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default StarVideoBackground;
