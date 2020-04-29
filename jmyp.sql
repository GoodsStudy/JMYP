/*
 Navicat Premium Data Transfer

 Source Server         : MySQL
 Source Server Type    : MySQL
 Source Server Version : 50729
 Source Host           : localhost:3306
 Source Schema         : jmyp

 Target Server Type    : MySQL
 Target Server Version : 50729
 File Encoding         : 65001

 Date: 10/04/2020 22:21:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart`  (
  `cart_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `user_id` int(10) NOT NULL COMMENT '用户id',
  `product_id` int(10) NOT NULL COMMENT '商品id',
  `num` int(10) NOT NULL COMMENT '商品数量',
  `p_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '商品名称',
  `total_price` double(20, 2) NOT NULL COMMENT '总价格',
  `insert_time` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '加入时间',
  PRIMARY KEY (`cart_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for classify
-- ----------------------------
DROP TABLE IF EXISTS `classify`;
CREATE TABLE `classify`  (
  `class_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '分类id',
  `class_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '类名',
  PRIMARY KEY (`class_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of classify
-- ----------------------------
INSERT INTO `classify` VALUES (1, '外套');
INSERT INTO `classify` VALUES (2, 'T恤');
INSERT INTO `classify` VALUES (3, '卫衣');
INSERT INTO `classify` VALUES (4, '长裤');
INSERT INTO `classify` VALUES (5, '衬衫');
INSERT INTO `classify` VALUES (6, '西服');
INSERT INTO `classify` VALUES (7, '大衣');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `procuct_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '商品主键id',
  `p_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商品名称',
  `p_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商品标题',
  `p_place` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '产地',
  `class_id` int(10) NULL DEFAULT NULL COMMENT '分类id',
  `diss_num` int(10) NULL DEFAULT NULL COMMENT '评论条数',
  `is_put` int(1) NOT NULL DEFAULT 1 COMMENT '是否上架 0下架  1上架  默认上架 ',
  `put_time` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '上架时间',
  `update_time` timestamp(6) NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`procuct_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (1, '卫衣', '男士帅气卫衣', '广东广州', 1, 22, 1, '2020-04-10 21:40:15.761745', NULL);

-- ----------------------------
-- Table structure for sku_product
-- ----------------------------
DROP TABLE IF EXISTS `sku_product`;
CREATE TABLE `sku_product`  (
  `sku_id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'sku主键id',
  `product_id` int(10) NOT NULL COMMENT '商品id',
  `price` double(10, 2) NOT NULL COMMENT '价格',
  `vip_price` double(10, 2) NOT NULL COMMENT '优惠价格',
  `stock` int(10) NOT NULL COMMENT '库存',
  `sales` int(10) NOT NULL COMMENT '销量',
  `picture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '图片',
  `describe` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '描述',
  `sp_data` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '规格属性  json数组格式',
  PRIMARY KEY (`sku_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sku_product
-- ----------------------------
INSERT INTO `sku_product` VALUES (1, 1, 35.00, 30.00, 50, 10, '1.jpg', '衣服很好看', NULL);
INSERT INTO `sku_product` VALUES (2, 1, 35.00, 30.00, 80, 100, '1.jpg', '衣服描述', '[{\"color\":\"red\"},{\"size\":\"xl\"},\"sex\":\"男\"]');
INSERT INTO `sku_product` VALUES (3, 1, 35.00, 30.00, 80, 100, '1.jpg', '衣服描述', '[{\"color\":\"red\"},{\"size\":\"xl\"},\"sex\":\"男\"]');

SET FOREIGN_KEY_CHECKS = 1;
