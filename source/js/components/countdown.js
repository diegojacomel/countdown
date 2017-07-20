// Count Down of specific day
const form = document.querySelector('.js-form')
const elements = form.elements
const target = document.querySelector('.countdown')
const mseconds = 1000
let myInterval
let html

function render () {
  const input = formatDate(elements.date.value)
  const targetDate = new Date(input).getTime()

  myInterval = setInterval(function () {
    // Difference od dates
    const now = new Date().getTime()
    const diff = targetDate - now

    // Calculate time
    const days = Math.floor(diff / (mseconds * 60 * 60 * 24))
    const hours = Math.floor(diff % (mseconds * 60 * 60 * 24) / (mseconds * 60 * 60))
    const minutes = Math.floor(diff % (mseconds * 60 * 60) / (mseconds * 60))
    const seconds = Math.floor(diff % (mseconds * 60) / mseconds)

    html = 'Faltam ' + days + ' dias, ' + hours + ' horas, ' + minutes + ' minutos e ' + seconds + ' segundos'

    if (targetDate > now) {
      target.innerHTML = html
    } else {
      target.innerHTML = 'Favor digite uma data válida'
    }
  }, 1000)
}

function currentHour () {
  const currentDate = new Date()
  const hour = currentDate.getHours()
  const minute = currentDate.getMinutes()
  const second = currentDate.getSeconds()
  return ' ' + hour + ':' + minute + ':' + second
}

function formatDate (str) {
  const date = str.split('/')
  const day = date[0]
  const month = date[1]
  const year = date[2]
  return month + ' ' + day + ' ' + year + currentHour()
}

form.addEventListener('submit', function (e) {
  e.preventDefault()
  clearInterval(myInterval)
  render()
})
