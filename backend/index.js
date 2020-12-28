import mongoose from "mongoose";
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolver";
import express from "express";
const app = express();
import multer from "multer";

mongoose.connect("mongodb://test:W0GunymdOzf5uBHX@cluster1-shard-00-00.0yyp3.mongodb.net:27017,cluster1-shard-00-01.0yyp3.mongodb.net:27017,cluster1-shard-00-02.0yyp3.mongodb.net:27017/inhoolife?ssl=true&replicaSet=atlas-z2te8m-shard-0&authSource=admin&retryWrites=true&w=majority");

const GQLServer = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});

const options = {
  port: 4000,
  playground: false
};

GQLServer.start(options, () =>
  console.log("GraphQL server running on 4000 port")
);

app.use(express.static("public"));

const upload = multer({ dest: "uploads/" });
app.post("/upload", upload.single("img"), (req, res) => {});

app.listen(4001, () => console.log("Express server running on 4001 port"));
