

function myFunction() {
    var  dataInicio = '01/03/2020';
    var dataFim = '01/02/2020';
    
    var dataInicioFormatada = dataInicio.replace('/', '');
    dataInicioFormatada = dataInicioFormatada.replace('/', '');
    var dataFimFormatada = dataFim.replace('/', '');
    dataFimFormatada = dataFimFormatada.replace('/', '');
    
    if(dataInicioFormatada > dataFimFormatada) {
      console.log("data fim menor que data inicio")
    }
    
    console.log(dataInicioFormatada)
    console.log(dataFimFormatada)
  }


  function pegaData(){

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     var yyyy = today.getFullYear();

     today = dd + '/' + mm + '/' + yyyy;
     console.log("Data de hoje",today)
  }

  pegaData();