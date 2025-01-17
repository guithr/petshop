export function hoursClick() {
  const hours = document.getElementById("hours");

  hours.addEventListener("change", (event) => {
    // Remove a classe 'hour-selected' de todas as opções
    Array.from(hours.options).forEach((option) => {
      option.classList.remove("hour-selected");
    });

    // Adiciona a classe 'hour-selected' à opção atualmente selecionada, se for disponível
    const selectedOption = event.target.options[event.target.selectedIndex];
    if (selectedOption.classList.contains("hour-available")) {
      selectedOption.classList.add("hour-selected");
    }
  });
}
