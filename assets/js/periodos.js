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

export default horarios;