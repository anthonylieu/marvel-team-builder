USE marvelteam_db;
CREATE TABLE Characters (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  durability VARCHAR(10),
  energy VARCHAR(10),
  fighting_skills VARCHAR(10),
  intelligence VARCHAR(10),
  speed VARCHAR(10),
  strength VARCHAR(10)
);
INSERT INTO Characters(title, durability, energy, fighting_skills, intelligence, speed, strength)
VALUES
  ("Spider-Man", "3/7", "1/7", "4/7", "4/7", "3/7", "4/7"),
  ("Iron Man", "6/7", "6/7", "4/7", "6/7", "5/7", "6/7"),
  ("Thor", "6/7", "6/7", "4/7", "2/7", "7/7", "7/7"),
  ("Captain America", "3/7", "1/7", "6/7", "3/7", "2/7", "3/7"),
  ("Doctor Strange", "3/7", "6/7", "3/7", "4/7", "7/7", "2/7"),
  ("Human Torch", "4/7", "6/7", "4/7", "4/7", "5/7", "4/7"),
  ("Deadpool", "4/7", "1/7", "6/7", "2/7", "7/7", "4/7"),
  ("Wolverine", "4/7", "1/7", "7/7", "2/7", "2/7", "4/7"),
  ("Hulk", "7/7", "5/7", "4/7", "6/7", "3/7", "7/7"),
  ("Black Panther", "3/7", "3/7", "5/7", "5/7", "2/7", "3/7"),
  ("Scarlet Witch", "2/7", "6/7", "3/7", "3/7", "2/7", "2/7"),
  ("Black Widow", "3/7", "3/7", "6/7", "3/7", "2/7", "3/7");
  show tables;
  select * from characters;








