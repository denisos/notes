
# notes
express app to do crud operations on notes resource


# startup
`nvm use`
`npm install`
`node index.js`


## methods

### get all notes
`curl http://localhost:3000/notes`

### create new note
`curl -X POST -d title="my new note" -d body="this is the body of my new note" http://localhost:3000/notes`

### update existing note
`curl -X PUT -d title="updated second note title" -d body="a second note body" http://localhost:3000/notes/e18715d6-c17b-418c-b427-b0d44ffd9fce`

### delete existing note
`curl -X DELETE http://localhost:3000/notes/e18715d6-c17b-418c-b427-b0d44ffd9fce`

### get note by id
`curl http://localhost:3000/notes/e18715d6-c17b-418c-b427-b0d44ffd9fce`
