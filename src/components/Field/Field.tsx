import { FieldProps } from "../../interfaces/Field";
import "./Field.css";

function Field({ type, value, setValue, placeholder}: FieldProps) {
  const changeValue = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <input
      className="field"
      type={type}
      value={value}
      onChange={(e) => changeValue(e)}
      placeholder={placeholder}
    />
  );
}

export default Field;
