import Button from "../common/button";
import { WarningSVG } from "../svg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const WarningModal = ({ title, children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>{children}</div>
      </DialogTrigger>
      <DialogContent className="bg-background" dir="rtl">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <div className="w-full flex justify-center flex-wrap gap-y-7">
          <WarningSVG />
          <h1 className="text-[24px] font-bold text-text text-center">
            {title}
          </h1>
          <div className="flex gap-2">
            <Button className="!bg-transparent !text-text">انصراف</Button>
            <Button>موافقت</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default WarningModal;
