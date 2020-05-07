API - application programming interface
request - a HTTP message that we SEND
GET - a HTTP verb.
response - a HTTP message that we RECEIVE
response body - a specific PART of the response (NOT ALL OF IT) that contains the ... payload
JSON - data format that we are going to receive in the response body (payload)
REST - do not worry about it today.
client - your computer
server - someone else's computer

What we are going to do today:

Make HTTP GET requests to the Star Wars API from the CLIENT, in order to receive JSON data as a payload (from the response body) of the HTTP responses from the server.

`gem install rest-client`
`gem install pry`
`gem install json`

`https://swapi.co/api/people/1/`
