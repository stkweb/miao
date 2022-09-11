function add (a, b) {
  let c = b
  for(var i = 0; i < a; i++) {
    b = a + c
    c = b
  }
  return (a, b)
}
