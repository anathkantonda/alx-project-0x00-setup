type ButtonProps = {
  title: string;
  className?: string;
  onClick?: () => void;
};

const Button = ({ title, className = "", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white font-medium ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
