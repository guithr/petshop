export function maskNumber() {
  const phoneMask = (value) => {
    value = value.replace(/\D/g, ""); // Remove tudo que não é número
    value = value.replace(/(\d{2})(\d)/, "($1) $2"); // Adiciona parênteses
    value = value.replace(/(\d)(\d{4})$/, "$1-$2"); // Adiciona hífen
    return value;
  };

  const handlePhone = (event) => {
    const input = event.target;
    input.value = phoneMask(input.value);
  };

  // Selecionar o input pelo ID ou outro seletor
  const input = document.querySelector("#phone");
  if (input) {
    input.addEventListener("input", handlePhone); // Adicionar evento
  } else {
    console.error("O input com o ID #phone não foi encontrado.");
  }
}
