const router = require("express").Router();
const {
  getAllMembers,
  getAllMembersWithSearch,
  getMember,
  getParents,
  getSpouses,
  getSiblings,
  getChildren,
  addMember,
} = require("../controllers/members");

router.get("/", getAllMembers);
router.get("/search", getAllMembersWithSearch);
router.get("/:id", getMember);
router.get("/:id/parents", getParents);
router.get("/:id/spouses", getSpouses);
router.get("/:id/siblings", getSiblings);
router.get("/:id/children", getChildren);

router.post("/", addMember);

module.exports = router;
