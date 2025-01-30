import { FieldRenderProps } from "react-final-form";
import styled, { css } from "styled-components";

interface TextInputProps extends FieldRenderProps<string, HTMLElement> {
  label?: string;
  type?: string;
}

interface StyledTextInputProps {
  showError: boolean;
  errorMsg?: string;
}

const StyledTextInput = styled.div<StyledTextInputProps>(
  ({ showError, errorMsg, theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-bottom: "5px";
    width: 100%;
    overflow-x: none;
    position: relative;

    &::after {
      content: ${errorMsg && showError ? `"${errorMsg}"` : ""};
      color: red;
      bottom: 0px;
      right: 0px;
      padding-inline: 5px;
      height: 15px;
      position: absolute;
      background-color: transparent;
      border-radius: 3px;
      font-size: 10px;
    }

    & > label {
      /* display: block; */
      margin-bottom: "5px";
    }

    & > input,
    textarea {
      padding: 8px;
      border: ${showError ? "1px solid red" : "1px solid #ccc"};
      border-radius: 4px;
      font-size: 14px;
      width: 100%;
      resize: vertical;
    }

    & > input:focus,
    textarea:focus {
      /* outline: 1px solid ${theme.accent}; */
      outline: ${showError ? "1px solid red" : `1px solid ${theme.accent}`};
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
  const errorMsg = meta.error;

  console.log({ meta });

  return (
    <StyledTextInput showError={showError} errorMsg={errorMsg}>
      {label && <label htmlFor={input.name}>{label}</label>}

      {isTextArea ? (
        <textarea {...input} {...props} />
      ) : (
        <input {...input} {...props} type={type} />
      )}

      {/* {errorMsg && meta.active && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          {meta.error}
        </div>
      )} */}
    </StyledTextInput>
  );
};
