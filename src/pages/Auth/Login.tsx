import login from "../../assets/login.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import Google from "../../assets/Google.png";
import Facebook from "../../assets/Facebook logo 2019.png";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../services/schemas";
import { LoginType } from "../../services/types";
import { Checkbox } from "../../components/ui/checkbox";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  type scenes = "Initial" | "Recover";

  const [scene, setScene] = useState<scenes>("Initial");
  console.log(setScene);
  const { register, handleSubmit, getValues, formState } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const { errors } = formState;
  const onSubmitLogin: SubmitHandler<LoginType> = () => {
    const data: FieldValues = getValues();
    console.log(data);
  };
  return (
    <div className=" h-screen w-screen flex items-center justify-center">
      <div className="w-1/2 h-full">
        <img className="w-full h-full object-cover" src={login} />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        {scene === "Initial" && (
          <div className="flex  items-center justify-center gap-10 w-full flex-col">
            <h1 className="text-2xl font-medium">
              Welcome back to COG for Engineers
            </h1>

            <div className="flex basis-full w-full flex-col items-center h-full  sm:basis-1/2">
              <div className="   w-full flex items-center justify-center">
                <form
                  onSubmit={handleSubmit(onSubmitLogin)}
                  className="flex flex-col self-center gap-6 w-full xl:w-8/12   font-euclid items-center "
                >
                  <div className="flex   w-9/12  flex-col gap-2 xl:gap-6">
                    <div className="w-full flex flex-col gap-8">
                      <div className="flex items-start flex-col gap-2">
                        <Input
                          placeholder="Email address/Unique Identification Number"
                          className="h-14 text-base text-medium"
                        />
                        {errors && (
                          <div className="text-red-500 ">
                            {errors.email?.message}
                          </div>
                        )}
                      </div>
                      <div className="flex items-start flex-col gap-2">
                        <div className="w-full relative items-start flex">
                          <Input
                            className="h-14 text-base text-medium"
                            id="passsword"
                            {...register("password")}
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                          />

                          <div className=" right-0 h-full  flex items-center absolute">
                            <Button
                              type="submit"
                              variant={"ghost"}
                              onClick={() => {
                                setShowPassword(!showPassword);
                              }}
                            >
                              {showPassword ? (
                                <EyeOpenIcon />
                              ) : (
                                <EyeClosedIcon />
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>

                      {errors && (
                        <div className="text-red-500 items-start flex ">
                          {errors.password?.message}
                        </div>
                      )}
                    </div>
                    <div className="w-full flex  items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Checkbox />
                        <p className=" font-regular ">Remember Me</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <p className="  text-[#386A8B] font-medium">
                          Forgot Password
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button
                    size={"lg"}
                    className=" bg-[#386A8B] h-16 hover:bg-[#386A8B]/80 w-9/12 text-lg "
                  >
                    Login
                  </Button>

                  <div className="w-9/12 py-6  flex items-center justify-center gap-5">
                    <div className="w-1/3 h-[0.1px] bg-[#386A8B]"></div>
                    <p className="font-medium text-sm text-[#808B93]">
                      or continue with{" "}
                    </p>
                    <div className="w-1/3 h-[0.1px] bg-[#386A8B]"></div>
                  </div>

                  <div className="w-9/12  flex items-center justify-center gap-12">
                    <div className="flex  font-medium h-16 w-[195px] gap-2 items-center justify-center border-2 border-[#386A8B] rounded-md text-[#386A8B]">
                      <img className="w-6" src={Google} />
                      Google
                    </div>
                    <div className="flex font-medium  h-16 w-[195px] gap-2 items-center justify-center border-2 border-[#386A8B] rounded-md text-[#386A8B]">
                      <img className="w-6" src={Facebook} />
                      Facebook
                    </div>
                  </div>
                  <div className=" w-9/12 text-[#386A8B] items-center mt-8 justify-center gap-4 flex  font-semibold">
                    <p className="font-medium">Dont have an account?</p>
                    <Link className="" to="/signup">
                      Create an Account
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
