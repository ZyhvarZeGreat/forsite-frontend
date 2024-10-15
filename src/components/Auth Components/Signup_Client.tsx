import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import Google from "../../assets/Google.png";
import Facebook from "../../assets/Facebook logo 2019.png";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../services/schemas";
import { RegisterType } from "../../services/types";
import { Checkbox } from "../../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Signup_Client = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, getValues, formState } =
    useForm<RegisterType>({
      resolver: zodResolver(signupSchema),
    });

  const { errors } = formState;
  const onSubmitLogin: SubmitHandler<RegisterType> = () => {
    const data: FieldValues = getValues();
    console.log(data);
  };
  return (
    <div className="flex   items-center justify-center  w-full flex-col">
      <div className="flex basis-full w-full flex-col items-center h-full  ">
        <div className="   w-full flex items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmitLogin)}
            className="flex flex-col self-center  w-full xl:w-8/12   font-euclid items-center "
          >
            <div className="flex   w-full  flex-col gap-2 xl:gap-6">
              <div className="w-full  flex  gap-8">
                <div className="flex basis-full sm:basis-1/2 items-start flex-col gap-2">
                  <Input
                    placeholder="First Name"
                    className="h-14 text-base text-medium"
                  />
                  {errors && (
                    <div className="text-red-500 ">{errors.email?.message}</div>
                  )}
                </div>
                <div className="flexbasis-full  sm:basis-1/2 items-start flex-col gap-2">
                  <div className="w-full relative items-start flex">
                    <Input
                      className="h-14 text-base text-medium"
                      id="Last Name"
                      {...register("password")}
                      placeholder="LastName"
                    />
                  </div>
                </div>

                {errors && (
                  <div className="text-red-500 items-start flex ">
                    {errors.password?.message}
                  </div>
                )}
              </div>
              <div className="w-full  flex flex-col gap-4">
                <div className="flex basis-1/2 items-start flex-col gap-2">
                  <Input
                    placeholder="Email address/Unique Identification Number"
                    className="h-14 text-base text-medium"
                  />
                  {errors && (
                    <div className="text-red-500 ">{errors.email?.message}</div>
                  )}
                </div>
                <div className="flex basis-1/2 items-start flex-col gap-2">
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
                        {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
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
              <Select>
                <SelectTrigger className="  text-[#ABABAB] text-start h-14 w-full px-8 rounded-none  border  shadow-none">
                  <SelectValue
                    className="text-xl"
                    placeholder=" Specialization"
                  />
                </SelectTrigger>

                <SelectContent className="">
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="w-full py-4 flex  items-center justify-between">
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
              className=" bg-[#386A8B] h-16 hover:bg-[#386A8B]/80 w-full text-lg "
            >
              Login
            </Button>

            <div className="w-full py-6  flex items-center justify-center gap-5">
              <div className="w-1/3 h-[0.1px] bg-[#386A8B]"></div>
              <p className="font-medium text-sm text-[#808B93]">
                or continue with{" "}
              </p>
              <div className="w-1/3 h-[0.1px] bg-[#386A8B]"></div>
            </div>

            <div className="w-full  flex items-center justify-center gap-16">
              <div className="flex  font-medium h-16 w-[195px] gap-2 items-center justify-center border-2 border-[#386A8B] rounded-md text-[#386A8B]">
                <img className="w-6" src={Google} />
                Google
              </div>
              <div className="flex font-medium  h-16 w-[195px] gap-2 items-center justify-center border-2 border-[#386A8B] rounded-md text-[#386A8B]">
                <img className="w-6" src={Facebook} />
                Facebook
              </div>
            </div>
            <div className=" w-full text-[#386A8B] items-center  mt-6 justify-center gap-4 flex  font-semibold">
              <p className="font-medium">Dont have an account?</p>
              <Link className="" to="/signup">
                Create an Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup_Client;
