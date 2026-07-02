//let numero = prompt("Digite um numero: ") 
//let random = Math.floor(Math.random(0) * 10)
//if(numero == random) {
   // alert("você acertou!!")
    //}else{
      //  alert("você errou!")
    //}

    let data = new Date ();
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()

    let horaAtual = hora + ":" + minuto + ":" + segundo //ex: 14:35:55
    alert(horaAtual)