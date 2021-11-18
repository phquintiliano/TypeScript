let varA = 'A' //b
let varB = 'B' //c
let varC = 'C' //a

const TempB = varB

varB = varC
varC = varA

varA = TempB

console.log(varA, varB, varC)
