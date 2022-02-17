import express from "express";
import dotenv from "dotenv";
import router from "./router";
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

const port = process.env.PORT || 3000;
const protocol = process.env.PROTOCOL || "http";
const domain = process.env.DOMAIN || "localhost";

app.listen(port, () => {
	console.log(`Server is running on ${protocol}://${domain}:${port}`);
});
