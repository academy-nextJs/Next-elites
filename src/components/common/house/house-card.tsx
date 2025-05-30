"use client";
// Next
import Image from "next/image";

// Types
import type { HouseItemsInterface } from "@/types/house";

// Shadcn components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Change lang
import { useTranslations } from "use-intl";

/**
 * Reusable house card component with optional facilities props.
 *
 * @component
 * @returns {JSX.Element} - Rendered house card
 */

// Feature item component
const FeatureItem = ({
  icon,
  value,
  label,
}: {
  icon: string;
  value: number;
  label: string;
}) => (
  <div className="flex items-center gap-1 text-sm text-gray-600">
    <span>{icon}</span>
    <span className="">
      {value} {label}
    </span>
  </div>
);

// House card component
export default function HouseCard({ item }: { item: HouseItemsInterface }) {
  const t = useTranslations("HomePage");
  return (
    <div className="border border-border p-4 rounded-lg hover:bg-gray-50 transition-colors">
      {item.photos && item.photos.length > 0 && (
        <div className="mb-4">
          <Carousel className="rounded-lg overflow-hidden h-[200px]">
            <CarouselContent>
              {item.photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <div className="h-[200px] relative">
                    <Image
                      unoptimized
                      src={photo}
                      alt={`${item.title} - تصویر ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      )}

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold mb-2 ">{item.title}</h3>
          {item.address && (
            <p className="text-text-secondary text-sm mb-2 ">{item.address}</p>
          )}
        </div>
        {item.rate && (
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md">
            <span className="text-yellow-500">★</span>
            <span className="">{item.rate}</span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 my-2">
        {item.tags &&
          item.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full "
            >
              {tag}
            </span>
          ))}
      </div>

      <div className="grid grid-cols-3 gap-2 my-3">
        {item.rooms && (
          <FeatureItem icon="🛏️" value={item.rooms} label={t("rooms")} />
        )}
        {item.bathrooms && (
          <FeatureItem
            icon="🚿"
            value={item.bathrooms}
            label={t("bathrooms")}
          />
        )}
        {item.capacity && (
          <FeatureItem icon="👤" value={item.capacity} label={t("capacity")} />
        )}
      </div>

      <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
        {item.price && (
          <span className="font-medium  text-[#586CFF]">
            {parseInt(item.price).toLocaleString()} تومان
            {item.transaction_type === "rental" && (
              <span className="text-xs text-gray-500 mr-1">
                {t("perNight")}
              </span>
            )}
          </span>
        )}
        <button className="bg-[#586CFF] text-white px-4 py-2 rounded-lg text-sm  hover:bg-[#4A5FE3] transition-colors">
          {t("viewDetails")}
        </button>
      </div>
    </div>
  );
}
