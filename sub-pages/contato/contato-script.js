//redirecionamentos
function contato(){
    window.location.href ='/sub-pages/contato/contato.html'
}
function carreira(){
    window.location.href = "/sub-pages/carreira/carreira.html";
}
function maisInformacoes(){
    window.location.href = "/sub-pages/mais info/maisInfo.html";
}
function home(){
    window.location.href = "https://cc.uffs.edu.br/pessoa/gustavo.alberton/";
}
function github(){
    window.open("https://github.com/gustavoSutil","_blank")
}
function discord(){
    window.alert("Para jogarmos, conversarmos... aqui esta meu ID:\n#3699")
}
function linkedin(){
    window.open("https://www.linkedin.com/in/gustavo-sutil-7132a4217/","_blank")
}
function whats(){
    window.open("https://wa.me/5549984170729?text=","_blank")
}

//navbar
var contagem=0;
function nav(numero){
    //ver se par ou nao
    contagem=contagem+numero
    if (contagem%2==0){
        apagar()
    }
    else{
        inserir()
    }
}
function inserir(){
    var opcoes= document.getElementById("menu"); 
    return opcoes.insertAdjacentHTML("beforeend","<span id='span' style='color:white; list-style: none ;background: #000010;height: 400px;transform-style: flat;justify-content: flex-end;' ><article id='opcoes'><li onclick='contato()' >Contato</li><li onclick='carreira()' >Carreira</li><li onclick='maisInformacoes()'>Mais informações</li></article></span>");
}
function apagar(){
    var sair= document.getElementById('span');
     return sair.remove();
}