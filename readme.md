# project structure

### `app/pages/index.html`

Displays a form for posting to `/count` endpoint and a debugger custom element that dumps state passed to the elements from the backend.

### `app/elements/my-debug.mjs`

A custom element that pretty prints state passed to it.

### `app/api/index.mjs`

GET handler for the `/` endpoint that dumps the request cookies into state.


### `app/api/count.mjs`

POST hander for the `/count` endpoint that reads the cookie named 'count' and increments it.

