const Member = require("../models/Member");

const getAllMembers = async (req, res, next) => {
  const members = await Member.find({});
  res.status(200).json(members);
};

const getAllMembersWithSearch = async (req, res, next) => {
  const members = await Member.find({
    name: { $regex: `${req.query.query}`, $options: "i" },
  });
  res.status(200).json(members);
};

const getMember = async (req, res, next) => {
  const member = await Member.findOne({ _id: req.params.id });

  res.status(200).json(member);
};

const getParents = async (req, res, next) => {
  const members = await Member.find({});
  const member = members.find(
    (list_member) => list_member._id.toString() === req.params.id
  );

  const parents = members.filter(
    (list_member) =>
      (member.father_id &&
        list_member._id.toString() === member.father_id.toString()) ||
      (member.mother_id &&
        list_member._id.toString() === member.mother_id.toString())
  );

  res.status(200).json(parents);
};

const getSpouses = async (req, res, next) => {
  const members = await Member.find({});
  const member = members.find(
    (list_member) => list_member._id.toString() === req.params.id
  );

  const spouses = members.filter(
    (list_member) =>
      member.spouse_id &&
      list_member._id.toString() === member.spouse_id.toString()
  );

  res.status(200).json(spouses);
};

const getSiblings = async (req, res, next) => {
  const members = await Member.find({});
  const member = members.find(
    (list_member) => list_member._id.toString() === req.params.id
  );

  const siblings = member.father_id
    ? members.filter(
        (list_member) =>
          list_member._id.toString() !== member._id.toString() &&
          ((list_member.father_id &&
            member.father_id &&
            list_member.father_id.toString() === member.father_id.toString()) ||
            (list_member.mother_id &&
              member.mother_id &&
              list_member.mother_id.toString() === member.mother_id.toString()))
      )
    : [];

  res.status(200).json(siblings);
};

const getChildren = async (req, res, next) => {
  const members = await Member.find({});
  const member = members.find(
    (list_member) => list_member._id.toString() === req.params.id
  );

  const children = members.filter(
    (list_member) =>
      (list_member.father_id &&
        list_member.father_id.toString() === member._id.toString()) ||
      (list_member.mother_id &&
        list_member.mother_id.toString() === member._id.toString())
  );

  res.status(200).json(children);
};

const addMember = async (req, res, next) => {
  const member = await Member.create(req.body);
  res.status(201).json(member);
};

module.exports = {
  getAllMembers,
  getAllMembersWithSearch,
  getMember,
  getParents,
  getSpouses,
  getSiblings,
  getChildren,
  addMember,
};
