const loginOb = {
  text: "Already have am Account ? ",
  value: "Login",
};
const registerOb = {
  text: "Don't Have an Account ? ",
  value: "Register",
};
export const BackupLoginButton = ({ status, BackupHandler }) => {
  return (
    <div className="flex justify-center items-center font-[Poppins]">
      <p className="text-[0.8rem] my-2">
        {status === "Register" ? loginOb.text : registerOb.text}
        <span onClick={BackupHandler} className="font-bold cursor-pointer">
          {status === "Register" ? loginOb.value : registerOb.value}
        </span>
      </p>
    </div>
  );
};
export default BackupLoginButton;
