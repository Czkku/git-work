/*
 Navicat Premium Data Transfer

 Source Server         : Cz
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : localhost:3306
 Source Schema         : forum

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 26/05/2021 21:50:47
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tab_passage
-- ----------------------------
DROP TABLE IF EXISTS `tab_passage`;
CREATE TABLE `tab_passage`  (
  `pid` int(0) NOT NULL,
  `ptitle` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pcontent` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `picture` mediumblob NULL,
  `createtime` date NULL DEFAULT NULL,
  `createuser` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `revisetime` date NULL DEFAULT NULL,
  `reviseuser` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `clicknum` int(0) NULL DEFAULT NULL,
  `rank` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`pid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tab_passage
-- ----------------------------
INSERT INTO `tab_passage` VALUES (2, '56', '4', NULL, '2021-03-04', '2', '2021-03-04', NULL, 5, 6);
INSERT INTO `tab_passage` VALUES (23, '2', '500', NULL, '2020-09-08', 'yxl', '2020-09-08', NULL, 6, 5);

-- ----------------------------
-- Table structure for tab_user
-- ----------------------------
DROP TABLE IF EXISTS `tab_user`;
CREATE TABLE `tab_user`  (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tab_user
-- ----------------------------
INSERT INTO `tab_user` VALUES ('yxl', '202cb962ac59075b964b07152d234b70');
INSERT INTO `tab_user` VALUES ('yxl', 'd41d8cd98f00b204e9800998ecf8427e');
INSERT INTO `tab_user` VALUES ('yxl', '202cb962ac59075b964b07152d234b70');
INSERT INTO `tab_user` VALUES ('yxl', '202cb962ac59075b964b07152d234b70');
INSERT INTO `tab_user` VALUES ('yxl', '202cb962ac59075b964b07152d234b70');
INSERT INTO `tab_user` VALUES ('yxl', '202cb962ac59075b964b07152d234b70');
INSERT INTO `tab_user` VALUES ('aaa', '698d51a19d8a121ce581499d7b701668');
INSERT INTO `tab_user` VALUES ('', 'd41d8cd98f00b204e9800998ecf8427e');

-- ----------------------------
-- Table structure for tab_video
-- ----------------------------
DROP TABLE IF EXISTS `tab_video`;
CREATE TABLE `tab_video`  (
  `video` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createuser` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createtime` date NULL DEFAULT NULL,
  `reviseuser` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `revisetime` date NULL DEFAULT NULL,
  `clicknum` int(0) NULL DEFAULT NULL,
  `rank` int(0) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
