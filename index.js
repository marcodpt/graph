import view from './views/bootstrap5.js'
import {cytoscape} from './dependencies.js'

export default ({data}) => {
  const e = view()

  const V = data.filter(X => X.source == null || X.target == null)
  const E = data.filter(X =>
    X.source != null &&
    X.target != null &&
    V.map(v => v.id).indexOf(X.source) != -1 &&
    V.map(v => v.id).indexOf(X.target) != -1
  )
  const getCtx = ctx => e.querySelector(`[data-ctx="${ctx}"]`)
  const show = t => t.classList.remove('d-none')
  const hide = t => t.classList.add('d-none')

  var g = cytoscape({
    container: getCtx('graph'),
    elements: V.concat(E).map(X => ({data: X})),
    style: [
      {
        selector: 'node',
        style: {
          shape: 'ellipse',
          height: '50px',
          width: '70px',
          'border-width': '1px',
          'border-color': 'data(color)',
          'text-valign': 'center',
          'background-color': 'white',
          color: 'black',
          label: 'data(label)'
        }
      }, {
        selector: 'edge',
        style: {
          'line-color': 'data(color)',
          'curve-style': 'bezier',
          'target-arrow-color': 'data(color)',
          'target-arrow-shape': 'chevron'
        }
      }
    ],
    layout: {
      name: 'cose',
      animate: false
    }
  })

  var pending = false
  g.on('tap', ev => {
    if (pending) {
      return
    }
    pending = true
    const D = ev.target.data()

    hide(getCtx('none'))
    const infoEl = getCtx('info')
    hide(infoEl)
    const pendingEl = getCtx('pending')
    show(pendingEl)
    const label = getCtx('label')
    label.textContent = D.label
    show(label)

    Promise.resolve().then(() => D.info).then(info => {
      infoEl.textContent = info
      hide(pendingEl)
      show(infoEl)
      pending = false
    })
  })

  setTimeout(() => {
    const height = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    ) - e.offsetTop
    e.style.height = height+'px'
  }, 50)

  return e
}
