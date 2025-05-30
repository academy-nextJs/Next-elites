import { Table } from "reactstrap";
import Button from "../common/button";
import AddSVG from "./svg/AddSVG";

const TableDashboard = ({
  tableContent,
  tableHeader,
  notificationLineOne,
  notificationLineTwo,
  isNotification,
  headerSecondary,
  add,
  addTitle,
}) => {
  return (
    <>
      <Table
        dir="rtl"
        responsive
        className="w-full text-sm border-separate border-spacing-y-4"
      >
        <thead>
          <tr
            className={` ${headerSecondary ? "bg-table-header" : "bg-table-main"} p-2 font-yekan text-text`}
          >
            {tableHeader.map((item, index) => {
              return (
                <th
                  key={index}
                  className={`p-2 text-lg  font-medium ${item.clx}`}
                >
                  {item.text}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {isNotification && notificationLineOne}
          {tableContent}
          {isNotification && notificationLineTwo}
        </tbody>
      </Table>
      <div
        className={`flex ${add ? "justify-between w-full" : "justify-start"} mt-[71px] items-center`}
      >
        <div className="flex justify-start gap-2">
          {[1, 2, 3, 4, 5].map((p) => (
            <button
              key={p}
              className={`w-8 h-8 rounded-full border text-sm ${p === 1 ? "bg-primary text-white" : "bg-background"}`}
            >
              {p}
            </button>
          ))}
        </div>
        {add && <Button className="gap-1.5"><AddSVG /> افزودن {addTitle}</Button>}
      </div>
    </>
  );
};
export default TableDashboard;
