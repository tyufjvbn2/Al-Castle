import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use();

const port = process.env.PORT;
const protocol = process.env.PROTOCOL;
const domain = process.env.DOMAIN;

app.listen(port, () => {
	console.log(`Server is running on ${protocol}://${domain}:${port}`);
});
