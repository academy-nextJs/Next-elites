"use client";
import { useState } from "react";
import HouseCardList from "@/components/common/house/HouseCardList";
import SearchSVG from "@/components/common/svg/search";
import Map from "../contents/Map";
import "../styles/scrollbar.css";
import {
  useAppDispatch,
  useAppSelector,
} from "@/utils/hooks/react-redux/store/hook";
import { setReserveFilters } from "@/utils/hooks/react-redux/store/slices/reserve-slice";
import { useHouses } from "@/utils/hooks/use-houses";
import { FilterModal } from "../modals/BookingFilterModal";
import HouseSkeleton from "@/components/common/house/house-skeleton";
import { Megaphone } from "lucide-react";

export default function ReserveListContainer() {
  const [currentLoc, setCurrentLoc] = useState<[number, number]>([34, 52]);
  const { data: houses, isLoading } = useHouses();
  const filters = useAppSelector((state) => state.reserveFilters);
  const dispatch = useAppDispatch();

  const handleChange = (name: string, value: string) => {
    dispatch(setReserveFilters({ [name]: value }));
  };

  return (
    <div className="lg:h-[calc(100vh-80px)] md:h-auto h-auto w-[calc(100%-7.25%)] flex mx-auto md:mx-auto lg:mx-0 justify-center lg:justify-start md:justify-center lg:flex-nowrap md:flex-wrap flex-wrap">
      {typeof window !== "undefined" && (
        <Map currentLoc={currentLoc} houses={houses} />
      )}
      <div className="flex-grow animate-fade-left">
        <div className="h-[62px] w-full pb-6 lg:pl-7 md:pl-0 pl-0 flex gap-4">
          <div className="relative w-[calc(100%-242px)]">
            <input
              value={filters.search || ""}
              onChange={(e) => handleChange("search", e.target.value)}
              className="h-12 border rounded-2xl border-border px-4 py-3 w-full pr-16"
              dir="rtl"
              placeholder="جستجو کنید ..."
            />
            <span className="absolute right-6 top-3.5">
              <SearchSVG />
            </span>
          </div>
          <div className="flex whitespace-nowrap items-center justify-center gap-1 text-sm font-medium border-border rounded-2xl border px-2 h-12">
            تعداد آگهی: {houses?.length}
            <Megaphone />
          </div>
          <FilterModal />
        </div>
        <div
          dir="rtl"
          className="lg:overflow-y-scroll md:overflow-y-auto overflow-y-auto w-full lg:pl-[22px] md:pl-0 pl-0 custom-scrollbar lg:max-h-[calc(100vh-142px)] md:h-auto h-auto flex flex-wrap gap-[24.95px] lg:justify-between md:justify-center justify-center"
        >
          {isLoading &&
            [...Array(6)].map((_, i) => (
              <HouseSkeleton
                width="lg:w-[calc(50%-24.95px)] md:w-[calc(50%-10px)] w-full"
                minWidth="min-w-[315px]"
                key={i}
              />
            ))}
          {houses?.map((item, index) => {
            return (
              <HouseCardList
                setCurrentLoc={setCurrentLoc}
                showOnMap
                width="lg:w-[calc(50%-12.475px)] md:w-[calc(50%-10px)] w-full"
                minWidth="min-w-[315px]"
                key={index}
                showFacilities={false}
                card={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
