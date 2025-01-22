import dayjs from "dayjs";

//Selecionar as seções manhã, tarde e noite.

const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const perioNight = document.getElementById("period-night");

export function scheduleShow({ dailySchedules }) {
  try {
    //Primeiro vamos limpar as listas
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    perioNight.innerHTML = "";

    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const details = document.createElement("p");
      const petName = document.createElement("span");
      const ownerName = document.createElement("span");
      const description = document.createElement("span");
      const removeBtn = document.createElement("button");

      //Adicionando as classes
      item.classList.add("appointment");
      time.classList.add("appointment-time");
      details.classList.add("appointment-details");
      petName.classList.add("pet-name");
      ownerName.classList.add("owner-name");
      description.classList.add("service-name");
      removeBtn.classList.add("remove-button");

      //Adiciona o id do agendamento.
      item.setAttribute("data-id", schedule.id);

      //Buscando os valores dinamicamente
      time.textContent = dayjs(schedule.when).format("HH-mm");
      petName.textContent = schedule.namePet;
      ownerName.textContent = schedule.userName;
      description.textContent = schedule.serviceDescription;
      removeBtn.textContent = "Remover Agendamento";

      details.append(petName, ownerName);
      item.append(time, details, description, removeBtn);

      //Obtém somente a hora.
      const hour = dayjs(schedule.when).hour();

      //Renderizar os agendamentos baseado nos horarios (Manhã, tarde e noite)
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        perioNight.appendChild(item);
      }
    });
  } catch (error) {
    console.log(error);
    alert("Não foi possível exibir os agendamentos!");
  }
}
