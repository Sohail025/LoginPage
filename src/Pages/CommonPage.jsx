import { useSelector } from "react-redux";
import SignInForm from "../Components/SignInForm";
import SignUpForm from "../Components/SignUpForm";
export const CommonPage = () => {
  const { status } = useSelector((state) => state);
  return (
    <div className="flex flex-col min-h-screen">
      <header className="mx-3 mt-1">Your Logo</header>
      <div className="flex flex-row justify-center flex-grow h-full w-full items-center">
        <section className="w-full mx-8 flex justify-center items-center sm:mx-20 md:mx-0 md:w-[50%]">
          {status ? <SignInForm /> : <SignUpForm />}
        </section>
        <section className="w-[50%] hidden md:block">
          <img
            className="w-full h-auto"
            src="discussion.svg"
            alt="Discussion Photo"
          />
        </section>
      </div>
    </div>
  );
};
export default CommonPage;
