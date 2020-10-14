INSERT INTO users (name, email, password) values ('Karney Hauger', 'khauger0@smugmug.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (name, email, password) values ('Lavena Waker', 'lwaker1@seesaa.net', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (name, email, password) values ('Lacey Chieze', 'lchieze2@skype.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (name, email, password) values ('Kristofor Beavan', 'kbeavan3@com.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (name, email, password) values ('Royall Dable', 'rdable4@squarespace.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (name, email, password) values ('Etti Ambrosio', 'eambrosio5@nymag.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (name, email, password) values ('Andonis O''Tierney', 'aotierney6@time.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (name, email, password) values ('Minna Blagden', 'mblagden7@sfgate.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, city, street, province, postal_code, active)
VALUES (1, 'Speed Lamp', 'Description','https://images.pexels.com/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350','https://images.pexels.com/2086676/pexels-photo-2086676.jpeg',93061,6,4,8,'Canada','536 Namsub Highway','Satboske','Quebec',28142,true),
(2, 2, 'Blank Corner', 'Description','https://images.pexels.com/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350','https://images.pexels.com/2121121/pexels-photo-2121121.jpeg',85234,6,6,7,'Canada','651 Nami Road','Bohbatev','Alberta',83680,true),
(3, 3, 'Habit Mix', 'Description','https://images.pexels.com/2080018/pexels-photo-2080018.jpeg?auto=compress&cs=tinysrgb&h=350','https://images.pexels.com/2080018/pexels-photo-2080018.jpeg',46058,0,5,6,'Canada','1650 Hejto Center','Genwezuj','Newfoundland and Labrador',44583,true),
(4, 3, 'Headed Know', 'Description','https://images.pexels.com/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&h=350','https://images.pexels.com/1029599/pexels-photo-1029599.jpeg',82640,0,5,5,'Canada','513 Powov Grove','Jaebvap','Ontario',38051,true),
(5, 3, 'Port Out', 'Description','https://images.pexels.com/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&h=350','https://images.pexels.com/1475938/pexels-photo-1475938.jpeg',2358,2,8,0,'Canada','1392 Gaza Junction','Upetafpuv','Nova Scotia',81059,true),
(6, 3, 'Fun Glad', 'Description','https://images.pexels.com/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&h=350','https://images.pexels.com/1172064/pexels-photo-1172064.jpeg',34291,6,6,4,'Canada','169 Nuwug Circle','Vutgapha','Newfoundland and Labrador',00159,true),
(7, 3, 'Shine Twenty', 'Description','https://images.pexels.com/2076739/pexels-photo-2076739.jpeg?auto=compress&cs=tinysrgb&h=350','https://images.pexels.com/2076739/pexels-photo-2076739.jpeg',13644,1,7,8,'Canada','340 Dokto Park','Upfoofa','Nova Scotia',29045,true),
(8, 3, 'Game Fill', 'Description','https://images.pexels.com/1756862/pexels-photo-1756862.jpeg?auto=compress&cs=tinysrgb&h=350','https://images.pexels.com/1756862/pexels-photo-1756862.jpeg',23428,5,6,4,'Canada','834 Bumwi Road','Rotunif','Newfoundland and Labrador',58224,true);

INSERT INTO reservations(start_date, end_date, property_id, guest_id)
VALUES(2018-09-11,2018-09-26,2,3),
(2018-01-04,2018-02-01,2,2),
(2021-10-01,2021-10-14,1,4),
(2014-10-21,2014-10-21,3,5),
(2016-07-17,2016-08-01,3,4),
(2018-05-01,2018-05-27,4,8),
(2022-10-04,20-10-23,5,1),
(2015-09-13,2015-09-30,6,8),
(2023-05-27,2023-05-25,4,2),
(2023-04-23,2023-05-02,8,1);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES(2,5,10,3,'messages'),
(1,4,1,4,'messages'),
(8,1,2,4,'messages'),
(3,8,5,4,'messages'),
(4,2,7,5,'messages'),
(4,3,4,4,'messages'),
(5,6,3,5,'messages');