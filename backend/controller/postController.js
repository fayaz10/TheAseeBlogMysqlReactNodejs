
const db = require('../db')

const getPosts = (req,res)=>{
  const q = req.query.cat ? "SELECT * FROM posts WHERE cat=?" : "SELECT * FROM `posts`"

  db.query(q,[req.query.cat], (error,data)=>{
    if(error) return res.status(500).send(error);
    res.status(200).json(data)
  })

}

const getPost = (req,res)=>{
    const q = "SELECT p.id, name, user_id, title, description, p.img , cat, date FROM users u JOIN posts p ON u.id = p.user_id WHERE p.id = ?"
    db.query(q,[req.params.id], (error, data)=>{
        if(error) return res.status(500).json(error)
        return res.status(200).json(data[0])
    })
}

const deletePost = (req,res)=>{
    const postId = req.params.id;
    const q ="DELETE FROM posts WHERE id = ?"
    db.query(q,postId, (error,data)=>{
        if(error) return res.status(500).json(error)
        return res.status(200).json({suucess:"Post has been Deleted!."})
    })

}

const addPost = (req,res)=>{
   const q ="INSERT INTO `posts`(`title`, `description`, `cat`, `img`, `user_id`) VALUES (?)";
   const values =[req.body.title,req.body.description,req.body.cat,req.body.img,req.body.user_id]

   db.query(q,[values],(error, data)=>{
    if(error) return res.status(500).json(error);
    return res.status(200).json(data)
   })
}

const updatePost = (req,res)=>{
   const postId = req.params.id;

   const q="UPDATE `posts` SET `title` = ?, `description` = ?, `cat` = ?, `img` = ? WHERE `posts`.`id` = ? "
   const values = [req.body.title,req.body.description,req.body.cat,req.body.img]
   db.query(q,[...values, postId], (error,data)=>{
    if(error) return res.status(500).json(error)
    return res.json("post Updated")
   })
}
module.exports={
    getPost,getPosts,deletePost,updatePost,addPost
}