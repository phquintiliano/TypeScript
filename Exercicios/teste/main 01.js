function makeFunc() {
  var name = 'Mozilla'
  function displayName() {
    alert(name)
  }
  return displayName
}

console.log(makeFunc())
