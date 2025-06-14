"use client";
import Line from "@/components/common/dashboard/line";
import TableDashboard from "@/components/common/dashboard/Table";
import {
  DashboardBuyerPaymentsStatus,
  DashboardBuyerPaymentsType,
} from "@/utils/constant/folder";
import { formatNumber } from "@/utils/helper/format-number";
import { CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import InputSelect from "@/components/common/inputs/select-input";
import Title from "@/components/common/dashboard/Title";

const tableHeaderItems = [
  { text: "date", clx: "rounded-r-xl" },
  { text: "trackingCode", clx: null },
  { text: "amount", clx: null },
  { text: "paymentStatus", clx: null },
  { text: "transactionType", clx: null },
  { text: "empty", clx: "rounded-l-xl" },
];

export default function BuyerPayments() {
  const t = useTranslations("TransactionList");
  const [typeFilter, setTypeFilter] = useState(t("filters.all"));
  const [statusFilter, setStatusFilter] = useState(t("filters.all"));

  // Mock data with translations
  const transactions = [
    {
      id: 1,
      date: t("mockData.date"),
      time: "13:33",
      trackingCode: "137245678913476456",
      amount: "1250000",
      status: t("status.approved"),
      type: t("types.walletCharge"),
    },
    {
      id: 2,
      date: t("mockData.date"),
      time: "13:33",
      trackingCode: "137245678913476456",
      amount: "1250000",
      status: t("status.approved"),
      type: t("types.walletCharge"),
    },
    {
      id: 3,
      date: t("mockData.date"),
      time: "13:33",
      trackingCode: "137245678913476456",
      amount: "1250000",
      status: t("status.rejected"),
      type: t("types.reservation"),
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between flex-row-reverse flex-wrap gap-4">
        <Title text={t("title")} />
        <div className="flex gap-[19px] flex-wrap justify-end">
          <InputSelect
            withLabel
            label={t("filters.transactionType")}
            value={typeFilter}
            items={DashboardBuyerPaymentsType}
            onChange={(val) => setTypeFilter(val)}
          />
          <InputSelect
            withLabel
            label={t("filters.paymentStatus")}
            value={statusFilter}
            items={DashboardBuyerPaymentsStatus}
            onChange={(val) => setStatusFilter(val)}
          />
        </div>
      </div>

      <Line />
      <div className="hidden md:block">
        <TableDashboard
          tableHeader={tableHeaderItems.map((item) => ({
            ...item,
            text: t(`tableHeaders.${item.text}`),
          }))}
          tableContent={transactions.map((tx) => (
            <tr
              key={tx.id}
              className="bg-background hover:bg-background/30 rounded-xl overflow-hidden"
            >
              <td className="p-2 text-[18px] font-medium rounded-r-xl">
                {tx.date} - {tx.time}
              </td>
              <td className="p-2 text-[18px] font-medium">{tx.trackingCode}</td>
              <td className="p-2 text-[18px] font-medium">
                {formatNumber(Number(tx.amount))} {t("currency")}
              </td>
              <td className="p-2 text-[13px] font-medium">
                <span
                  className={`px-2 py-1 rounded-full text-white text-xs flex items-center gap-1 w-fit ${
                    tx.status === t("status.approved")
                      ? "bg-green-500"
                      : "bg-red-400"
                  }`}
                >
                  {tx.status === t("status.approved") ? (
                    <CheckCircle size={14} />
                  ) : (
                    <XCircle size={14} />
                  )}
                  {tx.status}
                </span>
              </td>
              <td className="p-2 text-[18px] font-medium">{tx.type}</td>
              <td className="p-2 text-[13px] font-medium text-primary cursor-pointer hover:underline rounded-l-xl">
                {t("viewReceipt")}
              </td>
            </tr>
          ))}
        />
      </div>

      {/* Card view for mobile screens */}
      <div className="md:hidden grid grid-cols-1 gap-4 mt-4">
        {transactions.map((item) => (
          <div
            key={item.id}
            className="bg-surface rounded-2xl border border-border p-4"
          >
            <div className="flex items-start justify-end">
              <h2 className="text-lg font-bold text-right">{item.date}</h2>
            </div>

            <div className="mt-3 space-y-2 text-right">
              <div className="flex justify-end items-center gap-2">
                <span className="font-medium">{item.status}</span>
                <span>:{t("statusLabel")}</span>
              </div>

              <div className="flex justify-end items-center gap-2">
                <span className="font-medium">{item.amount}</span>
                <span>:{t("priceLabel")}</span>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-text-secondary">
                  :{t("trackingCodeLabel")}
                </span>
                <p className="text-right">{item.trackingCode}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
