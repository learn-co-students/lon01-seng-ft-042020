document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = 'http://localhost:3000'
    const beerListUl = document.querySelector('#list-group')
    const beerDetailDiv = document.querySelector('#beer-detail')

    fetch(BASE_URL + '/beers')
    .then( resp => resp.json() )
    .then( beers => renderBeerList(beers) )

    const renderBeerList = (beers) => {
        beers.forEach( beer => renderBeerListitem(beer) )
    }

    const renderBeerListitem = (beer) => {
        const beerLi = document.createElement('li')

        beerLi.innerText = beer.name
        beerLi.className = "list-group-item"

        beerLi.addEventListener('click', (event) => handleBeerClick(beer.id))

        beerListUl.append(beerLi)
    }

    function handleBeerClick(beerId) {
        fetch(BASE_URL + `/beers/${beerId}`)
        .then( resp => resp.json() )
        .then( beer => renderBeerDetails(beer) )
    }

    const renderBeerDetails = (beer) => {
        beerDetailDiv.innerHTML = ''
        
        const beerTitle = document.createElement('h1')
        beerTitle.innerText = beer.name
        
        const beerImage = document.createElement('img')
        beerImage.src = beer.image_url
        
        const beerTagline = document.createElement('h3')
        beerTagline.innerText = beer.tagline
        
        const beerDescription = document.createElement('textarea')
        beerDescription.innerText = beer.description
        
        const saveButton = document.createElement('button')
        saveButton.innerText = "Save"
        saveButton.id = "edit-beer"
        saveButton.className = "btn btn-info"
        saveButton.addEventListener('click', () => handleDescriptionSave(beer.id, beerDescription))

        beerDetailDiv.append(beerTitle, beerImage, beerTagline, beerDescription, saveButton)
    }

    const handleDescriptionSave = (beerId, descriptionInput) => {
        fetch(BASE_URL + `/beers/${beerId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                description: descriptionInput.value,
            }),
        })
    }
})