import api from "./api";

export interface ContactFormModel {
    email: string,
    firstname: string,
    lastname: string,
    phone: string,
    message: string
}

export const subscribeContactForm = async (
  model: ContactFormModel
): Promise<void> => {
  const res = await api.post(`contact/subscribeForm`, model);

  if (res.status !== 200) {
    throw new Error("Failed to send the message!");
  }
};

export const subscribeNewsletter = async (
    email: string
  ): Promise<void> => {
    const res = await api.post(`contact/newsletter`, {email});
  
    if (res.status !== 200) {
      throw new Error("Failed to subscribe to newsletter!");
    }
};