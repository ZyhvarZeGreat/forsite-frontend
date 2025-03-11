import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import sidebarArrow from "../../assets/sidebarArrow.png";
import { Eye, AddCircle } from "iconsax-react";
import { cn } from "../../lib/utils";

const PageDropdown = ({
  title,
  toTable,
  toAdd,
  toTableText,
  toAddText,
}: {
  title: string;
  toTable: string;
  toAdd: string;
  toTableText: string;
  toAddText: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#386A8B] py-3 flex items-center gap-4  px-4 rounded-md text-white"
        >
          {" "}
          {title}
          <img
            src={sidebarArrow}
            className={cn(
              "transition-all duration-300",
              isOpen ? "rotate-180" : "rotate-0"
            )}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="border  border-[#386A8B] py-3 flex flex-col items-start gap-4  px-8"
      >
        <DropdownMenuItem className="p-0 hover:bg-transparent bg-transparent flex flex-col items-start gap-2 w-full  m-0  text-lg font-euclid ">
          <Link
            className="w-full flex items-center gap-2 hover:bg-gray/500 text-base"
            to={toAdd}
          >
            <Eye />
            {toAddText}
          </Link>
          <Link
            className="w-full flex items-center gap-2 hover:bg-gray/500 text-base"
            to={toTable}
          >
            <AddCircle />
            {toTableText}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PageDropdown;
