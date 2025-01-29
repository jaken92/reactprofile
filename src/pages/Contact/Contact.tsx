import { BubbleSection } from "../../components";
import { StyledContactPage } from "./Contact.styles";
import styled, { css } from "styled-components";
import { Field, Form } from "react-final-form";
import { TextInput } from "../../components/Inputs/TextInput";
import { usePostMail } from "../../hooks/mutations";

const StyledContactForm = styled.section(
  ({ theme }) => css`
    margin-top: 8rem;
    margin-bottom: 8rem;
    background-color: ${theme.isDark ? theme.secondary : theme.primary};
    width: 60vw;
    border-radius: 20px;
    padding: 0.8rem;
    padding-top: 5px; //TODO: replace magic number to compensate fieldset legend.
    box-shadow: ${theme.isDark
      ? "none"
      : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"};

    & > fieldset {
      border: 1px solid ${theme.accent};
      border-radius: 5px;
      width: 100%;
      padding: 20px;

      & > legend {
        padding: 0px 6px;
        color: ${theme.accent};
        text-transform: uppercase;
      }

      & form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: baseline;
        margin: 0 auto;
        width: 100%;
        overflow-x: none;

        & > div {
          width: 100%;
          margin-bottom: 1rem;

          & button {
            border: 2px solid ${theme.accent};
            font-size: 1rem;
            background-color: transparent;
            color: ${theme.accent};
            border-radius: 5px;
            cursor: pointer;
            padding: 5px 8px;
            transition: 0.3s;
            flex-shrink: 0;
            margin: 0 0.5rem 0 0;

            &:hover {
              background-color: ${theme.accent};
              color: ${theme.primary};
            }

            &:active {
              scale: 0.9;
            }

            @media only screen and (min-width: 1750px) {
              font-size: 24px;
            }
          }
        }
      }
    }
  `
);

interface ContactFormData {
  email: string;
  subject: string;
  message: string;
  firstName: string;
  lastName: string;
}

export const Contact = () => {
  const mutation = usePostMail();

  const onSubmit = async (values: ContactFormData) => {
    console.log(values);
    mutation.mutate({
      email: values.email,
      subject: values.subject,
      message: values.message,
      firstName: values.firstName,
      lastName: values.lastName,
    });
  };

  return (
    <BubbleSection>
      <StyledContactPage>
        <StyledContactForm>
          <fieldset>
            <legend>Contact</legend>
            <Form
              onSubmit={onSubmit}
              // initialValues={{
              //   firstName: "",
              //   lastName: "",
              //   email: "",
              //   subject: "",
              //   message: "",
              // }}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <Field
                      name="firstName"
                      component={TextInput}
                      label="First Name"
                      placeholder="First Name"
                      type="name"
                    />
                  </div>
                  <div>
                    <Field
                      name="lastName"
                      component={TextInput}
                      label="Last Name"
                      placeholder="Last Name"
                      type="name"
                    />
                  </div>
                  <div>
                    <Field
                      name="email"
                      component={TextInput}
                      label="Email Address"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                  <div>
                    <Field
                      name="subject"
                      component={TextInput}
                      label="Subject"
                      placeholder="Subject"
                      type="text"
                    />
                  </div>
                  <div>
                    <Field
                      name="message"
                      component={TextInput}
                      label="Message"
                      placeholder="Write your message..."
                      type="textarea"
                    />
                  </div>

                  <div className="buttons">
                    <button
                      // onClick={onSubmit}
                      type="submit"
                      disabled={submitting || pristine}>
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={() => form.reset()}
                      disabled={submitting || pristine}>
                      Reset
                    </button>
                  </div>
                  {/* <pre>{JSON.stringify(values)}</pre> */}
                </form>
              )}
            />
          </fieldset>
        </StyledContactForm>
      </StyledContactPage>
    </BubbleSection>
  );
};
