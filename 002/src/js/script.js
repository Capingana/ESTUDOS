const btnEnviar = document.querySelector("#btnEnviar");
const linhas = document.querySelector(".linhas");
const infos = document.querySelector(".infos");

btnEnviar.addEventListener("click", () => {
  infos.classList.toggle("hidden");
  linhas.classList.toggle("hidden");
});
