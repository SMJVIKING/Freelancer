import AuthContainer from "../features/authentication/AuthContainer";

function Auth() {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center mt-10">
        <AuthContainer />
      </div>
    </div>
  );
}
export default Auth;

// step => 1:2 ?
// sendOTP
// checkOTP
