import { connect, Connection, connection, disconnect } from "mongoose";

let database: Connection;

export const connectToMongo = () => {
  if (database) {
    return;
  }
  console.log(process.env.MONGO_URI);

  connect(process.env.MONGO_URI as string, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = connection;

  database.once("open", async () => {
    console.log("Connected To MongoDB");
  });

  database.on("error", async () => {
    console.log("Error Connecting to MongoDB");
  });
};

export const disconnectFromMongo = () => {
  if (!database) {
    return;
  }
  disconnect();
};
