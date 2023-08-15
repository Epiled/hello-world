import horarios from "./periodos.js";
const corpo = document.querySelector('[data-fundo]');

function interpolateColor(color1, color2, ratio) {
  const r = Math.round(color1[0] * (1 - ratio) + color2[0] * ratio);
  const g = Math.round(color1[1] * (1 - ratio) + color2[1] * ratio);
  const b = Math.round(color1[2] * (1 - ratio) + color2[2] * ratio);
  return `rgb(${r},${g},${b})`;
}

function updateBackgroundColor() {
  const periodoAtual = checaHora();
  const dados = getDadosPerido(periodoAtual);

  const [corInicial1, corInicial2] = dados.cores.from; // Cor inicial (preta)
  const [corFinal1, corFinal2] = dados.cores.to; // Cor final (laranja)
  const horaInicio = new Date().setHours(dados.horario[0], 0, 0, 0); // 00:00
  const horaFim = new Date().setHours(dados.horario[1], 36, 0, 0); // 06:00

  const horaAtual = new Date().getTime();
  const elapsedTime = Math.max(0, Math.min(horaAtual - horaInicio, horaFim - horaInicio));
  const totalTime = horaFim - horaInicio;

  const ratio = elapsedTime / totalTime;
  const interpolatedColor = `linear-gradient(${interpolateColor(corInicial1, corFinal1, ratio)}, ${interpolateColor(corInicial2, corFinal2, ratio)})`;

  corpo.style.background = interpolatedColor;

  if (elapsedTime < totalTime) {
    requestAnimationFrame(updateBackgroundColor);
  }
}

function checaHora() {
  const horaAtual = new Date().getHours();

  for (const periodo of horarios) {
    const chave = Object.keys(periodo)[0];
    const [periodoInicio, periodoFim] = periodo[chave].horario;

    if (horaAtual >= periodoInicio && horaAtual <= periodoFim) {
      return chave;
    }
  }
}

function getDadosPerido(periodoAtual) {
  for (const periodo of horarios) {
    if (periodoAtual == Object.keys(periodo)[0]) {
      return periodo[periodoAtual];
    }
  }
}

updateBackgroundColor();
