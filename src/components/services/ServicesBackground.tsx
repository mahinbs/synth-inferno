
import { memo } from "react";

const ServicesBackground = memo(() => {
  return (
    <>
      {/* Updated Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat will-change-auto"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dknafpppp/image/upload/v1748805697/108518_1_rnyk78.jpg')`,
            transform: "translate(-50%, -50%) scale(1.1)",
            position: "absolute",
            top: "50%",
            left: "50%",
            minWidth: "100vw",
            minHeight: "100vh",
            contentVisibility: "auto",
          }}
        />
        {/* Optimized overlay for better performance */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      {/* Simplified gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,116,139,0.08),transparent_60%)] z-10"></div>
    </>
  );
});

ServicesBackground.displayName = 'ServicesBackground';
export default ServicesBackground;
