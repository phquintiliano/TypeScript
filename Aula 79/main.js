function recursiva(max) {
  console.log(max)
  if (max >= 10) return
  max++

  recursiva(max)
}
recursiva(0)

function recursiva2(max) {
  if (max >= 10) return
  max++
  console.log(max)
}
recursiva(0)
