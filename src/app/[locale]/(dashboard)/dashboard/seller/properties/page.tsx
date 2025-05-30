"use client";
import Line from "@/components/dashboard/buyer/line";
import ModalStep2 from "@/components/dashboard/buyer/modalStep2";
import FilterModal from "@/components/dashboard/filter-modal";
import CheckPopover from "@/components/dashboard/svg/CheckPopover";
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
    score: "۴ از ۵",
    views: 5,
    reservations: 5,
    status: "فعال",
  },
  {
    id: 2,
    name: "هتل ساران زبید رشت",
    price: "۸٬۰۰۰٬۰۰۰",
    score: "۴ از ۵",
    views: 5,
    reservations: 5,
    status: "در انتظار",
  },
  {
    id: 3,
    name: "هتل ساران زبید رشت",
    price: "۸٬۰۰۰٬۰۰۰",
    score: "۴ از ۵",
    views: 5,
    reservations: 5,
    status: "غیرفعال",
  },
  {
    id: 4,
    name: "هتل ساران زبید رشت",
    price: "۸٬۰۰۰٬۰۰۰",
    score: "۴ از ۵",
    views: 5,
    reservations: 5,
    status: "در انتظار",
  },
  {
    id: 5,
    name: "هتل ساران زبید رشت",
    price: "۸٬۰۰۰٬۰۰۰",
    score: "۴ از ۵",
    views: 5,
    reservations: 5,
    status: "فعال",
  },
];

const statusColor = {
  فعال: "bg-green-400 text-white",
  "در انتظار": "bg-yellow-400 text-black",
  غیرفعال: "bg-red-400 text-white",
};

export const tableHeaderItems = [
  { text: "نام اقامتگاه", clx: "rounded-r-xl" },
  { text: "قیمت", clx: null },
  { text: "امتیاز", clx: null },
  { text: "بازدیدها", clx: null },
  { text: "رزروها", clx: null },
  { text: "وضعیت", clx: null },
  { text: "", clx: "rounded-l-xl" },
];

export default function PropertyList() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
        <h1 className="text-xl font-semibold my-auto order-1 md:order-2">
          لیست املاک من
        </h1>
        <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center gap-4 md:gap-[19px] w-full md:w-auto order-2 md:order-1">
          <FilterModal></FilterModal>
          <Input
            dir="rtl"
            placeholder="نام ملک مورد نظر ....."
            className="h-12 placeholder:text-text-secondary placeholder:text-[16px] border-border border-[2px] px-5 rounded-2xl w-full md:w-100"
          />
        </div>
      </div>
      <Line />

      <TableDashboard
        add={true}
        addTitle="ملک"
        headerSecondary={true}
        tableHeader={tableHeaderItems}
        tableContent={properties.map((property) => (
          <tr key={property.id} className="bg-table-main/30 rounded-xl">
            <td className="pl-6 rounded-r-xl">
              <div className="flex gap-2 w-73 ">
                <div className="bg-text-secondary/30 w-27 h-20 m-0.5 rounded-[12px]" />
                {/* width={108} height={72} src={"x"} alt="" */}
                <div className="py-7">{property.name}</div>
              </div>
            </td>
            <td className="px-6 py-7">{property.price}</td>
            <td className="px-6 py-7">{property.score}</td>
            <td className="px-6 py-7">{property.views}</td>
            <td className="px-6 py-7">{property.reservations}</td>
            <td className="px-6 py-7">
              <span
                className={`px-3 py-1 rounded-full text-sm ${statusColor[property.status]}`}
              >
                {property.status}
              </span>
            </td>
            <td className="px-6 py-2 relative rounded-l-xl">
              <Popover>
                <PopoverTrigger asChild>
                  <button className="text-xl font-bold cursor-pointer">
                    ...
                  </button>
                </PopoverTrigger>
                <PopoverContent className="text-right w-32 p-2 bg-background px-1 border-border shadow-sm shadow-border rounded-[15px]">
                  <div className="space-y-2">
                    <div className="w-full flex justify-end gap-2 cursor-pointer hover:bg-border rounded-[10px] px-1">
                      <h1>فعال کردن</h1>
                      <div className="my-auto">
                        <CheckPopover />
                      </div>
                    </div>
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
                        title="آیا از حذف ملک مطمئن هستید؟"
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
