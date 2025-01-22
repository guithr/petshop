const btnSchedule = document.querySelector(".new-schedule");
const modal = document.querySelector(".schedule-modal");

export function openModal() {
  btnSchedule.addEventListener("click", () => {
    modal.style.display = "flex";
  });
}
