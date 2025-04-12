import { Toaster } from "sonner";
import AuthForm from "@/components/AuthForm";

const Page = () => {
  return (
    <>
      <Toaster position="bottom-right" />
      <AuthForm type="sign-in" />
    </>
  );
};

export default Page;
