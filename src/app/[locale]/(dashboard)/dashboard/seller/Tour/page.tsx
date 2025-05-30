"use client";
import Line from "@/components/dashboard/buyer/line";
import ModalStep2 from "@/components/dashboard/buyer/modalStep2";
import FilterModal from "@/components/dashboard/filter-modal";
import DeleteSVG from "@/components/dashboard/svg/DeleteSVG";
import EditSVG from "@/components/dashboard/svg/EditSVG";
import TableDashboard from "@/components/dashboard/table";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const properties = [
  {
    id: 1,
    name: "هتل ساران زبید رشت",
    price: "۸٬۰۰۰٬۰۰۰",
    startDate: "۱۴۰۴/۰۲/۱۰",
    endDate: "۱۴۰۴/۰۲/۱۵",
    score: "۴ از ۵",
    reservations: 5,
  },
  {
    id: 2,
    name: "تور کوه‌نوردی دماوند",
    price: "۱۲٬۰۰۰٬۰۰۰",
    startDate: "۱۴۰۴/۰۳/۰۵",
    endDate: "۱۴۰۴/۰۳/۱۰",
    score: "۴.۵ از ۵",
    reservations: 8,
  },
  {
    id: 3,
    name: "تور جنگل‌های هیرکانی",
    price: "۶٬۵۰۰٬۰۰۰",
    startDate: "۱۴۰۴/۰۳/۱۰",
    endDate: "۱۴۰۴/۰۳/۱۲",
    score: "۳.۸ از ۵",
    reservations: 3,
  },
  {
    id: 4,
    name: "تور کویر مرنجاب",
    price: "۵٬۰۰۰٬۰۰۰",
    startDate: "۱۴۰۵/۰۵/۱۸",
    endDate: "۱۴۰۵/۰۵/۲۰",
    score: "۴.۲ از ۵",
    reservations: 9,
  },
  {
    id: 5,
    name: "تور دریاچه ارومیه",
    price: "۹٬۰۰۰٬۰۰۰",
    startDate: "۱۴۰۴/۰۶/۲۰",
    endDate: "۱۴۰۴/۰۶/۲۲",
    score: "۴ از ۵",
    reservations: 4,
  },
];

export const tableHeaderItems = [
  { text: "نام تور", clx: "rounded-r-xl text-center w-73" },
  { text: "هزینه تور", clx: "text-center" },
  { text: "تاریخ", clx: "text-center" },
  { text: "امتیاز", clx: "text-center" },
  { text: "شرکت کنندگان", clx: "text-center" },
  { text: "", clx: "rounded-l-xl text-center" },
];

export default function ToursList() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
        <h1 className="text-xl font-semibold my-auto order-1 md:order-2">
          لیست تور های من
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto order-2 md:order-1">
          <FilterModal />
          <Input
            dir="rtl"
            placeholder="نام تور مورد نظر ....."
            className="h-12 placeholder:text-text-secondary placeholder:text-[16px] border-border border-[2px] px-5 rounded-2xl w-full md:w-100"
          />
        </div>
      </div>
      <Line />

      <TableDashboard
        add={true}
        addTitle="تور"
        headerSecondary={true}
        tableHeader={tableHeaderItems}
        tableContent={properties.map((property) => (
          <tr key={property.id} className="bg-table-main/30 rounded-xl">
            <td className="pl-6 rounded-r-xl">
              <div className="flex gap-2 w-73">
                <div className="bg-text-secondary/30 w-27 h-20 m-0.5 rounded-[12px]" />
                <div className="py-7">{property.name}</div>
              </div>
            </td>

            <td className="px-6 py-7 text-center">{property.price}</td>
            <td className="px-6 py-7">
              <div className="flex justify-center gap-1">
                <h1 className="font-extrabold font-yekan">
                  {property.startDate}
                </h1>
                <span>/</span>
                <h1 className="font-extrabold font-yekan">
                  {property.endDate}
                </h1>
              </div>
            </td>
            <td className="px-6 py-7 text-center">{property.score}</td>
            <td className="px-6 py-7 text-center">{property.reservations}</td>
            <td className="px-6 py-2 relative rounded-l-xl text-center">
              <Popover>
                <PopoverTrigger asChild>
                  <button className="text-xl font-bold cursor-pointer">
                    ...
                  </button>
                </PopoverTrigger>
                <PopoverContent className="text-right w-32 p-2 bg-background px-1 border-border shadow-sm shadow-border rounded-[15px]">
                  <div className="space-y-2">
                    <div className="w-full flex justify-end gap-2 cursor-pointer hover:bg-border rounded-[10px] px-1">
                      <h1>ویرایش</h1>
                      <div className="my-auto">
                        <EditSVG />
                      </div>
                    </div>
                    <div className="w-full flex justify-end gap-2 cursor-pointer hover:bg-border rounded-[10px] px-1">
                      <ModalStep2
                        name="حذف"
                        desc="امکان بازگشت پس از حذف وجود ندارد!"
                        title="آیا از حذف تور مطمئن هستید؟"
                        button="حذف"
                      />
                      <div className="my-auto">
                        <DeleteSVG />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </td>
          </tr>
        ))}
      />
    </div>
  );
}
