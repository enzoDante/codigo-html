let modal = document.getElementById('alterar')

//se clicar fora do modal, vai fechar a tela dele!
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = 'none'
    }
}