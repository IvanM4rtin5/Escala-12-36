

function gerarEscala() {
    var dataInicio = new Date(document.getElementById("dataInicio").value) 
    if (isNaN(dataInicio.getTime())) {
      alert("Por favor, insira uma data válida!")
      return 
    }

    var milisegundosDia = 24 * 60 * 60 * 1000 // quantidade de milisegundos em um dia
    var hoje = new Date()
    var funcionarios = ["Person1", "Person2", "Person3"]
    var diasPlantao = 1
    var diasFolga = 2
    var diasTotal = 30

    var escalaHTML = "<ul>"

    var h3 = document.querySelector("h3")
    h3.textContent = "Escala de Plantão para o mês" 
    h3.style.fontSize = "30px" 

   
    for (var i = 0; i < diasTotal; i++) {
      var funcionarioAtual = i % funcionarios.length

      escalaHTML +=
        "<li style='color:white;'>" +
        funcionarios[funcionarioAtual] +
        "</li>"

      var inicioPlantao = new Date(
        dataInicio.getTime() + i * milisegundosDia
      )
      var fimPlantao = new Date(
        inicioPlantao.getTime() + diasPlantao * milisegundosDia
      )
      var fimFolga = new Date(
        fimPlantao.getTime() + diasFolga * milisegundosDia
      )

      escalaHTML += "<li>Dia " + (i + 1) + ":<br>"
      escalaHTML +=
        funcionarios[funcionarioAtual] +
        ": Plantão de " +
        inicioPlantao.toLocaleDateString("pt-BR") +
        " a " +
        fimPlantao.toLocaleDateString("pt-BR") +
        "<br>"
    }

    escalaHTML += "</ul>"
    document.getElementById("escala").innerHTML = escalaHTML
  }