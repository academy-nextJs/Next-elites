"use client";
import InputSelect from "@/components/dashboard/buyer/inputSelect";
import Line from "@/components/dashboard/buyer/line";
import TableDashboard from "@/components/dashboard/table";
import {
  DashboardBuyerPaymentsStatus,
  DashboardBuyerPaymentsType,
} from "@/utils/constant/folder";
import { formatNumber } from "@/utils/helper/format-number";
import { CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

const transactions = [
  {
    id: 1,
    date: "12 مرداد 1401",
    time: "13:33",
    trackingCode: "137245678913476456",
    amount: "1250000",
    status: "تایید شده",
    type: "شارژ کیف پول",
  },
  {
    id: 2,
    date: "12 مرداد 1401",
    time: "13:33",
    trackingCode: "137245678913476456",
    amount: "1250000",
    status: "تایید شده",
    type: "شارژ کیف پول",
  },
  {
    id: 3,
    date: "12 مرداد 1401",
    time: "13:33",
    trackingCode: "137245678913476456",
    amount: "1250000",
    status: "تایید نشده",
    type: "رزرو",
  },
  {
    id: 4,
    date: "12 مرداد 1401",
    time: "13:33",
    trackingCode: "137245678913476456",
    amount: "1250000",
    status: "تایید شده",
    type: "رزرو",
  },
  {
    id: 5,
    date: "12 مرداد 1401",
    time: "13:33",
    trackingCode: "137245678913476456",
    amount: "1250000",
    status: "تایید نشده",
    type: "رزرو",
  },
  {
    id: 6,
    date: "12 مرداد 1401",
    time: "12:00",
    trackingCode: "137245678913476456",
    amount: "1250000",
    status: "تایید شده",
    type: "شارژ کیف پول",
  },
  {
    id: 7,
    date: "12 مرداد 1401",
    time: "12:00",
    trackingCode: "137245678913476456",
    amount: "1250000",
    status: "تایید نشده",
    type: "رزرو",
  },
  {
    id: 8,
    date: "12 مرداد 1401",
    time: "12:00",
    trackingCode: "137245678913476456",
    amount: "1250000",
    status: "تایید نشده",
    type: "رزرو",
  },
];

const tableHeaderItems = [
  { text: "تاریخ", clx: "rounded-r-xl" },
  { text: "شماره پیگیری", clx: null },
  { text: "مبلغ", clx: null },
  { text: "وضعیت پرداخت", clx: null },
  { text: " نوع تراکنش", clx: null },
  { text: "", clx: "rounded-l-xl" },
];

export default function TransactionList() {
  const [typeFilter, setTypeFilter] = useState("همه");
  const [statusFilter, setStatusFilter] = useState("همه");

  return (
    <div dir="rtl">
      <div className="flex justify-between mt-6">
        <h1 className="text-xl font-bold font-yekan mb-auto">
          لیست تراکنش های شما
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto order-2 md:order-1">
          <div className="flex flex-col flex-wrap gap-2 w-full sm:w-auto">
            <h1 className="font-yekan font-bold text-[14px]">نوع تراکنش</h1>
            <InputSelect
              value={typeFilter}
              items={DashboardBuyerPaymentsType}
              onChange={(val) => setTypeFilter(val)}
            />
          </div>
          <div className="flex flex-col flex-wrap gap-2 w-full sm:w-auto">
            <h1 className="font-yekan font-bold text-[14px]">وضعیت پرداخت</h1>
            <InputSelect
              value={statusFilter}
              items={DashboardBuyerPaymentsStatus}
              onChange={(val) => setStatusFilter(val)}
            />
          </div>
        </div>
      </div>

      <Line />

      <TableDashboard
        tableHeader={tableHeaderItems}
        tableContent={transactions.map((tx) => (
          <tr
            key={tx.id}
            className="bg-background hover:bg-background/30 rounded-xl overflow-hidden"
          >
            <td className="p-2 font-yekan font-semibold rounded-r-xl">
              {tx.date} - {tx.time}
            </td>
            <td className="p-2 font-yekan font-semibold">{tx.trackingCode}</td>
            <td className="p-2 font-yekan font-semibold">
              {formatNumber(Number(tx.amount))} تومان
            </td>
            <td className="p-2 font-yekan font-semibold">
              <span
                className={`px-2 py-1 rounded-full text-white text-xs flex items-center gap-1 w-fit ${
                  tx.status === "تایید شده" ? "bg-green-500" : "bg-red-400"
                }`}
              >
                {tx.status === "تایید شده" ? (
                  <CheckCircle size={14} />
                ) : (
                  <XCircle size={14} />
                )}
                {tx.status}
              </span>
            </td>
            <td className="p-2 font-yekan font-semibold">{tx.type}</td>
            <td className="p-2 font-yekan font-semibold text-primary cursor-pointer hover:underline rounded-l-xl">
              مشاهده رسید
            </td>
          </tr>
        ))}
      />
    </div>
  );
}
