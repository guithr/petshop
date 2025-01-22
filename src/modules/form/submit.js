import { scheduleNew } from "../../services/schedule-new.js";
import dayjs from "dayjs";
import { scheduleDay } from "../schedules/load.js";
import { closeModal } from "./close-modal.js";

const form = document.querySelector("form");
const searchDate = document.getElementById("search-date");
const createDate = document.getElementById("create-date");
const nameInput = document.getElementById("tutor-name");
const petNameInput = document.getElementById("pet-name");
const phoneInput = document.getElementById("phone");
const descriptionServiceInput = document.getElementById("service-description");

//Carrega a data Atual automatizada.
const today = dayjs(new Date()).format("YYYY-MM-DD");

//Define a data mínima para ambos inputs
createDate.value = today;
createDate.min = today;

searchDate.value = today;

form.onsubmit = async (event) => {
  event.preventDefault();
  try {
    const userName = nameInput.value.trim(); // Nome do cliente
    const namePet = petNameInput.value.trim(); // Nome do Pet
    const numberPhone = phoneInput.value.trim(); // Supondo que este seja o campo de telefone
    const serviceDescription = descriptionServiceInput.value.trim(); // Descrição do serviço
    const hourSelected = document.querySelector(".hour-selected"); // Seleciona o horário

    // Função para obter apenas os números do telefone
    const phoneNumber = (raw) => {
      return raw.replace(/\D/g, ""); // Remove tudo que não é número
    };

    // Obtemos o número de telefone limpo
    const cleanedNumber = phoneNumber(numberPhone);

    // Validações
    if (!userName) {
      return alert("Informe o nome do cliente.");
    }
    if (!namePet) {
      return alert("Informe o nome do Pet.");
    }
    if (!numberPhone || cleanedNumber.length < 11) {
      return alert("Informe um número de telefone válido com 11 dígitos.");
    }
    if (!serviceDescription) {
      return alert("Informe a descrição do serviço.");
    }
    if (!hourSelected) {
      return alert("Informe um horário disponível.");
    }

    //  Recupera somente o horário selecionado
    const [hour] = hourSelected.innerText.split(":");

    // Inserir a hora na data
    const when = dayjs(createDate.value).add(hour, "hour");

    //Gerar um ID
    const id = new Date().getTime();

    //Realiza o agendamento
    await scheduleNew({
      id,
      userName,
      namePet,
      cleanedNumber,
      serviceDescription,
      when,
    });

    //Aqui vou fazer algo para fechar o modal após o envio do  agendamento

    //Recarregar os agendamentos
    await scheduleDay();

    //Limpar os campos digitado no formulário
    nameInput.value = "";
    petNameInput.value = "";
    phoneInput.value = "";
    descriptionServiceInput.value = "";

    //Fecha o modal
    closeModal();
  } catch (error) {
    console.error(error);
    alert("Não foi possível realizar o agendamento.");
  }
};
