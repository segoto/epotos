import { useGetTimePassed } from "./use_get_time_passed";

const START_DATE = new Date("2022-05-21T00:00:00-05:00");
function TimeTogether() {
  const { years, months, days, hours, minutes, seconds } =
    useGetTimePassed(START_DATE);
  const timePassedInformation = [
    { label: "Años", value: years },
    { label: "Meses", value: months },
    { label: "Días", value: days },
    { label: "Horas", value: hours },
    { label: "Minutos", value: minutes },
    { label: "Segundos", value: seconds },
  ];
  return (
    <div className="min-h-screen grid grid-cols-1 place-content-center">
      <div className="grid-row justify-center">
        <p className="text-3xl font-bold text-center">
          ¿Cuánto tiempo ha pasado desde que somos novios?
        </p>
      </div>
      <div className="grid-row justify-center">
        <p className="text-base text-center">
          Desde el 21 de mayo del 2022 hasta hoy, hemos pasado
        </p>
      </div>
      <div className="grid grid-row place-content-center lg:grid-cols-6 grid-cols-2 py-10 lg:px-20 px-5">
        {timePassedInformation.map(({ label, value }) => (
          <div
            key={label}
            className="grid place-items-center border-black border-1 rounded-xl aspect-square w-30 mx-auto my-3"
          >
            <div className="text-6xl font-bold">{value}</div>
            <div className="text-base">{label}</div>
          </div>
        ))}
        {/* <div className="grid grid-row place-items-center border-black border-1 rounded-xl aspect-square w-30">
          // <div className="text-6xl font-bold">1</div>
          // <div className="text-base">Año</div>
          //{" "}
        </div> */}
      </div>
    </div>
  );
}
export default TimeTogether;
