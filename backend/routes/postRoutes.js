const express = require('express')
const { getPost, getPosts, addPost, deletePost, updatePost } = require('../controller/postController')

const routes = express.Router()

routes.get('/',getPosts )
routes.get('/:id', getPost)
routes.post('/',addPost )
routes.delete('/:id',deletePost )
routes.patch('/:id',updatePost )

module.exports = routes;