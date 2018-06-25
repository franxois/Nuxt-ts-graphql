export default {
    dev: false,
    srcDir: "src",
    modules: ['@nuxtjs/apollo'],
    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: "http://localhost:4000/graphql",
                wsEndpoint: "null"
            }
        }
    }
}
