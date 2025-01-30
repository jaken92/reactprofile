import { StyledTextInput } from "./TextInput.styles";
import { TextInputProps } from "./TextInput.types";

export const TextInput: React.FC<TextInputProps> = ({
  input,
  meta,
  label,
  type = "text",
  ...props
}) => {
  const showError = meta.touched && meta.error;
  const isTextArea = input.type === "textarea";
  const errorMsg = meta.error;

  return (
    <StyledTextInput showError={showError} errorMsg={errorMsg}>
      {label && <label htmlFor={input.name}>{label}</label>}
      {isTextArea ? (
        <textarea {...input} {...props} />
      ) : (
        <input {...input} {...props} type={type} />
      )}
    </StyledTextInput>
  );
};
