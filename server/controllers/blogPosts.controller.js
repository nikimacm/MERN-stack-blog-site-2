//controllers/blogPosts.controller.js
import express from "express";
import mongoose from "mongoose";

const router = express.Router();

export const getAllBlogPosts = (req, res) => {
  res.send("MERN STACK BLOG SITE 2");
};

export default router;
