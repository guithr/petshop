import { scheduleDay } from "../schedules/load.js";

const searchDate = document.getElementById("search-date");
const createDate = document.getElementById("create-date");

searchDate.onchange = () => scheduleDay();
createDate.onchange = () => scheduleDay();
