import express from "express";
import fc from "../temp/func";
import { arr, arr2, arr3 } from "../temp/test";
const router = express.Router();

router.get("/", (req, res) => {
	res.status(200).json({
		result: "ok",
		message: "success",
		data: `Result is ${fc(arr)}, ${fc(arr2)}, ${fc(arr3)}`,
	});
});

export default router;
