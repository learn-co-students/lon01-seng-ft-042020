const baseUrl = 'http://localhost:3000'
const imageUrl = baseUrl + '/images/1'
const commentsUrl = baseUrl + '/comments'

function request (url, options) {
  return fetch(url, options).then(response => response.json())
}

function get (url) {
  return request(url)
}

function patch (url, data) {
  return request(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

function post (url, data) {
  return request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

function getImage () {
  return get(imageUrl)
}

function updateImage (imageData) {
  return patch(imageUrl, imageData)
}

function createComment (content) {
  return post(commentsUrl, { imageId: 1, content: content })
}
