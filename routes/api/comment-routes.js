const router = require('express').Router();
const { 
    addComment, 
    removeComment,
    addReply,
    removeReply
    } = require('../../controllers/comment-controllers');

// /api/comments/<pizzaId>
//  post route to addComment
router
    .route('/:pizzaId')
    .post(addComment);

// /api/comments/<pizzaId>/<commentId>
// delete route to removeComment
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

// delete route to removeReply
router
    .route('/:pizzaId/:commentId/:replyId')
    .delete(removeReply);
    
module.exports = router;