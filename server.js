const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); //parses json to body automatically middleware implementation

app.use((req, res, next) => {
   //logs every request
   console.log(`${req.method} ${req.url} - ${new Date()}`);
   next(); // pass to next handler (required!)
});

// app.use((req, res, next) => {
//    //logs every request
//    console.log('Hello It is Cypher here! ');
//    next(); // pass to next handler (required!)
// });

// app.post('/echo', (req, res) => {
//    //console.logo(req.body);
//    res.json({ echoed: req.body }); //req.body now available
// });

app.get('/user/:id', (req, res) =>{ // :id = placeholder
   const id = req.params.id; // access
   console.log(id);
   res.send(id);
});

app.get("/search", (req, res) =>{ // :id = placeholder
   const id = req.query.id;
   console.log(id);
   res.send(id);
});

app.listen(port, () => {
   console.log(`Exress app listening on port ${port}`);
});


/*
#### Write it thunder client under the json body tapp. and change the request from get to post
{
   "name": "Cypher"
}
*/