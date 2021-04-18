class Calculator {
    constructor(textoOperacionAnterior, textoOperacionActual) {
        this.textoOperacionAnterior = textoOperacionAnterior
        this.textoOperacionActual = textoOperacionActual
        this.clear()
    }
  
    clear() {
        this.operacionActual = ''
        this.operacionAnterior = ''
        this.operador = undefined
    }
  
    borrar() {
        this.operacionActual = this.operacionActual.toString().slice(0, -1)
    }
  
    agregarNumero(number) {
        if (number === '.' && this.operacionActual.includes('.')) return
        this.operacionActual = this.operacionActual.toString() + number.toString()
    }
  
    operadorActual(operador) {
        if (this.operacionActual === '') return
        if (this.operacionAnterior !== '') {
            this.compute()
        }
        this.operador = operador
        this.operacionAnterior = this.operacionActual
        this.operacionActual = ''
    }
  
    compute() {
        let computo
        const anterior = parseFloat(this.operacionAnterior)
        const actual = parseFloat(this.operacionActual)
        if (isNaN(anterior) || isNaN(actual)) return
        switch (this.operador) {
            case '+':
                computo = anterior + actual
                break
            case '-':
                computo = anterior - actual
                break
            case 'x':
                computo = anterior * actual
                break
            case '÷':
                computo = anterior / actual
                break
            default:
                return
        }
        this.operacionActual = computo
        this.operador = undefined
        this.operacionAnterior = ''
    }
  
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    calculoNegativo(){
        let computo
        const actual = parseFloat(this.operacionActual)
        computo = actual * (-1)
        this.operacionActual = computo
    }
  
    updateDisplay() {
        this.textoOperacionActual.innerText =
        this.getDisplayNumber(this.operacionActual)
        if (this.operador != null) {
            this.textoOperacionAnterior.innerText =
            `${this.getDisplayNumber(this.operacionAnterior)} ${this.operador}`
        } else {
            this.textoOperacionAnterior.innerText = ''
        }
    }
}


const botonesNumericos = document.querySelectorAll('[data-numero]')
const botonesOperaciones = document.querySelectorAll('[data-operacion]')
const botonResultado = document.querySelector('[data-resultado]')
const botonBorrar = document.querySelector('[data-borrar]')
const botonClear = document.querySelector('[data-clear]')
const textoOperacionAnterior = document.querySelector('[data-anterior]')
const textoOperacionActual = document.querySelector('[data-actual]')
const botonNegativo = document.querySelector('[data-negativo]')
  
const calculator = new Calculator(textoOperacionAnterior, textoOperacionActual)
  
botonesNumericos.forEach(button => {
    button.addEventListener('click', () => {
        calculator.agregarNumero(button.innerText)
        calculator.updateDisplay()
    })
})
  
botonNegativo.addEventListener('click', () => {
    calculator.calculoNegativo()
    calculator.updateDisplay()
})

botonesOperaciones.forEach(button => {
    button.addEventListener('click', () => {
        calculator.operadorActual(button.innerText)
        calculator.updateDisplay()
    })
})
  
botonResultado.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})
  
botonClear.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})
  
botonBorrar.addEventListener('click', button => {
    calculator.borrar()
    calculator.updateDisplay()
})