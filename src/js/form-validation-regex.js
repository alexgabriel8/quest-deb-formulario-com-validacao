function processarEstadoInput1() {
    const regex = /^((\s*)?[A-zÁ-ú](\s)*)+$/ig
    let inputValue = inputs[0].value

    if (inputValue.match(regex) === null && !(inputWrappers[0].classList.contains('vazio'))) {
        inputWrappers[0].classList.add('preenchido-incorretamente')

    } else if (inputValue.match(regex) !== null) {
        inputWrappers[0].classList.add('preenchido-corretamente')
    }
}

function processarEstadoInput2() {
    const regex = /^([^.]+[^\.\@\-])+\@[^@.]+(\.[^@.][^@.]+)$/i
    let inputValue = inputs[1].value

    if (inputValue.match(regex) === null && !(inputWrappers[1].classList.contains('vazio')) ) {
        inputWrappers[1].classList.add('preenchido-incorretamente')

    } else if (inputValue.match(regex) !== null) {
        inputWrappers[1].classList.add('preenchido-corretamente')
    }
}

function processarEstadoInput3() {
    const regex = /^\s?\(?\d{2}\)?\s?(\d{4,5}\-?\d{4})$/
    let inputValue = inputs[2].value

    if(inputValue.match(regex) === null && !(inputWrappers[2].classList.contains('vazio')) ) {
        inputWrappers[2].classList.add('preenchido-incorretamente')
    } else if (inputValue.match(regex) !== null) {
        inputWrappers[2].classList.add('preenchido-corretamente')
    }
}

function processarEstadoInput4() {
    if(inputs[3].value !== '') {
        inputWrappers[3].classList.remove('vazio')
        inputWrappers[3].classList.add('preenchido-corretamente')
    }
}