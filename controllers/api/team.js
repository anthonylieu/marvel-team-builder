const router = require('express').Router();
const { Team } = require('../../models');

router.post('/', async (req, res) => {
    try {
     const teamData = Team.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  res.status(200).json(teamData);
      
   
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });