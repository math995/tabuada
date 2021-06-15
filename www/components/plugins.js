
// exercicio
// var num = 0;
// var res = "";
// $(document).on('click','.botao', function(){

//   num = $(".v1").val();
//   res = parseFloat(num);
//   for(var count=1; count <= num; count++){
//     res += num+" x "+count+" = "+
//                num*count+"<br />";
//   ;
//   }
//    $(".res").val(num);

// });

function tabuada(){
  var num = parseFloat(document.getElementById("v1").value);
  var resposta = document.getElementById('res');
  var tabuada='';
  for(var count=1; count<=num ; count++)
   tabuada += num+" x "+count+" = "+
               num*count+"<br />";
  resposta.innerHTML = tabuada;
  

}
alert(tabuada());
