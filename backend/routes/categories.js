const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");

router.route("/").post(categoriesController.addCategory);
router.route("/:user").get(categoriesController.getCategoriesByUser);

module.exports = router;
