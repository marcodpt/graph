import {html} from '../dependencies.js'

export default () => html(({
  div, p, h5, i
}) =>
  div({
    class: 'w-100'
  }, [
    div({
      class: 'p-5 h-100'
    }, [
      div({
        class: 'card mb-3 h-100'
      }, [
        div({
          class: 'row no-gutters h-100'
        }, [
          div({
            class: 'col-lg-4 border-right'
          }, [
            div({
              class: [
                'card-body',
                'h-100',
                'overflow-auto'
              ]
            }, [
              h5({
                class: 'card-title d-none',
                dataCtx: 'label'
              }),
              p({
                style: {
                  whiteSpace: 'pre-wrap'
                },
                class: 'card-text d-none',
                dataCtx: 'info'
              }),
              i({
                class: 'fas fa-crosshairs fa-5x',
                dataCtx: 'none'
              }),
              i({
                class: 'fas fa-spinner fa-spin fa-5x d-none',
                dataCtx: 'pending'
              })
            ])
          ]),
          div({
            dataCtx: 'graph',
            class: 'col-lg-8 h-100'
          })
        ])
      ])
    ])
  ])
)
