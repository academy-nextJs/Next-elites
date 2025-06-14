"use client";

import MapComponent from "@/components/common/map/map";
import { useAppDispatch } from "@/utils/hooks/react-redux/store/hook";
import { setTourObject } from "@/utils/hooks/react-redux/store/slices/create-tour";
import L from "leaflet";
import Image from "next/image";
import { useState } from "react";
import { Marker } from "react-leaflet";
import markerIcon from "@/assets/icons/location.png";
import marker from "@/assets/images/3d-map.png";

export default function AddTourStepTwo() {
  const [clickedCoords, setClickedCoords] = useState<[number, number] | null>(
    null
  );

  const DefaultIcon = L.icon({
    iconUrl: markerIcon.src,
    iconSize: [41, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const dispatch = useAppDispatch();

  // Change filters params logic
  const handleChange = (name: string, value: any) => {
    dispatch(setTourObject({ [name]: value }));
  };

  const handleMapClick = (latlng) => {
    setClickedCoords([latlng.lat, latlng.lng]);
    handleChange("lat", latlng.lat);
    handleChange("lng", latlng.lng);
  };
  return (
    <div className="flex justify-between w-full mt-[61px] mb-[51px] h-[366px]">
      <div className="w-[62.8%]">
        <MapComponent
          clickedCoords={clickedCoords}
          className="rounded-[14px]"
          initialLocation={[35.700731157187114, 51.337112334975004]}
          initialZoom={11}
          onMapClick={handleMapClick}
        >
          {clickedCoords && (
            <Marker icon={DefaultIcon} position={clickedCoords} />
          )}
        </MapComponent>
      </div>
      <div className="w-[34.4%] flex flex-col items-center justify-between">
        <h1
          dir="rtl"
          className="leading-10 text-text text-[20px] font-semibold"
        >
          با انتخاب موقعیت مکانی تور خود از روی نقشه به راحتی
          <div className="flex gap-1">
            <p className="text-primary text-nowrap"> موقعیت تور </p>
            <p className="text-nowrap"> راتعیین کنید . </p>
          </div>
        </h1>
        <Image
          unoptimized
          src={marker}
          width={500}
          height={500}
          alt="marker"
          className="w-[200px] h-[200px]"
        />
      </div>
    </div>
  );
}
