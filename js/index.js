


function calcular(salarioMensal, horasPorMes) {
    salarioMensal = document.getElementById("valor-ganha-por-mes").value
    horasPorMes = document.getElementById("horas-por-mes").value 
    if (salarioMensal >= 1 & horasPorMes >=1 ) {
      valorPorMes = parseInt(salarioMensal) / parseInt(horasPorMes)
      document.getElementById("resultado").value = (parseInt(valorPorMes) + " R$ ")
    }else{
      document.getElementById("resultado").value = ""
    }
      salarioMensal = document.getElementById("valor-ganha-por-mes").value = ""
      horasPorMes = document.getElementById("horas-por-mes").value = ""
    }

