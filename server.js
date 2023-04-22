const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;

const app = express();

app.use("/graphql", expressGraphQL({graphiql: true}));

app.get("/", (req, res) => {
    res.send("Hello");
});


app.listen(4000, () =>{
    console.log(`GraphQL-Server listening on port: ${4000}`);
});