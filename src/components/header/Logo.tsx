import { Link } from "react-router-dom";
const Logo = () => {
  return <Link to="/" className="flex items-center z-50 relative">
      <img src="https://res.cloudinary.com/dknafpppp/image/upload/v1751309533/logo_1_1_hh0yjm.png" alt="Dee&Cee Labs Logo" loading="lazy" className="h-20 w-auto object-contain" />
    </Link>;
};
export default Logo;