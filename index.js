
function get (k) {
  var v = localStorage.getItem(k)
  if (!v) return v
  try { return JSON.parse(v) }
  catch (e) {}
  return null
}

function set (k, v) {
  localStorage.setItem(k, JSON.stringify(v))
}

exports.list = function () {
  return get('buffers-list') || {}
}

exports.save = function (buffer) {
  buffer.id = buffer.id || exports.generateId()
  buffer.meta = buffer.meta || {}
  buffer.meta.name = buffer.meta.name || exports.generateName()

  var list = get('buffers-list') || {}
  list[buffer.id] = buffer.meta
  set('buffers-list', list)
  set('buffer-'+buffer.id, buffer)

  return buffer
}

exports.load = function (id) {
  return get('buffer-'+id)
}

exports.del = function () {
  var list = get('buffers-list') || {}
  delete list[buffer.id]
  set('buffers-list', list)
  localStorage.removeItem('buffer-'+buffer.id)  
}

exports.generateId = function () {
  return Date.now()
}

exports.generateName = function () {
  var d = new Date()
  return 'Untitled ('+d.toLocaleDateString()+')'
}