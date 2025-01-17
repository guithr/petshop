import dayjs from "dayjs";

const form = document.querySelector("form");
const searchDate = document.getElementById("search-date");
const createDate = document.getElementById("create-date");
const inputName = document.getElementById("tutor-name");

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

  try {
    //Recupara o valor do campo nome digitado pelo cliente.
    const userName = inputName.value.trim();

    //Segunda validação.
    if (!userName) {
      alert("Informe o nome do cliente.");
    }
    console.log(userName);

    //Pegar horário selecionado pelo cliente.
    const hourSelected = document.querySelector(".hour-selected");
  } catch (error) {
    console.log(error);
    alert("Não foi possível realizar o agendamento.");
  }
};
