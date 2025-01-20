import { scheduleDay } from "./schedules/load.js";
import { maskNumber } from "../modules/form/mask-number.js";
document.addEventListener("DOMContentLoaded", () => {
  scheduleDay();
  maskNumber();
});
