import { scheduleDay, searchSchedules } from "./schedules/load.js";
import { maskNumber } from "../modules/form/mask-number.js";
import { openModal } from "./form/open-modal.js";
document.addEventListener("DOMContentLoaded", () => {
  searchSchedules();
  scheduleDay();
  maskNumber();
  openModal();
});
