const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    //id is automatically generated by mongoDB atlas
    author: {
      type: String,
    },

    title: {
      type: String,
    },

    tags: {
      type: Array,
    },

    comments: [
      {
        //id is automatically generated by mongoDB atlas
        comment: String,
        username: String,
      },
    ],

    favoriteCount: {
      type: String,
    },

    musicLink: {
      type: String,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
