# graph
> A graph element based on [cytoscape.js](https://cytoscape.org/)

[Live demo](https://marcodpt.github.io/h/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fmarcodpt%2Fgraph%2Fsamples.js)

## Usage
```js
import graph from 'https://cdn.jsdelivr.net/gh/marcodpt/graph/index.js'

document.body.appendChild(graph({
  data: [
    {
      id: 'v1',
      label: 'John',
      color: 'black',
      info: 'I am john!'
    }, {
      id: 'v2',
      label: 'Paul',
      color: 'black',
      info: 'I am Paul!'
    }, {
      id: 'v3',
      label: 'Jimmy',
      color: 'black',
      info: 'I am Jimmy!'
    }, {
      id: 'v4',
      label: 'David',
      color: 'black',
      info: 'I am David!'
    }, {
      id: 'e1',
      label: 'John -> Paul',
      color: 'blue',
      info: 'Cold!',
      source: 'v1',
      target: 'v2'
    }, {
      id: 'e2',
      label: 'Paul -> Jimmy',
      color: 'yellow',
      info: 'Warm!',
      source: 'v2',
      target: 'v3'
    }, {
      id: 'e3',
      label: 'Paul -> David',
      color: 'red',
      info: 'Very close!',
      source: 'v2',
      target: 'v4'
    }
  ]
}))
```

## Params
 - array `data`: array of objects with `edges` and `vertices` of your graph
   - object items represent `vertices` or `edges`:
     - string `id`
     - string `label`
     - string `color`
     - Promise string `info`
     - string `source`: only for `edges`, the `vertice` source
     - string `target`: only for `edges`, the `vertice` target
