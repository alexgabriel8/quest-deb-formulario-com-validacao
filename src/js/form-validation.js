const inputWrappers = document.querySelectorAll('.input-wrapper')
const inputs = document.querySelectorAll('.input')
const btnSubmit = document.querySelector('.btn-enviar')

function ativaOuDesativaSubmit() {
    for (let i = 0; i < inputWrappers.length; i++) {
        if (!inputWrappers[i].classList.contains('preenchido-corretamente')) {
            btnSubmit.setAttribute('disabled', "")
            btnSubmit.classList.add('desativado')
            return
        } else {
            btnSubmit.removeAttribute('disabled')
            btnSubmit.classList.remove('desativado')
        }
    }
}

inputs.forEach((input, index) => {
    let indexDoInputModificado = index
    input.addEventListener('blur', () => checarEstadoInput(indexDoInputModificado))
})

function checarEstadoInput(indexDoInputModificado) {
    if (inputs[indexDoInputModificado].value === '') {
        inputWrappers[indexDoInputModificado].classList.add('vazio')
        inputWrappers[indexDoInputModificado].classList.remove('preenchido-corretamente','preenchido-incorretamente')
    } else {
        inputWrappers[indexDoInputModificado].classList.remove('vazio')
        inputWrappers[indexDoInputModificado].classList.remove('preenchido-incorretamente')
    }

    switch (indexDoInputModificado) {
        case 0:
            processarEstadoInput1()
            break
        case 1:
            processarEstadoInput2()
            break
        case 2:
            processarEstadoInput3()
            break
        case 3:
            processarEstadoInput4()
            break
    }

    ativaOuDesativaSubmit()
}