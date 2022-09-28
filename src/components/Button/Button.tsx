import { ButtonProps } from "../../interfaces/Button";
import "./Button.css";

function Button({ type, title, action, url }: ButtonProps) {
  return (
    <a
      className="button"
      type={type}
      onClick={() => (action !== undefined ? action() : "")}
      href={url}
    >
      {title}
    </a>
  );
}

export default Button;
