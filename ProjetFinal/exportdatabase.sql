SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP DATABASE IF EXISTS `isitech-cours-nodejs`;
CREATE DATABASE `isitech-cours-nodejs` 
USE `isitech-cours-nodejs`;

DROP TABLE IF EXISTS `Panier`;
CREATE TABLE `Panier` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `description` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `Panier` (`id`, `name`, `price`, `description`, `image`) VALUES
(2, 'Short', '10€', 'Un short confortable, parfait pour une journée décontractée à l\extérieur', '/images/dressing.jpg'),
(1, 'T-shirt 1', '15€', 'Un t-shirt pour être à l aise lors de vos activités quotidiennes', '/images/dressing.jpg');


DROP TABLE IF EXISTS `Products`;
CREATE TABLE `Products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `description` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `Products` (`id`, `name`, `price`, `description`, `image`) VALUES
(1, 'T-shirt 1', '15€', 'Un t-shirt pour être à laise lors de vos activités quotidiennes.', '/images/dressing.jpg'),
(2, 'Short', '10€', 'Un short confortable, parfait pour une journée décontractée à l extérieur.', '/images/dressing.jpg'),
(3, 'Veste', '20€', 'Une veste élégante et pratique pour vous accompagner partout.', '/images/dressing.jpg'),
(4, 'Écharpe', '50€', 'Une écharpe douce et chaude pour vous protéger du froid avec style.', '/images/dressing.jpg'),
(5, 'Chemise', '70€', 'Une chemise classique et intemporelle pour un look professionnel.', '/images/dressing.jpg'),
(6, 'Chaussettes', '5€', 'Des chaussettes confortables pour garder vos pieds au chaud et au sec.', '/images/dressing.jpg'),
(7, 'Bonnet', '30€', 'Un bonnet stylé pour compléter votre tenue et vous protéger du froid.', '/images/dressing.jpg'),
(8, 'Cravate', '25€', 'Une cravate élégante qui ajoute une touche sophistiquée à votre look.', '/images/dressing.jpg');
