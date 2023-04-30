const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { ApolloServer } = require("apollo-server-express");
const modules = require("./modules");

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const startApolloServer = async () => {
  const server = new ApolloServer({
    modules,
    context: ({ req }) => {
      const token = req.headers.token || "";
      return {token};
    },
  });

  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });
  console.log(
    `Apollo server is running at http://localhost:${PORT}${server.graphqlPath}`
  );
};

startApolloServer();

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server is running on the port ${PORT}`));
