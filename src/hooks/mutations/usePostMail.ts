import mailApiClient from "../../api/apiClients";
import { useMutation } from "@tanstack/react-query";

type PostMailFunction = (mailData: {
  email: string;
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
      throw error;
    },
    onSettled: (data, error) => {
      console.log("Email sending attempt completed:", { data, error });
    },
  });
};
