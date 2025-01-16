import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";

const hours = document.getElementById("hours");

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    //Vai recuperar somente a hora.
    const [scheduleHour] = hour.split(":");

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    return {
      hour,
      available: isHourPast,
    };
  });

  opening.forEach(({ hour, available }) => {
    const option = document.createElement("option");

    option.classList.add(available ? "hour-available" : "hour-unavailable");

    if (!available) {
      option.disabled = true;
    }

    option.textContent = hour;

    hours.append(option);
  });
}
