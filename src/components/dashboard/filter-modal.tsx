import { useState } from "react";
import Button from "../common/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Line from "./buyer/line";
import CloseBtn from "./close-btn";

const FilterModal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <div>
          <Button handleClick={toggleIsOpen} className="!w-auto  h-12">
            فیلتر ها
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-background p-0 !h-auto w-[633px]" dir="rtl">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <div className="w-full flex justify-center flex-wrap pb-[19px]  px-[19px]">
          <header className="flex justify-between items-center w-full">
            <h1 className="text-2xl font-medium text-text">فیلتر ها</h1>
            <CloseBtn onClick={toggleIsOpen} />
          </header>
          <Line className="w-full" />
          <div className="flex flex-wrap justify-between gap-5 py-[19px]">{children}</div>

          <footer className="w-full flex justify-center">
            <Button className="!w-auto">اعمال فیلتر</Button>
          </footer>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default FilterModal;
