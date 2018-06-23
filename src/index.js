const {GraphQLServer} = require('graphql-yoga');
const {Prisma} = require('prisma-binding');




//2
const resolvers ={
    Query:{
        info: () => `This is the API of a Hackernews Clone`,
        feed: (root, args,context,info) => {
            return context.db.query.links({}, info)
        },
    },

    

    Mutation:{
        //2
        post: (root, args, context,info) =>{
           return context.db.mutation.createLink({
               data:{
                   url: args.url,
                   description: args.description,
               },
           }, info)
        },
    },
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
