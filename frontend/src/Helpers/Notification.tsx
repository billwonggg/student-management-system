import { toast, TypeOptions } from "react-toastify";

export const sendNotif = (msg: string, type: TypeOptions) => {
  toast(msg, {
    position: "top-right",
    autoClose: 2000,
    type: type,
  });
};
