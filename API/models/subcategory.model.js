import mongoose from "mongoose";
import UniqueValidator from "mongoose-unique-validator";

const SubCategorySchema = mongoose.Schema({
    _id:Number,
    catnm:{
        type:String,
        required: [true,"Category name is required"],
        lowercase: true,
        trim: true,
      },
      subcatnm: {
        type: String,
        required: [true,"Sub Category name is required"],
        lowercase: true,
        trim: true,
        unique: true
      },
      subcaticonnm: {
        type: String,
        required: [true,"Sub Category icon name is required"],
        trim: true
      }
    });

    SubCategorySchema.plugin(UniqueValidator);

    const SubCategorySchemaModel = mongoose.model("subcategory_collection",SubCategorySchema);

    export default SubCategorySchemaModel;
