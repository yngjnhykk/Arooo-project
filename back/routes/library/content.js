const express = require('express');
const { Op } = require('sequelize');
const { Content } = require('../../models');

const router = express.Router();

// content 전체 조회
// GET | /library/content
router.get('/', async (req, res, next) => {
  try {
    const skip = parseInt(req.query.skip) || 0;
    const limit = parseInt(req.query.limit) || 10;

    const contents = await Content.findAll();

    const selectedContents = contents.slice(skip, skip + limit);

    res.status(200).json(selectedContents);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// content 부분 조회
// GET | /library/content/:contentId
router.get('/:contentId', (req, res) => {});

// 좋아요
// GET | /library/content/:contentId/like
router.post('/:contentId/like', (req, res) => {});

module.exports = router;
