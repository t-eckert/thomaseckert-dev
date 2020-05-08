import mongoose from "mongoose";

const DB_CONN: string = process.env.DB_CONN || "";

mongoose.connect(DB_CONN, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", function() {
  console.info("Connected to 🌌 Cosmos DB");
});

export default connection;
