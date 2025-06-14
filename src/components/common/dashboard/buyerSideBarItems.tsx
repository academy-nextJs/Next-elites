"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import PaymentSVG from "../../dashboard/svg/PaymentSVG";
import ArrowSVG from "@/components/common/svg/arrow";

type Item = {
  name: string;
  icon: ReactNode;
  href: string;
  management?: boolean;
};

function BuyerSideBarItems({
  items,
  collapsed,
}: {
  items: Item[];
  collapsed: boolean;
}) {
  const pathname = usePathname();
  const t = useTranslations('Sidebar');

  const normalItems = items.filter((item) => !item.management);
  const managementItems = items.filter((item) => item.management);

  const isActive = (href: string) =>
    pathname === href || pathname.endsWith(href.split("/").pop() || "");

  const [open, setOpen] = useState(false);

  return (
    <div className={`flex flex-col gap-4`}>
      {normalItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={`text-text cursor-pointer flex gap-2 items-center lg:justify-start md:justify-center justify-center p-2 ${!collapsed ? "" : "justify-center"} rounded-md ${
            isActive(item.href)
              ? "bg-border font-semibold"
              : "hover:bg-border/40"
          }`}
        >
          <div className="flex items-center justify-center w-6 h-6">
            {item.icon}
          </div>
          {!collapsed && <h1 className="text-lg lg:block md:hidden hidden">{item.name}</h1>}
        </Link>
      ))}

      {managementItems.length > 0 && (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              className={`${!collapsed ? "" : "justify-center"} lg:justify-start md:justify-center justify-center text-text cursor-pointer w-full flex gap-2 items-center p-2 rounded-md hover:bg-border/40`}
            >
              <div className="flex items-center justify-center w-6 h-6">
                <PaymentSVG />
              </div>
              {!collapsed && (
                <div className="items-center gap-1 lg:flex md:hidden hidden">
                  <h1 className="text-lg">{t('management')}</h1>
                  <ArrowSVG
                    className={`${open ? "rotate-90" : "rotate-0"} transition-all duration-300`}
                  />
                </div>
              )}
            </button>
          </PopoverTrigger>

          <PopoverContent
            dir="rtl"
            side="bottom"
            sideOffset={-60}
            align="center"
            className="w-64 p-2 bg-background border border-border shadow-xl rounded-xl space-y-1 !absolute !top-0 !right-0"
          >
            {managementItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-2 p-2 rounded-md hover:bg-border/20 ${
                  isActive(item.href) ? "bg-border font-semibold" : ""
                }`}
              >
                <div className="flex items-center justify-center w-6 h-6">
                  {item.icon}
                </div>
                <h1 className="text-lg">{item.name}</h1>
              </Link>
            ))}
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}

export default BuyerSideBarItems;