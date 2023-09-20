import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import DarkSwitch from "@/app/(components)/DarkSwitch";

import { motion, useScroll, useSpring } from "framer-motion";
import { useTheme } from "next-themes";
type Props = {};

const Nav = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <Navbar className="bg-transparent rounded-full flex justify-between">
      <motion.div
        className="h-[5px] fixed bg-[#FF5659] top-0 right-0 left-0 "
        style={{ scaleX }}
      />
      <NavbarBrand>ℤ</NavbarBrand>
      <DarkSwitch />
    </Navbar>
  );
};

export default Nav;
