th = document.getElementsByTagName('th');

for(let c=0; c < th.length; c++){

    th[c].addEventListener('click',item(c))
}


function item(c){

    return function(){
      console.log(c)
      sortTable(c)
    }
}


function sortTable(c) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("mytable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("td")[c];
      y = rows[i + 1].getElementsByTagName("td")[c];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
function consisteNome() {
    if (document.feedback.nome.value.length < 10) {
        alert("Preencha com o nome completo");
        document.feedback.nome.focus();
    }
  }
  
  function consisteEmail() {
    if (document.feedback.email.value.length < 10) {
        alert("Preencha com o email completo");
        document.feedback.email.focus();
    }
  }
  
  function consisteTelefone() {
    if (document.feedback.telefone.value.length < 11 || 
        document.feedback.telefone.value.length > 14) {
        alert("Preencha com o DDD e telefone completo");
    }
  }
  
  function consisteIdade() {
    if (document.feedback.idade.value > 120) {
        alert("Preencha com uma idade válida (máx. 120 anos)");
        document.feedback.idade.style.backgroundColor="yellow";
        //document.feedback.datanascimento.focus();
    } else {
        document.feedback.idade.style.backgroundColor="white";
    }
  }
  
  function consiste() {
    consisteNome();
    consisteEmail();
    consisteTelefone();
    consisteIdade();
  }

  
  function quantificaErrada() {
    document.feedback.medidor1.value = document.feedback.quantidade.value;
    document.feedback.medidor2.value = document.feedback.quantidade.value / 10;
    document.feedback.barraProgresso.value = document.feedback.quantidade.value * 10;
  }
  
  function preencheBarra() {
    document.getElementById("agradou").value = document.getElementById("quantidade").value * 10;
    document.getElementById("customRange3").value = document.getElementById("quantidade").value * 10;
    document.getElementById("barraProgresso").value = document.getElementById("quantidade").value * 10;
  }

  function medidor() {
    var range = document.querySelector("#agradou");

    var medidor1 = document.getElementById("medidor1");
    medidor1.value = range.value;

    var medidor2 = document.getElementById("medidor2");
    medidor2.value = range.value / 10;

    var bProgresso = document.getElementById("barraProgresso");
    bProgresso.value = range.value * range.max;
}
