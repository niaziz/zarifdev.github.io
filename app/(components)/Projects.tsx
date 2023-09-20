import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import NextImage from "next/image";
import Dash from "@/public/dash.png";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="mt-8">
      <h5 className="font-bold text-black dark:text-white">Projects</h5>
      <div className="flex space-x-8 mt-8">
        <Card
          isFooterBlurred
          className="w-full h-[200px] col-span-12 sm:col-span-7 hover:shadow-md rounded-[26px]"
        >
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/hero-card-complete.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Podcast</p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Soon...
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[200px] col-span-12 sm:col-span-7 rounded-[26px]"
        >
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://i.ibb.co/gR44LyD/dash.webp"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Dashborad</p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Soon...
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
