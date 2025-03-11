import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router";
import { IoIosArrowDown } from "react-icons/io";

const BurgerMenu = ({ setDropMenu }) => {
  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Articles", path: "/articles" },
    {
      name: "Topics",
      subCat: [
        { name: "Coding", path: "/topics/coding" },
        { name: "Cooking", path: "/topics/cooking" },
        { name: "Football", path: "/topics/football" },
      ],
    },
    { name: "Contacts", path: "/contacts" },
  ];

  const [arrowActive, setArrowActive] = useState(false);

  const onClickTopics = (e) => {
    setArrowActive(!arrowActive);
    ["Coding", "Football", "Cooking"].includes(e.target.innerText) &&
      setDropMenu(e.target.innerText.toLowerCase());
  };

  const location = useLocation();
  return (
    <Sheet onOpenChange={() => setArrowActive(false)}>
      <SheetTrigger className="flex justify-center items-center">
        <RxHamburgerMenu className="text-[32px] hover:opacity-75 transition-opacity ease-in-out" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle>
          <div className="flex items-center select-none">
            <img className="h-[18px] mr-[5px]" src="/user.svg" alt="user" />
            <p className="font-normal text-[15px]">weegembump</p>
          </div>
        </SheetTitle>
        <SheetDescription></SheetDescription>
        <nav className="mt-10 flex flex-col items-center gap-8">
          {menuLinks.map((link, idx) =>
            link.subCat ? (
              <Collapsible className="flex flex-col" key={idx}>
                <CollapsibleTrigger
                  onClick={onClickTopics}
                  className="text-xl flex items-center ml-7"
                >
                  Topics
                  <IoIosArrowDown
                    className={`${arrowActive && "rotate-180"} ${
                      location.pathname.length > 12 && "text-[#dd1331]"
                    } w-8`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-center gap-8">
                  {link.subCat.map((subcat, index) => (
                    <SheetClose key={index} asChild className="first:mt-8">
                      <Link
                        className={`${
                          subcat.path === location.pathname && "!text-[#dd1331]"
                        } text-xl hover:text-[#dd1331]/70 transition-all`}
                        to={subcat.path}
                        onClick={onClickTopics}
                      >
                        {subcat.name}
                      </Link>
                    </SheetClose>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <SheetClose key={idx} asChild>
                <Link
                  className={`${
                    link.path === location.pathname && "!text-[#dd1331]"
                  } text-xl hover:text-[#dd1331]/70 transition-all`}
                  to={link.path}
                >
                  {link.name}
                </Link>
              </SheetClose>
            )
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default BurgerMenu;
