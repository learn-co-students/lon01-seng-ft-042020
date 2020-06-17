const playerList = document.querySelector('.player-list')
const playerDetailsSection = document.querySelector('.player-details-section')

// fetch the players: done
function getPlayers () {
  return fetch('http://localhost:3000/players').then(resp => resp.json())
}

// update player
function updatePlayer (player) {
  return fetch(`http://localhost:3000/players/${player.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(player)
  })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) throw Error(data.error)
      return data
    })
    .catch(err => console.error(err))
}

// create a comment
function createComment (content, playerId) {
  return fetch('http://localhost:3000/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: content, player_id: playerId })
  }).then(resp => resp.json())
}

function destroyComment (id) {
  return fetch(`http://localhost:3000/comments/${id}`, {
    method: 'DELETE'
  }).then(resp => resp.json())
}

// render the player list
function renderPlayerList (players) {
  playerList.innerHTML = ''

  players.forEach(player => {
    const li = document.createElement('li')
    li.innerText = player.name

    li.addEventListener('click', () => {
      renderPlayerDetails(player)
    })

    playerList.append(li)
  })
}

// render the player details
function renderPlayerDetails (player) {
  playerDetailsSection.innerHTML = ''

  const titleEl = document.createElement('h2')
  titleEl.innerText = player.name

  const imageEl = document.createElement('img')
  imageEl.src = player.image

  const scoreEl = document.createElement('p')
  scoreEl.innerText = `Score: ${player.score}`

  const downButton = document.createElement('button')
  downButton.innerText = '-'
  downButton.addEventListener('click', () => {
    player.score--
    scoreEl.innerText = `Score: ${player.score}`
    updatePlayer(player)
  })

  const upButton = document.createElement('button')
  upButton.innerText = '+'
  upButton.addEventListener('click', () => {
    player.score++
    scoreEl.innerText = `Score: ${player.score}`
    updatePlayer(player)
  })

  const commentsTitle = document.createElement('h3')
  commentsTitle.innerText = 'Comments:'

  const commentsUl = document.createElement('ul')
  player.comments.forEach(comment => {
    const commentLi = document.createElement('li')
    commentLi.innerText = comment.content

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'X'
    deleteButton.addEventListener('click', () => {
      destroyComment(comment.id)
        .then(data => {
          if (data.error) throw Error(data.error)
          commentLi.remove()
        })
        .catch(err => alert(err))
    })

    commentLi.append(deleteButton)

    commentsUl.append(commentLi)
  })

  playerDetailsSection.append(
    titleEl,
    imageEl,
    scoreEl,
    downButton,
    upButton,
    commentsTitle,
    commentsUl
  )
}

getPlayers().then(players => {
  renderPlayerList(players)
})
