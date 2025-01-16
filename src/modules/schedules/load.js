import { hoursLoad } from "../form/hours-load.js";

//Seleciona o input de data
const selectDate = document.getElementById("create-date");

export function scheduleDay() {
  //Obtém a data do input

  const date = selectDate.value;
  hoursLoad({ date });
}
