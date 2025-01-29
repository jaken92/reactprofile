import { FieldRenderProps } from "react-final-form";
import styled, { css } from "styled-components";

interface TextInputProps extends FieldRenderProps<string, HTMLElement> {
  label?: string;
  type?: string;
}

interface StyledTextInputProps {
  showError: boolean;
}

const StyledTextInput = styled.div<StyledTextInputProps>(
  ({ showError }) => css`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-bottom: "5px";
    width: 100%;
    overflow-x: none;

    & > label {
      /* display: block; */
      margin-bottom: "5px";
    }

    & > input,
    textarea {
      padding: 8px;
      border: ${showError ? "2px solid red" : "2px solid #ccc"};
      border-radius: 4px;
      font-size: 14px;
      width: 100%;
      resize: vertical;
    }
  `
);

export const TextInput: React.FC<TextInputProps> = ({
  input,
  meta,
  label,
  type = "text",
  ...props
}) => {
  const showError = meta.touched && meta.error;
  const isTextArea = input.type === "textarea";

  return (
    <StyledTextInput showError={showError}>
      {label && <label htmlFor={input.name}>{label}</label>}
      {isTextArea ? (
        <textarea {...input} {...props} />
      ) : (
        <input {...input} {...props} type={type} />
      )}

      {showError && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          {meta.error}
        </div>
      )}
    </StyledTextInput>
  );
};
