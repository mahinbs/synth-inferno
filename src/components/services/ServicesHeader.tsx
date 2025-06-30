
import { memo } from "react";

const ServicesHeader = memo(() => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Dee&Cee Labs{" "}
        <span className="bg-gradient-to-r from-blue-400 to-gray-500 bg-clip-text text-transparent">
          Services
        </span>
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Transform your business with our cutting-edge AI and development
        solutions
      </p>
    </div>
  );
});

ServicesHeader.displayName = 'ServicesHeader';
export default ServicesHeader;
