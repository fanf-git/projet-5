function afficherNounoursNameParagraphe(nounours) {} // afficher les noms des nounours sous forme de paragraphes dans la page

function afficherDivAvecNomEtPrixNounours(nounours) {} // pour chaque nounours, creer division et a l'interieur, ajoute nom + prix du nounours

function afficherPhotoDesNounours(nounours) {} // reussir a integrer les liens dans la balise src de tag <img>

function afficherLeToutSousFormeDeDivisions(nounours) {} // combiner tout et faire un apercu du produit (image, nom, prix + bouton "voir produit")

// 5) reussir a faire la page de produit (il ne s'agit plus de faire un apercu des produits comme sur la page d'accueil, mais bien de remplir les informations sur un template de page HTML)





function displayNameFirstTeddy() {
    return fetch( 'https://oc-p5-api.herokuapp.com/api/teddies' )
    .then((response) => response.json())
    .then((nounourses) => nounourses.name)
}

function displayNameFirstTeddy(name) {
    console.log ('Le premier nounours s appelle ${name}')
}

async function main() {
    const name = await displayNameFirstTeddy()
    console.log(name)
    displayNameFirstTeddy(name)
}
main()