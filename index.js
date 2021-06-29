import {main, info} from './views/bootstrap5.js'
import {
  component
} from 'https://cdn.jsdelivr.net/gh/marcodpt/component/index.js'
import cytoscape from
  'https://cdn.jsdelivr.net/npm/cytoscape@3.19.0/dist/cytoscape.esm.min.js'

export default (e, params) => {
  component(e, main)

  const V = params.data.filter(X => X.source == null || X.target == null)
  const E = params.data.filter(X =>
    X.source != null &&
    X.target != null &&
    V.map(v => v.id).indexOf(X.source) != -1 &&
    V.map(v => v.id).indexOf(X.target) != -1
  )

  setTimeout(() => {
    var g = cytoscape({
      container: e.querySelector('[data-ctx=graph]'),
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

    g.on('tap', component(e.querySelector('[data-ctx=app]'), info, {
      label: '',
      info: '',
      pending: false
    }, (state, ev) => {
      var D = ev.target.data()
      if (state.pending) {
        return state
      } else {
        return [
          {
            pending: true,
            label: D.label,
            info: ''
          }, [
            dispatch => {
              Promise.resolve().then(() => D.info).then(info => {
                requestAnimationFrame(() => dispatch(state => ({
                  pending: false,
                  label: D.label,
                  info: info
                })))
              })
            }
          ]
        ]
      }
    }))
  }, 50)
}
