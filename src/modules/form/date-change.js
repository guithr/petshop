import { scheduleDay, searchSchedules } from "../schedules/load.js";

// Página inicial - busca os agendamentos
const searchDate = document.getElementById("search-date");
if (searchDate) {
  searchDate.addEventListener("change", () => searchSchedules());
}

// Modal - formulário, busca os agendamentos
const createDate = document.getElementById("create-date");
if (createDate) {
  createDate.addEventListener("change", () => scheduleDay());
}
