const mongoose = require("mongoose");
const PizzaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "Pizza Name",
    },
    description: {
      type: String,
      default: "Pizza Description",
    },
    price: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pizza", PizzaSchema);
