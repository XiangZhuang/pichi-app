import { init, send } from "emailjs-com";
import emailKey from "../credentials/emailKey";

export const sentContactForm = async (payload: {
  name: string;
  email: string;
  phone: string;
  addr: string;
  message: string;
}) => {
  init(emailKey.USER_ID);
  await send(
    emailKey.SERVICE_ID,
    emailKey.TEMPLATE_ID,
    payload,
    emailKey.USER_ID
  );
};
