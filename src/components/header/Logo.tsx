
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center z-50 relative">
      <div className="font-heading text-2xl font-bold text-foreground">
        Dee&Cee Labs
      </div>
    </Link>
  );
};

export default Logo;
