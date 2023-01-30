const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');
const btn = document.getElementById('btn');
const tela = document.getElementById('tela');

for (var i = 0; i <= 24; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    hora.appendChild(option);
}
for (var i = 0; i <= 60; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    minuto.appendChild(option);
}
for (var i = 0; i <= 60; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    segundo.appendChild(option);
}


btn.addEventListener('click',()=>{
    let h = parseInt(hora.value);
    let m = parseInt(minuto.value);
    let s = parseInt(segundo.value); 

    setInterval(()=>{
    

    

    if(s==0&&m>0){m--;s=60}
    if(m==0&&h>0){h--;m=60}
    
    tela.textContent = h+':'+m+':'+s


    s--
    if(s==0&&m==0){s=0}
    
    

   },1000);

   

})