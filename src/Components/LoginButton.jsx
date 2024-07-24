export const LoginButton = ({ onsubmit, name }) => {
  return (
    <button
      onClick={onsubmit}
      type="submit"
      className="my-4 bg-black text-white py-2 rounded font-[Poppins]"
    >
      {name}
    </button>
  );
};
export default LoginButton;
