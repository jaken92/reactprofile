import { BubbleSection } from "../../components";
import { StyledContactForm, StyledContactPage } from "./Contact.styles";
import { Field, Form } from "react-final-form";
import { TextInput } from "../../components/Inputs/TextInput";
import { usePostMail } from "../../hooks/mutations";
import { useTheme } from "styled-components";
import {
  composeValidators,
  isValidEmail,
  noHtmlTags,
  noNumbers,
  noSpecialChars,
  required,
} from "../../functions/validators";
// import { useForm } from "react-final-form";
import { ContactFormData } from "./Contact.types";

export const Contact = () => {
  const mutation = usePostMail();
  // const contactForm = useForm();

  const theme = useTheme();

  const onSubmit = async (values: ContactFormData, form: any) => {
    await mutation.mutateAsync({
      email: values.email,
      subject: values.subject,
      message: values.message,
      firstName: values.firstName,
      lastName: values.lastName,
    });

    form.reset();
  };

  return (
    <BubbleSection>
      <StyledContactPage>
        <StyledContactForm>
          <fieldset>
            <legend>Contact</legend>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit, form, submitting, pristine }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <Field
                      name="firstName"
                      component={TextInput}
                      label="First Name"
                      placeholder="First Name"
                      type="name"
                      validate={composeValidators(
                        required,
                        noNumbers,
                        noSpecialChars
                      )}
                    />
                    <div></div>
                  </div>
                  <div>
                    <Field
                      name="lastName"
                      component={TextInput}
                      label="Last Name"
                      placeholder="Last Name"
                      type="name"
                      validate={composeValidators(
                        required,
                        noNumbers,
                        noSpecialChars
                      )}
                    />
                  </div>
                  <div>
                    <Field
                      name="email"
                      component={TextInput}
                      label="Email Address"
                      placeholder="Enter your email"
                      type="email"
                      validate={composeValidators(required, isValidEmail)}
                    />
                  </div>
                  <div>
                    <Field
                      name="subject"
                      component={TextInput}
                      label="Subject"
                      placeholder="Subject"
                      type="text"
                      validate={composeValidators(required, noSpecialChars)}
                    />
                  </div>
                  <div>
                    <Field
                      name="message"
                      component={TextInput}
                      label="Message"
                      placeholder="Write your message..."
                      type="textarea"
                      validate={composeValidators(required, noHtmlTags)}
                    />
                  </div>

                  <div className="buttons">
                    <button type="submit" disabled={submitting || pristine}>
                      {mutation.isPending ? (
                        <svg
                          className="spinner"
                          width="24"
                          height="24"
                          fill={theme.accent}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <style></style>
                          <g className="spinner">
                            <circle cx="12" cy="2.5" r="1.5" opacity=".14" />
                            <circle
                              cx="16.75"
                              cy="3.77"
                              r="1.5"
                              opacity=".29"
                            />
                            <circle
                              cx="20.23"
                              cy="7.25"
                              r="1.5"
                              opacity=".43"
                            />
                            <circle
                              cx="21.50"
                              cy="12.00"
                              r="1.5"
                              opacity=".57"
                            />
                            <circle
                              cx="20.23"
                              cy="16.75"
                              r="1.5"
                              opacity=".71"
                            />
                            <circle
                              cx="16.75"
                              cy="20.23"
                              r="1.5"
                              opacity=".86"
                            />
                            <circle cx="12" cy="21.5" r="1.5" />
                          </g>
                        </svg>
                      ) : (
                        "Send"
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => form.reset()}
                      disabled={submitting || pristine}>
                      Reset
                    </button>
                  </div>
                </form>
              )}
            />
          </fieldset>
        </StyledContactForm>
      </StyledContactPage>
    </BubbleSection>
  );
};
