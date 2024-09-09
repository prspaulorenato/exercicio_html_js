const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')
const formulario = document.getElementById('formulario')



function validaForm(){
    if(campoB.value > campoA.value){
        return true
    }else{
        return false
    }
}

const container = document.getElementById('container')
const novoParagrafo = document.createElement('p')
novoParagrafo.innerHTML = ''

formulario.addEventListener('submit',function(e){
    e.preventDefault()
    
    if(validaForm()){
        novoParagrafo.textContent = 'Validado com sucesso'
        container.appendChild(novoParagrafo)
    }else{
        novoParagrafo.textContent = 'Erro.O Campo B não é maior que Campo A '
        container.appendChild(novoParagrafo)
    }
    

})


