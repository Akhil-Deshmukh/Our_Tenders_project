import express from "express";

const router = express.Router();

import * as SubCategoryController from '../controller/subcategory.controller.js';


router.post('/save',SubCategoryController.save);

router.get("/fetch",SubCategoryController.fetch);


export default router;