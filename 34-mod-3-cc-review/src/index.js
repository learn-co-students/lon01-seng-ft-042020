const titleEl = document.querySelector('.title')
const imageEl = document.querySelector('.image')
const likesEl = document.querySelector('.likes')
const likeButton = document.querySelector('.like-button')
const commentsUl = document.querySelector('.comments')
const commentForm = document.querySelector('.comment-form')
const commentInput = document.querySelector('.comment-input')

function renderTitle (imageData) {
  titleEl.innerText = imageData.title
}

function renderImageTag (imageData) {
  imageEl.src = imageData.image
}

function renderLikes (imageData) {
  likesEl.innerText = `${imageData.likes} likes`
}

function renderComment (content) {
  const li = document.createElement('li')
  li.innerText = content
  commentsUl.append(li)
}

function renderComments (imageData) {
  commentsUl.innerHTML = ''
  imageData.comments.forEach(comment => renderComment(comment.content))
}

function listenForLikes (imageData) {
  likeButton.addEventListener('click', () => {
    imageData.likes += 1
    updateImage({ likes: imageData.likes }) // update the backend
      .then(newImageData => {
        likesEl.innerText = `${newImageData.likes} likes`
      })
  })
}

function listenForComments () {
  commentForm.addEventListener('submit', event => {
    event.preventDefault()
    const content = commentInput.value // event.target.comment.value
    createComment(content)
    renderComment(content)
  })
}

function renderImage (imageData) {
  renderTitle(imageData)
  renderImageTag(imageData)
  renderLikes(imageData)
  renderComments(imageData)
  listenForLikes(imageData)
  listenForComments()
}

function init () {
  getImage().then(imageData => {
    renderImage(imageData)
  })
}

init()
