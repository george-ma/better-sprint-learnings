-- MySQL dump 10.13  Distrib 5.6.46, for osx10.14 (x86_64)
--
-- Host: localhost    Database: better-sprint-learnings_development
-- ------------------------------------------------------
-- Server version	5.6.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ar_internal_metadata`
--

DROP TABLE IF EXISTS `ar_internal_metadata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ar_internal_metadata` (
  `key` varchar(255) NOT NULL,
  `value` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ar_internal_metadata`
--

LOCK TABLES `ar_internal_metadata` WRITE;
/*!40000 ALTER TABLE `ar_internal_metadata` DISABLE KEYS */;
INSERT INTO `ar_internal_metadata` VALUES ('environment','development','2019-11-28 19:16:13','2019-11-28 19:16:13');
/*!40000 ALTER TABLE `ar_internal_metadata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `learning_tags`
--

DROP TABLE IF EXISTS `learning_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `learning_tags` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `learning_id` bigint(20) DEFAULT NULL,
  `tag_id` bigint(20) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_learning_tags_on_learning_id` (`learning_id`),
  KEY `index_learning_tags_on_tag_id` (`tag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `learning_tags`
--

LOCK TABLES `learning_tags` WRITE;
/*!40000 ALTER TABLE `learning_tags` DISABLE KEYS */;
INSERT INTO `learning_tags` VALUES (44,7,17,'2019-11-28 19:39:22','2019-11-28 19:39:22'),(45,7,18,'2019-11-28 19:39:22','2019-11-28 19:39:22'),(46,7,11,'2019-11-28 19:39:22','2019-11-28 19:39:22'),(47,7,13,'2019-11-28 19:39:22','2019-11-28 19:39:22'),(56,27,22,'2019-11-28 20:14:34','2019-11-28 20:14:34'),(57,27,23,'2019-11-28 20:14:34','2019-11-28 20:14:34'),(58,28,24,'2019-11-28 20:15:34','2019-11-28 20:15:34'),(59,28,25,'2019-11-28 20:15:34','2019-11-28 20:15:34'),(60,30,26,'2019-11-28 20:16:31','2019-11-28 20:16:31'),(63,25,1,'2019-11-28 22:08:30','2019-11-28 22:08:30'),(64,25,4,'2019-11-28 22:08:30','2019-11-28 22:08:30'),(67,34,28,'2019-12-11 16:06:29','2019-12-11 16:06:29'),(70,1,1,'2019-12-11 16:43:50','2019-12-11 16:43:50'),(71,1,20,'2019-12-11 16:43:50','2019-12-11 16:43:50'),(72,32,27,'2019-12-11 16:44:05','2019-12-11 16:44:05'),(73,32,29,'2019-12-11 16:44:05','2019-12-11 16:44:05'),(79,40,31,'2019-12-22 17:52:54','2019-12-22 17:52:54'),(80,41,33,'2020-01-02 19:55:11','2020-01-02 19:55:11'),(81,42,32,'2020-01-02 20:19:47','2020-01-02 20:19:47'),(82,43,34,'2020-01-07 21:28:13','2020-01-07 21:28:13'),(83,47,35,'2020-01-08 21:41:14','2020-01-08 21:41:14'),(86,49,38,'2020-01-13 03:31:16','2020-01-13 03:31:16'),(87,49,39,'2020-01-13 03:31:16','2020-01-13 03:31:16'),(88,48,36,'2020-02-03 19:10:08','2020-02-03 19:10:08'),(89,48,37,'2020-02-03 19:10:08','2020-02-03 19:10:08');
/*!40000 ALTER TABLE `learning_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `learnings`
--

DROP TABLE IF EXISTS `learnings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `learnings` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_bin NOT NULL,
  `description` mediumtext COLLATE utf8mb4_bin NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `learnings`
--

LOCK TABLES `learnings` WRITE;
/*!40000 ALTER TABLE `learnings` DISABLE KEYS */;
INSERT INTO `learnings` VALUES (48,'Databricks Notebooks can be productionized!','{\"blocks\":[{\"key\":\"a4ego\",\"text\":\"See Technical One Pager - Crowd Curation Service:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":4,\"length\":44,\"key\":0}],\"data\":{}},{\"key\":\"b9kj5\",\"text\":\"Can develop on notebook and bring code out to a repo https://github.com/wishabi/search-crowd-curation-etl \",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":53,\"length\":52,\"key\":1}],\"data\":{}},{\"key\":\"c25ej\",\"text\":\"Since Databricks job runs use Jar files, can build jar + push upstream to s3 from a single run task (SRT) container\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"ani77\",\"text\":\"Chain of events - compiles jar in CircleCI, compiles docker image in CircleCI, uploads docker image to ECR, triggers deployment for SRT, SRT pushes jar to s3\",\"type\":\"unordered-list-item\",\"depth\":1,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"fin8i\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://confluence.wishabi.com/display/APP/Technical+One+Pager+-+Crowd+Curation+Service\",\"targetOption\":\"_self\"}},\"1\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://github.com/wishabi/search-crowd-curation-etl\",\"targetOption\":\"_self\"}}}}','2020-01-13 03:29:46','2020-01-13 03:29:46'),(52,'One-for-all script failing on CircleCI fix','{\"blocks\":[{\"key\":\"9b752\",\"text\":\"Test\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}','2020-01-13 03:36:18','2020-01-14 21:22:49');
/*!40000 ALTER TABLE `learnings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schema_migrations`
--

DROP TABLE IF EXISTS `schema_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schema_migrations` (
  `version` varchar(255) NOT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schema_migrations`
--

LOCK TABLES `schema_migrations` WRITE;
/*!40000 ALTER TABLE `schema_migrations` DISABLE KEYS */;
INSERT INTO `schema_migrations` VALUES ('20190927174206'),('20190930174332'),('20191025145747'),('20191211152746');
/*!40000 ALTER TABLE `schema_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_bin NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'item-data-platform','2019-11-28 19:16:17','2019-11-28 19:16:17'),(2,'dchau','2019-11-28 19:17:40','2019-11-28 19:17:40'),(3,'idp','2019-11-28 19:18:56','2019-11-28 19:18:56'),(4,'eugene','2019-11-28 19:18:56','2019-11-28 19:18:56'),(5,'roberts','2019-11-28 19:20:12','2019-11-28 19:20:12'),(6,'Matkiwsky','2019-11-28 19:22:04','2019-11-28 19:22:04'),(7,'geor','2019-11-28 19:22:51','2019-11-28 19:22:51'),(8,'ge','2019-11-28 19:22:51','2019-11-28 19:22:51'),(9,'ma','2019-11-28 19:22:51','2019-11-28 19:22:51'),(10,'george','2019-11-28 19:23:28','2019-11-28 19:23:28'),(11,'is','2019-11-28 19:23:28','2019-11-28 19:23:28'),(12,'really','2019-11-28 19:23:28','2019-11-28 19:23:28'),(13,'cool!','2019-11-28 19:23:28','2019-11-28 19:23:28'),(14,'something','2019-11-28 19:26:05','2019-11-28 19:26:05'),(15,'test','2019-11-28 19:34:02','2019-11-28 19:34:02'),(16,'testsetset','2019-11-28 19:34:27','2019-11-28 19:34:27'),(17,'aash','2019-11-28 19:39:22','2019-11-28 19:39:22'),(18,'brar','2019-11-28 19:39:22','2019-11-28 19:39:22'),(19,'IDP.2019.34','2019-11-28 20:08:28','2019-11-28 20:08:28'),(20,'some-other-tag','2019-11-28 20:10:12','2019-11-28 20:10:12'),(21,'hackerman','2019-11-28 20:12:42','2019-11-28 20:12:42'),(22,'rails','2019-11-28 20:14:34','2019-11-28 20:14:34'),(23,'local','2019-11-28 20:14:34','2019-11-28 20:14:34'),(24,'sql injection','2019-11-28 20:15:34','2019-11-28 20:15:34'),(25,'not good','2019-11-28 20:15:34','2019-11-28 20:15:34'),(26,'HEHEHEHE','2019-11-28 20:16:31','2019-11-28 20:16:31'),(27,'DAMMIT','2019-11-28 20:21:07','2019-11-28 20:21:07'),(28,'?','2019-12-11 16:05:59','2019-12-11 16:05:59'),(29,'idp.2019','2019-12-11 16:44:05','2019-12-11 16:44:05'),(30,'plswork','2019-12-22 05:43:31','2019-12-22 05:43:31'),(31,'markdown','2019-12-22 05:52:59','2019-12-22 05:52:59'),(32,'test123','2019-12-22 05:53:30','2019-12-22 05:53:30'),(33,'yeet','2020-01-02 19:55:11','2020-01-02 19:55:11'),(34,'aashbrar','2020-01-07 21:28:13','2020-01-07 21:28:13'),(35,'\"exit(1)//','2020-01-08 21:41:14','2020-01-08 21:41:14'),(36,'IDP.2019.42','2020-01-13 03:29:46','2020-01-13 03:29:46'),(37,'Databricks','2020-01-13 03:29:46','2020-01-13 03:29:46'),(38,'IDP.2019.32','2020-01-13 03:31:16','2020-01-13 03:31:16'),(39,'fadmin','2020-01-13 03:31:16','2020-01-13 03:31:16');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-05 11:18:33
