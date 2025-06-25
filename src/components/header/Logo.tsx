
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center z-50 relative">
      <img 
        src="https://res.cloudinary.com/dknafpppp/image/upload/v1750840312/logo_o1rg97.png" 
        alt="Dee&Cee Labs Logo" 
        className="h-10 w-auto object-contain"
        loading="lazy"
      />
    </Link>
  );
};

export default Logo;
