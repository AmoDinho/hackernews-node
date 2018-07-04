const {GraphQLServer} = require('graphql-yoga');
const {Prisma} = require('prisma-binding');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const AuthPayload = require('./resolvers/AuthPayload');
const Subscription = require('./resolvers/Subscription');




//2
const resolvers ={
    Query,
    Mutation,
    AuthPayload,
    Subscription,
    }

    




//3
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: req =>({
        ...req,
        db: new Prisma({
            typeDefs: 'src/generated/prisma.graphql',
            endpoint:'https://eu1.prisma.sh/public-prongprince-384/hackernews-node/dev',
            secret:'mysecret123',
            debug:true,
        }),
    }),
})

server.start(() => console.log(`Server is running on http://localhost:4000`))


// HTTP:  https://eu1.prisma.sh/public-prongprince-384/hackernews-node/dev
  //WS:    wss://eu1.prisma.sh/public-prongprince-384/hackernews-node/dev
