
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center z-50 relative">
      <img 
        src="https://res.cloudinary.com/dtq6gshzf/image/upload/v1755595529/synthinferno-logo_socawa.png" 
        alt="Synth Inferno Logo" 
        loading="lazy" 
        className="h-20 w-auto object-contain" 
      />
    </Link>
  );
};

export default Logo;
