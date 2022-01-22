interface Observer {
  update: (data: any) => void
}

interface Subject {
  subscribe: (Observer: Observer) => void
  unSubscribe: (Observer: Observer) => void
}

// clase del subscriptor
class BitcoinPrice implements Subject {
  constructor() {
    const el: HTMLInputElement = document.querySelector("#value")
    el.addEventListener('input', () => {
      this.notify(el.value)
    })
  }
  observers: Observer[] = []

  subscribe(Observer: Observer) {
    this.observers.push(Observer)
  }
  unSubscribe(Observer: Observer) {
    const index = this.observers.findIndex(obs => obs === Observer)
    this.observers.splice(index, 1)
  }

  notify(data: any) {
    this.observers.forEach(observer => observer.update(data))
  }
}

// clase del observador
class PriceDisplay implements Observer {
  private el: HTMLElement
  constructor() {
    this.el = document.querySelector("#price")
  }

  update(data: any) {
    this.el.innerText = data
  }
}

// crea las instancias de las clases para el uso
const value = new BitcoinPrice()
const display = new PriceDisplay()

// suscribiendo al observer
value.subscribe(display)

// desuscribir observador
setTimeout(() => {
  value.unSubscribe(display)
}, 5000);