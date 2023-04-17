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
  ("Spider-Man (Peter Parker)", "3/7", "1/7", "4/7", "4/7", "3/7", "4/7"),
  ("Iron Man (Tony Stark)", "6/7", "6/7", "4/7", "6/7", "5/7", "6/7"),
  ("Thor (Thor Odinson)", "6/7", "6/7", "4/7", "2/7", "7/7", "7/7"),
  ("Captain America (Steve Rogers)", "3/7", "1/7", "6/7", "3/7", "2/7", "3/7"),
  ("Doctor Strange (Stephen Strange)", "3/7", "6/7", "3/7", "4/7", "7/7", "2/7"),
  ("Human Torch (Johnny Storm)", "4/7", "6/7", "4/7", "4/7", "5/7", "4/7"),
  ("Deadpool (Wade Wilson)", "4/7", "1/7", "6/7", "2/7", "7/7", "4/7"),
  ("Wolverine (James Howlett)", "4/7", "1/7", "7/7", "2/7", "2/7", "4/7"),
  ("Hulk (Bruce Banner)", "7/7", "5/7", "4/7", "6/7", "3/7", "7/7"),
  ("Black Panther (T'Challa)", "3/7", "3/7", "5/7", "5/7", "2/7", "3/7"),
  ("Scarlet Witch (Wanda Maximoff)", "2/7", "6/7", "3/7", "3/7", "2/7", "2/7"),
  ("Black Widow (Natasha Romanova)", "3/7", "3/7", "6/7", "3/7", "2/7", "3/7");
  ("Groot", "4/7", "3/7", "4/7", "3/7", "3/7", "7/7");
  ("Ant-Man (Scott Lang)", "2/7", "3/7", "2/7", "4/7", "2/7", "2/7");
  ("Rocket (Rocket Raccoon)", "2/7", "1/7", "4/7", "3/7", "2/7", "2/7");
  ("Star-Lord (Peter Quill)", "3/7", "1/7", "4/7", "4/7", "2/7", "3/7");
  ("Ghost Rider (Johnny Blaze)", "5/7", "4/7", "2/7", "2/7", "3/7", "4/7" )
  ("Silver Surfer (Norrin Radd)", "7/7", "7/7", "5/7", "4/7", "7/7", "6/7");
  ("Captain Marvel (Carol Danvers)", "6/7", "6/7", "4/7", "3/7", "5/7", "5/7");
  ("Vision", "6/7", "6/7", "3/7", "4/7", "3/7", "5/7");
  ("Daredevil (Matt Murdock)", "2/7", "4/7", "5/7", "3/7", "2/7", "3/7");
  ("Luke Cage (Carl Lucas)", "5/7", "1/7", "4/7", "3/7", "2/7", "4/7");
  ("Iron Fist (Danny Rand)", "3/7", "3/7", "6/7", "3/7", "2/7", "2/7");
  ("Jessica Jones", "4/7", "1/7", "3/7", "2/7", "3/7", "4/7");
  ("Hawkeye (Clint Barton)", "2/7", "1/7", "4/7", "2/7", "2/7", "2/7");
  ("Doctor Doom (Victor Von Doom)", "6/7", "6/7", "4/7", "6/7", "5/7", "4/7");
  ("Drax the Destroyer", "7/7", "6/7", "4/7", "2/7", "2/7", "5/7");
  ("Gamora (Gamora Zen Whoberi Ben Titan)", "3/7", "1/7", "6/7", "3/7", "4/7", "3/7");
  ("Mantis", "7/7", "3/7", "6/7", "3/7", "7/7", "3/7");
  ("Punisher (Frank Castle)", "2/7", "1/7", "6/7", "3/7", "2/7", "3/7");
  ("Spider-Man (Miles Morales)", "3/7", "2/7", "3/7", "2/7", "3/7", "4/7");

  show tables;
  select * from characters;








