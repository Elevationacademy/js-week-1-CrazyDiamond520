
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

const newGenes = [genes[0], genes[1], genes[genes.length-1], genes[3], genes[2]]
newGenes.splice(3, 1)
newGenes.push("AZIN2", "AZIN2")
newGenes.splice(0, 0, "FXT")
console.log(newGenes)
console.log(genes)