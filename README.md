# local storage text buffers

Wraps local storage to store text-buffers with some metadata.

```js
var buffers = require('ls-buffers')

buffers.list()
/* => {
  [id] => {name:, ...}
}*/

buffers.save({
  id: ..., // if not provided, will be generated
  meta: { name:, ... }, // if name is not provided will be generated
  text: ...
})

buffers.load(id)
/* => {
  id: ...,
  meta: { name:, ... },
  text: ...
}*/

buffers.del(id)

buffers.generateId()
buffers.generateName()
```

exports.generateName = function () {
  var d = new Date()
  return 'Untitled ('+d.toLocaleDateString()+')'
}