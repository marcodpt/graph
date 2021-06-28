import chart from './index.js'
import friends from './samples/friends.js'

const X = {
  friends
}

window.setView = select => {
  const v = select.value
  const app = document.getElementById('app')
  const e = app.cloneNode(false)
  app.replaceWith(e)
  if (X[v]) {
    const update = chart(e, X[v])
  }
  const data = document.getElementById('data')
  data.innerText = JSON.stringify(X[v], undefined, 2)
}

window.addEventListener('load', () => {
  const s = document.body.querySelector('select')
  const o = s.querySelector('option')
  Object.keys(X).forEach(key => {
    const p = o.cloneNode(false)
    p.setAttribute('value', key)
    p.setAttribute('label', key)
    s.appendChild(p)
  })
})
