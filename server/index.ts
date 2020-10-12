import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import socketio from 'socket.io';
import { Server } from 'http';

const app = express();

const router = require('./routes/router');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

const expressServer = new Server(app);

const io = socketio(expressServer);

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(router);

import dotenv from 'dotenv';
dotenv.config();

const port: number = Number(process.env.PORT);

expressServer.listen(port, ()=> {
console.log(`Server now running at port ${port}`)
})

