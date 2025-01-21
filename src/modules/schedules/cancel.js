import { scheduleCancel } from "../../services/schedule.cancel.js";
import { scheduleDay, searchSchedules } from "./load.js";
const periods = document.querySelectorAll(".period");

//Gera o evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  // Captura o evento de clique na lista
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("remove-button")) {
      //Obtém  a li pai do elemento clicado.
      const item = event.target.closest("li");
      //Aqui pegamos o ID do agendamento para remover
      const { id } = item.dataset;

      //Confirma que o ID foi selecionado.
      if (id) {
        //Connfiram se o usuário quer remover o agendamento.
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );
        if (isConfirm) {
          // Faz a requisição na API para cancelar
          await scheduleCancel({ id });
          // Recarregamos os agendamentos
          scheduleDay();
          searchSchedules();
        }
      }
    }
  });
});
