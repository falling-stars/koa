/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 50715
 Source Host           : localhost:3306
 Source Schema         : gracly

 Target Server Type    : MySQL
 Target Server Version : 50715
 File Encoding         : 65001

 Date: 13/05/2018 22:02:10
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `email` varchar(30) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(15) NOT NULL,
  `image` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES ('1769908045@qq.com', '刘建华', 'a1769908045', '213123');
INSERT INTO `user` VALUES ('2440031228@qq.com', '刘建瑞', 'a1769908045', '2134324');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
