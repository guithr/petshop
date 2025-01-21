import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";
import { hoursClick } from "./hours-click";

const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }) {
  //Limpar  a lista de hórarios
  hours.innerHTML = `<option value="">Selecione o valor</option>`;

  //Obtém a lista de todos os horarios ocupados
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  const opening = openingHours.map((hour) => {
    //Vai recuperar somente a hora.
    const [scheduleHour] = hour.split(":");

    //Adiciona a hora no date e verifica se esta no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    const available = !unavailableHours.includes(hour) && !isHourPast;

    return {
      hour,
      available,
    };
  });

  //Renderiza os horários
  opening.forEach(({ hour, available }) => {
    const option = document.createElement("option");

    option.classList.add(available ? "hour-available" : "hour-unavailable");

    if (!available) {
      option.disabled = true;
    }

    option.textContent = hour;

    hours.append(option);
  });

  //Adiciona o evento de clique nos horários disponíveis
  hoursClick();
}
