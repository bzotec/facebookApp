# facebookApp
The goal of the app is to let the user export his infos from Facebook.

Thechnologies used:

Frontend: VueJS

Backend: NodeJS

Please follow these instructions to get the app work:

1 - Create a mysql database with the name "faceapp"

2 - Use this sql code to create a new table:

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL,
  UNIQUE KEY `email` (`email`),
  KEY `id` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

3 - Install NodeJS  
then install the following packages:

npm install express

npm install body-parser

npm install mysql

4 - launch the app:

node myapp.js
