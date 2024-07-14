console.log('Animali')

// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe

const animali = [
    {
        name: 'pesce',
        family: 'vertebrati',
        class: 'condritti',
    },
    {
        name: 'mucca',
        family: 'bovidi',
        class: 'mammifero',
    },
    {
        name: 'pecora',
        family: 'bovidi',
        class: 'mammifero',
    },
]

console.log(animali)

// CREARE ARRAY CON LA LISTA DI ANIMALI
const listAnimal = []

for (let i = 0; i < animali.length; i++) {
    console.log(animali[i])
    listAnimal.push(animali)
    console.log(listAnimal)

}

// Crea un nuovo array con la lista dei mammiferi.
const listaMammiferi = []

// ciclo for
for (let i = 0; i < animali.length; i++) {
    // console.log(animali[i])
    // prendo la proprietà mammifero
    let classMammifero = animali[i].class
    //console.log(mammifero, animali[i])
    // SE è un mammifero
    // - metterlo nell'array
    if (classMammifero == 'mammifero') {
        listaMammiferi.push(animali[i])
        console.log(listaMammiferi)
    }




}



