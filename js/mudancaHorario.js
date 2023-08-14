const corpo = document.querySelector('[data-fundo]');
// Cores são definidas no padrão RGB
/*
 R  G  B
[0, 0, 0]
*/
const horarios = [
  {
    madrugada: {
      horario: [0, 6],
      cores: {
        from: [[77, 0, 159], [206, 63, 255]],
        to: [[106, 223, 255], [255, 255, 255]],
      },
    },
  },
  {
    manha: {
      horario: [6, 12],
      cores: {
        from: [[106, 223, 255], [255, 255, 255]],
        to: [[244, 190, 67], [255, 100, 0]],
      },
    },
  },
  {
    tarde: {
      horario: [12, 18],
      cores: {
        from: [[244, 190, 67], [255, 100, 0]],
        to: [[15, 0, 85], [21, 212, 255]],
      },
    },
  },
  {
    noite: {
      horario: [18, 24],
      cores: {
        from: [[15, 0, 85], [21, 212, 255]],
        to: [[77, 0, 159], [206, 63, 255]],
      },
    },
  },
]
let teste = undefined;


function interpolateColor(color1, color2, ratio) {
  const r = Math.round(color1[0] * (1 - ratio) + color2[0] * ratio);
  const g = Math.round(color1[1] * (1 - ratio) + color2[1] * ratio);
  const b = Math.round(color1[2] * (1 - ratio) + color2[2] * ratio);
  return `rgb(${r},${g},${b})`;
}

function updateBackgroundColor() {
  const periodoAtual = checaHora();
  const dados = getDadosPerido(periodoAtual);

  console.group;
  console.log(periodoAtual);
  console.log(dados);
  console.groupEnd;

  const [startColor1, startColor2] = dados.cores.from; // Cor inicial (preta)
  const [endColor1, endColor2] = dados.cores.to; // Cor final (laranja)
  const startTime = new Date().setHours(14, 24, 0, 0); // 00:00
  const endTime = new Date().setHours(14, 30, 0, 0); // 06:00

  const currentTime = new Date().getTime();
  const elapsedTime = Math.max(0, Math.min(currentTime - startTime, endTime - startTime));
  const totalTime = endTime - startTime;

  const ratio = elapsedTime / totalTime;
  const interpolatedColor = `linear-gradient(${interpolateColor(startColor1, startColor2, ratio)}, ${interpolateColor(endColor1, endColor2, ratio)})`;

  document.body.style.background = interpolatedColor;

  if (elapsedTime < totalTime) {
    requestAnimationFrame(updateBackgroundColor);
  }
}

updateBackgroundColor();


function checaHora() {
  // const horaAtual = new Date().getHours();

  const horaAtual = setHora();
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


function setHora() {
  let tempo;
  if(teste == undefined) {
    tempo = new Date().getHours();
  } else {
    tempo = new Date();
    tempo.setHours(teste);
    tempo = tempo.getHours();
  }
 
  console.log(tempo);
  const horaAtual = new Date().getHours();
  return tempo
}
function setTest(hora) {
  teste = hora;
  setHora();
  updateBackgroundColor();
  console.log(teste);
}