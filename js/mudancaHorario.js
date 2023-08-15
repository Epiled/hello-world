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

  const [startColor1, startColor2] = dados.cores.from; // Cor inicial (preta)
  const [endColor1, endColor2] = dados.cores.to; // Cor final (laranja)
  const startTime = new Date().setHours(dados.horario[0], 0, 0, 0); // 00:00
  const endTime = new Date().setHours(dados.horario[1], 36, 0, 0); // 06:00

  const currentTime = new Date().getTime();
  const elapsedTime = Math.max(0, Math.min(currentTime - startTime, endTime - startTime));
  const totalTime = endTime - startTime;

  const ratio = elapsedTime / totalTime;
  const interpolatedColor = `linear-gradient(${interpolateColor(startColor1, endColor1, ratio)}, ${interpolateColor(startColor2, endColor2, ratio)})`;

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
