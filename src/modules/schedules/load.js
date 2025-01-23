import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { scheduleShow } from "../schedules/show.js";
import { hoursLoad } from "../form/hours-load.js";

//Seleciona o input de data
const createDate = document.getElementById("create-date");
const searchDate = document.getElementById("search-date");

export async function scheduleDay() {
  //Obtém a data do input
  const date = createDate.value;

  //Busca na  API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });

  //Renderiza as horas disponíveis
  hoursLoad({ date, dailySchedules });
}

// Outra função para buscar agendamentos pela página inicial
export async function searchSchedules() {
  const date = searchDate.value;

  // Realize a lógica de busca de agendamentos aqui
  const dailySchedules = await scheduleFetchByDay({ date });

  //Exibe os agendamentos
  scheduleShow({ dailySchedules });

  //Renderiza as horas disponíveis
  hoursLoad({ date, dailySchedules });
}
