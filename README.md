# graph
> A graph [component](https://github.com/marcodpt/component/) based on
[cytoscape.js](https://cytoscape.org/)

[Live demo](https://marcodpt.github.io/component/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fmarcodpt%2Fgraph%2Fsample.js)

## Params
 - array `data`: array of objects with `edges` and `vertices` of your graph
   - object items represent `vertices` or `edges`:
     - string `id`
     - string `label`
     - string `color`
     - Promise string `info`
     - string `source`: only for `edges`, the `vertice` source
     - string `target`: only for `edges`, the `vertice` target
