console.log('Persone')

// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.

// CREO UN OBJECTS
const persone = [
    {
        nome: 'Gianni',
        cognome: 'Fusco',
        età: 25,
    },
    {
        nome: 'Lara',
        cognome: 'Pascarella',
        età: 30,
    },
    {
        nome: 'Maria',
        cognome: 'Merlo',
        età: 20,
    },
]
console.log("Objects", persone)


// CREARE L'ARRAY
const people = []

// CICLO FOR
for (let i = 0; i < persone.length; i++) {
    let correnti = persone[i]
    console.log("indice degli objects", correnti)
    people.push(correnti)
    console.log("array con lista", people)

}

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const nomiEtà = []

// CREARE CICLO FOR
for (let i = 0; i < persone.length; i++) {
    let inPersone = persone[i]



    // CONCATENAZIONE TRA STRINGHE
    let concatenazione = nome + cognome + età
    console.log(concatenazione)




}
