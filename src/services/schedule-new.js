import { apiConfig } from "./api-config.js";

export async function scheduleNew({
  id,
  userName,
  namePet,
  cleanedNumber,
  serviceDescription,
  when,
  hour,
}) {
  try {
    //Fazendo a requisição para enviar os dados do agendamento
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      header: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({
        id,
        userName,
        namePet,
        cleanedNumber,
        serviceDescription,
        when,
        hour,
      }),
    });
    //Exibe mensagem de agendamento realizado.
    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar. Tente novamente mais tarde!");
  }
}
