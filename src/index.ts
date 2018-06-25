import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schema';
import { Nuxt, Builder } from 'nuxt';

const app = express();
const isProd = (process.env.NODE_ENV === 'production')


const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({ app }); // app is from an existing express app

// We instantiate nuxt.js with the options
import config from './nuxt.config'
config.dev = !isProd
const nuxt = new Nuxt(config)

// Render every route with Nuxt.js
app.use(nuxt.render)

// Build only in dev mode with hot-reloading
if (config.dev) {
    new Builder(nuxt).build()
        .catch((error) => {
            console.error(error)
            process.exit(1)
        })
}


app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
