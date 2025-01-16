import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";

const form = document.querySelector("form");

const searchDate = document.getElementById("search-date");
const createDate = document.getElementById("create-date");

//Input hour
const getHour = document.getElementById("hour");

//Carrega a data Atual automatizada.
const today = dayjs(new Date()).format("YYYY-MM-DD");

//Define a data mínima para ambos inputs
createDate.value = today;
createDate.min = today;

searchDate.value = today;

form.onsubmit = (event) => {
  event.preventDefault();
};
