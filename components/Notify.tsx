"use client";
import { toast } from "react-toastify";

interface notifType {
  type: "success" | "error" | "info" | "warning";
  msg: string;
}

const Notify = () => {
  const notify = ({ type, msg }: notifType) => {
    switch (type) {
      case "success":
        toast.success(msg);
        break;
      case "error":
        toast.error(msg);
        break;
      case "info":
        toast.info(msg);
        break;
      case "warning":
        toast.warning(msg);
        break;
      default:
        toast(msg);
        break;
    }
  };

  return (
    <button
      onClick={() => notify({ type: "error", msg: "Operation Successful!" })}>
      Notify!
    </button>
  );
};

export default Notify;
