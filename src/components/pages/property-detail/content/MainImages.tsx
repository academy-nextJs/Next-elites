import clsx from "clsx";
import RightImg from "./RightImg";

export default async function MainImages({
  photos,
  sticky,
  show3D,
}: {
  photos: string[];
  sticky: boolean;
  show3D: boolean;
}) {
  return (
    <>
      {/* Right section */}
      <div
        className={clsx(
          "flex gap-4 flex-wrap animate-fade-left md:relative relative lg:top-10 md:top-0 top-0 lg:w-[100%] md:w-full w-full h-[calc(100vh-100px)]",
          {
            "lg:sticky": sticky,
          }
        )}
      >
        {show3D && <RightImg photos={photos} />}
        {!show3D && (
          <img
            src={photos[0]}
            className="w-full h-[387px] rounded-t-3xl rounded-b-2xl object-cover"
            alt="Property"
          />
        )}
        {/* + n other pictures section */}
        <div
          dir="rtl"
          className="w-[calc(33.33333333333333%-10.7px)]  text-text border rounded-t-2xl flex justify-center items-center border-border rounded-b-3xl h-[192px]"
        >
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.50004 5.5C7.50004 5.5 12.5 9.18242 12.5 10.5C12.5 11.8177 7.5 15.5 7.5 15.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          12+ عکس دیگر
        </div>
        <img
          src={photos[1]}
          className="w-[calc(33.33333333333333%-10.7px)] rounded-t-2xl rounded-b-3xl h-[192px]"
        />
        <img
          src={photos[2]}
          className="w-[calc(33.3333333333333%-10.7px)] rounded-t-2xl rounded-b-3xl h-[192px]"
        />
      </div>
    </>
  );
}
