"use client";
import { Avatar, Link, Divider } from "@nextui-org/react";
import { CheckMarkIcon } from "@/app/CheckMarkIcon";
import { Button } from "@nextui-org/react";
import {
  AiFillCalendar,
  AiFillChrome,
  AiFillFacebook,
  AiFillInstagram,
  AiFillMediumCircle,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import ChatWithMe from "./(components)/ChatWithMe";

import Contact from "./(components)/Contact";
import Projeckts from "./(components)/Projects";
import { motion } from "framer-motion";
import Nav from "./(components)/Nav";

export default function Home() {
  return (
    <main className="min-full-screen text-center container mx-auto max-w-2xl pt-16 px-6 ">
      <Nav />
      <motion.div initial={{ scale: 0 }} animate={{ rotate: 360, scale: 1 }}>
        <Avatar
          isBordered
          color="secondary"
          name="Niazi"
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          className="w-24 h-24 text-large mx-auto mt-8"
        />
      </motion.div>
      <div className="flex flex-row mx-auto justify-center align-center space-x-3 mt-8">
        <div className="text-center font-bold text-black dark:text-white">
          Zarifullah Niazi
        </div>
        <CheckMarkIcon />
      </div>
      <div className="max-w-[80%] mt-8 mx-auto">
        <p className="text-gray">
          I am a system designer, software develper solving muilt-variant
          problems whose main goals is to create stuff and make life easier for
          the people.
        </p>
      </div>
      <div className="mt-6 flex flex-row justify-center align-center space-x-4">
        <Button className="bg-white " isIconOnly aria-label="Like">
          <Link href="#" className="text-slate-800">
            <AiFillInstagram className="h-6 w-6" />
          </Link>
        </Button>
        <Button className="bg-white " isIconOnly aria-label="Like">
          <Link href="#" className="text-slate-800">
            <AiFillYoutube className="h-6 w-6" />
          </Link>
        </Button>
        <Button className="bg-white " isIconOnly aria-label="Like">
          <Link href="#" className="text-slate-800">
            <AiFillTwitterSquare className="h-6 w-6" />
          </Link>
        </Button>
        <Button className="bg-white " isIconOnly aria-label="Like">
          <Link href="#" className="text-slate-800">
            <AiFillFacebook className="h-6 w-6" />
          </Link>
        </Button>
        <Button className="bg-white " isIconOnly aria-label="Like">
          <Link href="#" className="text-slate-800">
            <AiFillCalendar className="h-6 w-6" />
          </Link>
        </Button>
        <Button className="bg-white " isIconOnly aria-label="Like">
          <Link href="#" className="text-slate-800">
            <AiFillMediumCircle className="h-6 w-6" />
          </Link>
        </Button>
      </div>
      <div className="mt-8 flex flex-row justify-center align-center space-x-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button href="#" as={Link} className="">
            <AiFillChrome className="h-4 w-4" />
            Portfolio
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {" "}
          <Button
            href="#"
            as={Link}
            className="text-white bg-[#FF5659] hover:shadow-md"
          >
            <AiOutlineCloudDownload className="h-4 w-4 text-white" />
            Download CV
          </Button>
        </motion.div>
      </div>
      <ChatWithMe />
      <Divider className="mt-8" />
      <Projeckts />
      <Divider className="mt-8" />
      <Contact />
      <Divider className="mt-8" />
      <p className="mt-8 text-gray-400">Zarif 2023</p>
    </main>
  );
}
