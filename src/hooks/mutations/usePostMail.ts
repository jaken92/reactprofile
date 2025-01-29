// import mailApiClient from "../../api/apiClients";
// import { useMutation } from "@tanstack/react-query";

// export const postMail = async (mailData: {
//   mailAddress: string;
//   subject: string;
//   message: string;
// }) => {
//   const response = await mailApiClient.post("/mail", mailData);
//   return response.data;
// };

// export const usePostMail = () => {
//   return useMutation(postMail);
// };

import mailApiClient from "../../api/apiClients";
import { useMutation } from "@tanstack/react-query";

// Define the type for the mutation function
type PostMailFunction = (mailData: {
  mailaddress: string;
  subject: string;
  message: string;
  firstName: string;
  lastName: string;
}) => Promise<any>;

export const postMail: PostMailFunction = async (mailData) => {
  const response = await mailApiClient.post("/mail", mailData);
  return response.data;
};

export const usePostMail = () => {
  return useMutation({
    mutationFn: postMail,
    onSuccess: (data) => {
      console.log("Email sent successfully:", data);
    },
    onError: (error) => {
      console.error("Error sending email:", error);
      // Optionally, rethrow the error to ensure it's caught by the caller
      throw error;
    },
    onSettled: (data, error) => {
      console.log("Email sending attempt completed:", { data, error });
    },
  });
};
