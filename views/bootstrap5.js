import {
  fas,
  spinner
} from 'https://cdn.jsdelivr.net/gh/marcodpt/views/index.js'

const main = (h, text) => () =>
  h('div', {
    class: 'w-100 position-absolute start-0 top-0 bottom-0 mt-5'
  }, [
    h('div', {
      class: 'p-5 h-100'
    }, [
      h('div', {
        class: 'card mb-3 h-100'
      }, [
        h('div', {
          class: 'row no-gutters h-100'
        }, [
          h('div', {
            class: 'col-lg-4 border-right'
          }, [
            h('div', {
              'data-ctx': 'app'
            })
          ]),
          h('div', {
            class: 'col-lg-8'
          }, [
            h('div', {
              'data-ctx': 'graph',
              class: 'h-100'
            })
          ])
        ])
      ])
    ])
  ])

const info = (h, text) => ({label, info, pending}) =>
  h('div', {
    class: [
      'card-body h-100 overflow-auto',
      pending || !info ? 'align-middle text-center' : null
    ]
  }, 
    pending ? spinner({size: '5x'}) : 
    !info ? fas({
      name: 'crosshairs',
      size: '5x'
    }) : [
      h('h5', {
        class: 'card-title'
      }, text(label)),
      h('p', {
        style: {
          whiteSpace: 'pre-wrap'
        },
        class: 'card-text'
      }, text(info))
    ]
  )

export {main, info}
