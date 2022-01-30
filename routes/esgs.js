const express = require("express");
const router = express.Router();

const EsgController = require("../controllers/esgs");

// Company Analysis
router.get("/", EsgController.getCompanies);
router.get("/:company_id", EsgController.getCompany);
router.get("/:company_id/peer_map", EsgController.getCompanyPeerMap);
router.get(
  "/:company_id/sector_performance",
  EsgController.getCompanySectorPerformance
);
router.get(
  "/:company_id/sentiment_scores",
  EsgController.getCompanySentimentScores
);
router.get("/:company_id/headlines", EsgController.getCompanyHeadlines);
router.get(
  "/:company_id/sector_performers",
  EsgController.getCompanySectorPerformers
);

// Classifications
router.get("/:company_id/topics", EsgController.getCompanyTopics);
router.get("/:company_id/subtopics", EsgController.getCompanySubTopics);
router.get("/:company_id/categories", EsgController.getCompanyCategories);
router.get(
  "/:company_id/topics/:topic_name/subtopics",
  EsgController.getCompanyTopicSubtopics
);
router.get(
  "/:company_id/topics/:topic_name/categories",
  EsgController.getCompanyTopicCategories
);
router.get(
  "/:company_id/topics/:topic_name/subtopics/:subtopic/categories",
  EsgController.getCompanyTopicSubtopicCategories
);
router.get(
  "/:company_id/subtopics/:subtopic/categories",
  EsgController.getCompanySubtopicCategories
);

// Classifications Company Analysis
router.get("/:company_id/news", EsgController.getCompanyNews);
router.get("/:company_id/scores", EsgController.getCompanyScores);
router.get(
  "/:company_id/cumulative_scores",
  EsgController.getCompanyCumulativeScores
);

module.exports = router;
