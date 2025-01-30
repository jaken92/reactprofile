import { FieldRenderProps } from "react-final-form";

export interface TextInputProps extends FieldRenderProps<string, HTMLElement> {
  label?: string;
  type?: string;
}

export interface StyledTextInputProps {
  showError: boolean;
  errorMsg?: string;
}
