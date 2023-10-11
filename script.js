let area = document.getElementById('area');

function login(){
    let nome = prompt("Digite seu Nome:");
    let Sobrenome = prompt("Digite seu Sobrenome:");

    if(nome=== ''|| nome === null){
        alert('ERRO!! Digite um valor valido.')
        area.innerHTML = "Clique no botão pra acessar."
    }else{
        area.innerHTML = ("Bem-Vindo" + " " + nome + " " + Sobrenome + " ");
        let botaoSair = document.createElement('button');
        botaoSair.innerHTML = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);
    }   
}
function sair(){
    alert('Até outro dia :');
    area.innerHTML = "Voce Saiu";
}