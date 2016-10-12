Just-Poet 
======

Poet has your code-blogging back. Renders markdown, jade, or any templated files as posts, tag it up with metadata that's passed into any view engine you want, instant pagination, tag and category views, and home in time for dinner.

## Documentation

Full documentation for *Poet* can be found at [https://github.com/ruslankonev/just-poet/blob/master/docs/docs.md](https://github.com/ruslankonev/just-poet/blob/master/docs/docs.md)

## Installing

* `yarn add just-poet`

## Setup

Include Poet in your package.json and add it to your app, passing in your Express app and options. Call the `init` method and routes will be set up!

```javascript
const express = require('express');
const app = express();
const Poet = require('just-poet');
  
var poet = Poet(app, {
  posts: './_posts/',
  postsPerPage: 5,
  metaFormat: 'json'
});

poet.init().then(function () {
  // ready to go!
});

/* set up the rest of the express app */
```

## Contributing

Please read the [CONTRIBUTING.md](https://github.com/ruslankonev/just-poet/blob/master/CONTRIBUTING.md) for guides on contributions.

## License

MIT License, Copyright (c) 2016 Ruslan Konev & Jordan Santell
