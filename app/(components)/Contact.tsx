import React from "react";
import { Input, Button } from "@nextui-org/react";
import { useTheme } from "next-themes";

type Props = {};

const Contact = (props: Props) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mt-8">
      <div>
        The current theme is: {theme}
        <button onClick={() => setTheme("light")}>Light Mode</button>
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      </div>
      <h5 className="font-bold text-gray dark:text-white">
        Exclusive content stright to your inbox
      </h5>
      <div className="flex flex-row justify-center items-center mt-6 space-x-4">
        <Input variant="faded" type="username" label="Your first name" />
        <Input variant="faded" type="email" label="Email" />
      </div>
      <Button className="text-white bg-[#FF5659] hover:shadow-md w-full mt-4 h-14">
        Subsribe to the newsletter
      </Button>
      <p className="text-slate-300 mt-2">Not worry, we do not spam</p>
    </div>
  );
};

export default Contact;
