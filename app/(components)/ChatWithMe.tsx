import React from "react";
import { Card, CardBody, Button } from "@nextui-org/react";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

type Props = {};

const ChatWithMe = (props: Props) => {
  return (
    <div className="mt-8">
      <Card className="bg-slate-800 h-[180px] text-white rounded-[26px] p-4">
        <CardBody>
          <div className="flex flex-row justify-between">
            <p className="">Partnership chat with me</p>
            <Button
              isIconOnly
              href="https://calendly.com/niazizarif/"
              as={Link}
              className="text-slate-200 bg-slate-800"
            >
              <MdEmail className="h-6 w-6" />
            </Button>
          </div>
          <p className="text-sm pt-2 text-gray-500">
            Lets find some time to talk about your upcomming project!
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default ChatWithMe;
