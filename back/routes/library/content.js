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
router.get('/:contentId', async (req, res) => {
  try {
    const content = await Content.findOne({
      where: { id: parseInt(req.params.contentId) },
    });
    if (!content) {
      return res.status(404).send('없는 게시글이네요?');
    }
    res.status(200).json(content);
  } catch (error) {
    console.error(error);
  }
});

// 좋아요
// GET | /library/content/:contentId/like
router.post('/:contentId/like', async (req, res) => {
  try {
    const content = await Content.findOne({
      where: { id: parseInt(req.params.contentId) },
    });
    if (!content) {
      return res.status(404).send('없는 게시글이네요?');
    }
    content.likes += 1;
    await content.save();

    res.status(200).send({ likes: content.likes });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
