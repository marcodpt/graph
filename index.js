import {app} from 'https://cdn.jsdelivr.net/npm/hyperapp@2.0.18/index.min.js'
import {main, info} from './views/bootstrap5.js'
import cytoscape from
  'https://cdn.jsdelivr.net/npm/cytoscape@3.19.0/dist/cytoscape.esm.min.js'

export default (e, params) => {
  app({
    view: main,
    node: e
  })

  const V = params.data.filter(X => X.source == null || X.target == null)
  const E = params.data.filter(X =>
    X.source != null &&
    X.target != null &&
    V.indexOf(X.source) != -1 &&
    V.indexOf(X.target) != -1
  )

  setTimeout(() => {
    var g = cytoscape({
      container: e.querySelector('[data-ctx=graph]'),
      elements: V.concat(E),
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

    app({
      init: {
        label: '',
        info: '',
        pending: false
      },
      view: info,
      subscriptions: () => [[dispatch => {
        const listener = ev => {
          var D = ev.target.data()
          var stop = false
          requestAnimationFrame(() => dispatch(state => {
            if (state.pending) {
              stop = true
              return state
            } else {
              return {
                pending: true,
                label: D.label,
                info: ''
              }
            }
          }))
          if (!stop) {
            Promise.resolve().then(() => D.info).then(info => {
              dispatch(state => {
                requestAnimationFrame(() => dispatch(state => ({
                  pending: false,
                  label: D.label,
                  info: info
                })))
              })
            })
          }
        }
        g.on('tap', listener)
        return () => g.off('tap', listener)
      }]],
      node: e.querySelector('[data-ctx=app]')
    })
  }, 50)
}
