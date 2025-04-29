import alertContext from "../Context/Alert/alertContext.jsx";
import { useContext } from "react";

function Alert() {
  const context = useContext(alertContext);
  const { alertData } = context;

  const colorClasses = {
    red: "bg-red-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
  };

  return (
    <div
      className={`font-regular relative mb-4 block w-full rounded-lg ${
        colorClasses[alertData.color]
      } p-4 text-base leading-5 text-white opacity-100`}
    >
      {alertData.msg}
    </div>
  );
}

export default Alert;
