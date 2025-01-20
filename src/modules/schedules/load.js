import { hoursLoad } from "../form/hours-load.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";

//Seleciona o input de data
const selectDate = document.getElementById("create-date");

export async function scheduleDay() {
  //Obtém a data do input
  const date = selectDate.value;

  //Busca na  API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });
  console.log(dailySchedules);

  //Renderiza as horas disponíveis
  hoursLoad({ date });
}
