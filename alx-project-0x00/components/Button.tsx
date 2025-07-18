import { ButtonProps } from "@/interfaces/index";

const Button = ({ title, styles, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white font-medium ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
