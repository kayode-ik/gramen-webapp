import { Link } from "react-router-dom"; // If using React Router

const Button = ({
  text,
  iconLeft,
  iconRight,
  color,
  bgColor,
  width,
  height,
  className,
  onClick, // Add onClick prop
  to, // Add to prop for React Router
}) => {
  const buttonStyle = {
    color: color || "white",
    backgroundColor: bgColor || "blue",
    width: width || "auto",
    height: height || "auto",
  };

  const buttonContent = (
    <>
      {iconLeft && <img src={iconLeft} alt="image" className="mr-2" />}
      {text}
      {iconRight && <img src={iconRight} alt="image" className="ml-2" />}
    </>
  );

  if (to) {
    // If 'to' prop is provided, render a Link component
    return (
      <Link
        className={`flex items-center justify-center p-2 rounded-md uppercase font-bold ${className}`}
        style={buttonStyle}
        to={to}
      >
        {buttonContent}
      </Link>
    );
  } else {
    // Otherwise, render a button element with onClick handler
    return (
      <button
        className={`flex items-center justify-center p-2 rounded-md uppercase font-bold ${className}`}
        style={buttonStyle}
        onClick={onClick}
      >
        {buttonContent}
      </button>
    );
  }
};

export default Button;
