const express = require("express");
const router = express.Router();
const UsersController = require("./controllers/UsersController");
const TableController = require("./controllers/TableController");
const Like = require("./controllers/LikeController");
const Dislike = require("./controllers/DislikesController");

//users
router.post('/api/user', UsersController.store);
router.post('/api/auth', UsersController.auth);
router.use(UsersController.verifyToken);
router.get('/api/user/:id', UsersController.indexOne);
router.get('/api/users/:state', UsersController.indexOfLike);

//tables
router.post('/api/table', TableController.store);
router.get('/api/tables', TableController.indexOfState);
router.delete("/api/table", TableController.delete);

//like
router.post("/api/like", Like.store);
router.get("/api/accept", Like.acceptMember);
router.get("/api/recuse", Like.recuseMember);
router.get("/api/remove", Like.removeMember);

//dislike
router.post("/api/dislike", Dislike.store);


module.exports = router;
