import express from "express";
import fc from "../temp/func";
import { arr } from "../temp/test";
const router = express.Router();

router.get("/", (req, res) => {
	res.status(200).json({
		result: "ok",
		message: "success",
		data: `Result is ${fc(arr)}`,
	});
});

export default router;
