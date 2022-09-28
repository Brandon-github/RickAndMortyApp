type typeButton = "button" | "submit" | "reset";

export interface ButtonProps {
  type: typeButton;
  title: string;
  action?: Function;
  url?: string;
}