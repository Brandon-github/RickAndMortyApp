type typeField = "text" | "email" | "password" | "search";

export interface FieldProps {
  type: typeField,
  value: string,
  setValue: Function,
  placeholder?: string
}