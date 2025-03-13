import { Avatar, AvatarImage } from "@/components/ui/avatar";
import "./Auth.css"
import SignupForm from "./SignupForm";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
import Signin from "./SigninForm";

const Auth = () => {
    const navigate = useNavigate();
    const location = useLocation();
  return (
    <div className="h-screen relative authContainer">
      <div className="absolute top-0 right-0 left-0 bottom-0  bg-opacity-50">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-[35rem] w-[30rem] rounded-md z-50 bg-black bg-opacity-50 shadow-2xl shadow-black px-10">
          <div className="text-6xl font-bold flex justify-center items-center gap-1 py-3">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/src/assets/y.webp" />
            </Avatar>

            <div>
              <span className=" text-orange-600">YUKTI</span>
            </div>
          </div>

          {location.pathname == "/signup" ? (
            <section className="w-full">
              <SignupForm />
              <div className="flex items-center justify-center py-3">
                <span>Already have an account?</span>
                <Button
                  onClick={() => navigate("/signin")}
                  variant="link"
                >
                  Sign in
                </Button>
              </div>
            </section>
          ) : location.pathname == "/forgot-password" ? (
            <section className="w-full">
              <ForgotPasswordForm />
              <div className="flex items-center justify-center py-3">
                <span>Go back to login</span>
                <Button
                  onClick={() => navigate("/signin")}
                  variant="link"
                >
                  Sign in
                </Button>
              </div>
            </section>
          ) : (
            <section className="w-full">
              <Signin />
              <div className="flex items-center justify-center py-3">
                <span>{"don't have an account?"}</span>
                <Button
                  onClick={() => navigate("/signup")}
                  variant="link"
                >
                  Sign up now
                </Button>
              </div>
              <div className="">
                <Button
                  className="w-full py-5"
                  onClick={() => navigate("/forgot-password")}
                  variant="outline"
                >
                  Forgot Password
                </Button>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth