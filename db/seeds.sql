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
INSERT INTO Characters(title, intelligence, strength, speed, durability, energy, fighting_skills)
  ("Spider-Man (Peter Parker)", "4/7", "4/7", "3/7", "3/7", "1/7", "4/7"),
  ("Thor (Thor Odinson)", "2/7", "7/7", "7/7", "6/7", "6/7", "4/7"),
  ("Doctor Strange (Stephen Strange)", "4/7", "2/7", "7/7", "2/7", "6/7", "6/7"),
  ("Deadpool (Wade Wilson)", "2/7", "4/7", "7/7", "4/7", "1/7", "6/7"),
  ("Iron Man (Tony Stark)", "6/7", "6/7", "5/7", "6/7", "6/7", "4/7"),
  ("Wolverine (James Howlett)", "2/7", "4/7", "2/7", "4/7", "2/7", "7/7"),
  ("Hulk (Bruce Banner)", "6/7", "7/7", "3/7", "7/7", "5/7", "4/7"),
  ("Captain America (Steve Rogers)", "3/7", "3/7", "2/7", "3/7", "1/7", "6/7"),
  ("Black Panther (T'Challa)", "5/7", "3/7", "2/7", "3/7", "3/7", "5/7"),
  ("Scarlet Witch (Wanda Maximoff)", "3/7", "2/7", "2/7", "2/7", "6/7", "3/7"),
  ("Black Widow (Natalia Romanova)", "3/7", "3/7", "2/7", "3/7", "3/7", "6/7");
  ("Groot", "3/7", "7/7", "3/7", "4/7", "3/7", "4/7");
  ("Ant-Man (Scott Lang)", "4/7", "5/7", "3/7", "5/7", "3/7", "4/7");
  ("Rocket (Rocket Raccoon)", "3/7", "2/7", "2/7", "2/7", "1/7", "4/7");
  ("Star-Lord (Peter Quill)", "4/7", "3/7", "2/7", "3/7", "1/7", "4/7");
  ("Ghost Rider (Johnny Blaze)", "2/7", "4/7", "3/7", "5/7", "4/7", "2/7");
  ("Silver Surfer (Norrin Radd)", "3/7", "7/7", "7/7", "6/7", "7/7", "2/7");
  ("Punisher (Frank Castle)", "3/7", "3/7", "2/7", "2/7", "1/7", "6/7");
  ("Spider-Man (Miles Morales)", "2/7", "4/7", "3/7", "3/7", "2/7", "3/7");
  ("Professor X (Charles Xavier)", "5/7", "2/7", "2/7", "2/7", "5/7", "3/7");
  ("Phoenix (Jean Grey)", "3/7", "2/7", "7/7", "7/7", "7/7", "4/7");
  ("Gambit (Remy LeBeau)", "2/7", "2/7", "2/7", "2/7", "2/7", "4/7");
  ("Nightcrawler (Kurt Wagner)", "3/7", "2/7", "7/7", "2/7", "1/7", "3/7");
  ("Colossus (Piotr Rasputin)", "2/7", "6/7", "2/7", "6/7", "1/7", "4/7");
  ("Vision", "4/7", "5/7", "3/7", "6/7", "6/7", "3/7");
  ("Daredevil (Matt Murdock)", "3/7", "3/7", "2/7", "2/7", "4/7", "5/7");
  ("Ghost Rider (Robbie Reyes)", "2/7", "4/7", "7/7", "5/7", "3/7", "4/7");
  ("Hawkeye (Clint Barton)", "3/7", "2/7", "2/7", "2/7", "1/7", "6/7");
  ("Storm (Ororo Munroe)", "2/7", "2/7", "3/7", "2/7", "5/7", "4/7");
  ("Winter Soldier (Bucky Barnes)", "2/7", "4/7", "2/7", "3/7", "1/7", "6/7");
  ("Moon Knight (Marc Spector)", "2/7", "3/7", "2/7", "3/7", "1/7", "4/7");
  ("Human Torch (Johnny Storm)", "2/7", "2/7", "5/7", "6/7", "5/7", "3/7"),
  ("Blade (Eric Brooks)", "2/7", "4/7", "2/7", "4/7", "1/7", "5/7");
  ("The Thing (Ben Grimm)", "3/7", "6/7", "2/7", "6/7", "1/7", "5/7");
  ("Cable (Nathan Summers)", "3/7", "4/7", "7/7", "4/7", "4/7", "6/7");
  ("Agent Nick Fury)", "3/7", "3/7", "2/7", "3/7", "1/7", "6/7");
  ("Captain Marvel (Carol Danvers)", "3/7", "5/7", "5/7", "6/7", "5/7", "4/7");
  ("Nova (Sam Alexander)", "6/7", "6/7", "7/7", "6/7", "6/7", "3/7");
  ("Quicksilver (Pietro Maximoff)", "3/7", "4/7", "5/7", "3/7", "1/7", "4/7");
  ("War Machine (Jim Rhodes)", "3/7", "6/7", "5/7", "6/7", "6/7", "4/7");
  ("Drax the Destroyer", "2/7", "5/7", "2/7", "7/7", "6/7", "4/7");
  ("Gamora", "3/7", "3/7", "4/7", "3/7", "1/7", "6/7");
  ("Iceman (Bobby Drake)", "2/7", "3/7", "3/7", "4/7", "5/7", "4/7");
  ("Wasp (Janet Van Dyne)", "3/7", "5/7", "3/7", "2/7", "4/7", "4/7");
  ("Beast (Hank McCoy)", "5/7", "4/7", "3/7", "4/7", "1/7", "4/7");
  ("Captain America (Sam Wilson)", "2/7", "2/7", "3/7", "2/7", "1/7", "4/7");
  ("Ghost-Spider (Gwen Stacy)", "3/7", "4/7", "3/7", "3/7", "1/7", "3/7");
  ("Talon (Laura Kinney)", "2/7", "2/7", "3/7", "4/7", "1/7", "6/7");
  ("Psylocke (Betsy Braddock)", "2/7", "6/7", "4/7", "6/7", "5/7", "4/7");
  ("Cyclops (Scott Summers)", "3/7", "2/7", "2/7", "2/7", "5/7", "4/7");
  ("She-Hulk (Jennifer Walters)", "3/7", "7/7", "3/7", "6/7", "1/7", "4/7");
  ("Invisible Woman (Sue Richards)", "3/7", "2/7", "3/7", "6/7", "5/7", "3/7");
  ("Mister Fantastic (Reed Richards)", "6/7", "2/7", "2/7", "5/7", "1/7", "3/7");
  ("Spider-Man 2099 (Miguel O'Hara)", "4/7", "4/7", "4/7", "3/7", "2/7", "2/7");
  ("Luke Cage (Carl Lucas)", "3/7", "4/7", "2/7", "5/7", "1/7", "4/7");
  ("Iron Fist (Danny Rand)", "3/7", "2/7", "2/7", "3/7", "3/7", "6/7");
  ("Adam Warlock", "3/7", "5/7", "7/7", "6/7", "6/7", "2/7");
  ("Black Bolt (Blackagar Boltagon)", "2/7", "5/7", "3/7", "3/7", "5/7", "4/7");
  ("Rogue (Anna Marie LeBeau)", "7/7", "7/7", "7/7", "7/7", "7/7", "7/7");
  ("Domino (Neena Thurman)", "2/7", "2/7", "2/7", "2/7", "3/7", "6/7");
  ("Spider-Woman (Jessica Drew)", "3/7", "5/7", "3/7", "4/7", "5/7", "4/7");
  ("Nebula", "4/7", "5/7", "2/7", "3/7", "6/7", "4/7");
  ("Ms. Marvel (Kamala Khan)", "2/7", "4/7", "3/7", "4/7", "1/7", "2/7");
  ("Mantis", "3/7", "3/7", "7/7", "7/7", "3/7", "6/7");
  ("Jessica Jones", "2/7", "4/7", "3/7", "4/7", "1/7", "3/7");
  ("Angel (Warren Worthington III)", "3/7", "2/7", "3/7", "2/7", "1/7", "4/7");
  ("Doctor Doom (Victor Von Doom)", "6/7", "4/7", "5/7", "6/7", "6/7", "4/7");
  ("Juggernaut (Cain Marko)", "2/7", "7/7", "2/7", "7/7", "1/7", "4/7");
  ("Magneto (Max Eisenhardt)", "5/7", "2/7", "5/7", "2/7", "6/7", "4/7");
  ("White Queen (Emma Frost)", "4/7", "4/7", "2/7", "5/7", "5/7", "3/7");
  ("Shang-Chi", "4/7", "3/7", "4/7", "4/7", "3/7", "7/7");
  ("Loki", "5/7", "5/7", "7/7", "6/7", "6/7", "3/7");
  ("Photon (Monica Rambeau)", "3/7", "2/7", "6/7", "4/7", "6/7", "4/7");
  ("Black Widow (Yelena Belova)", "3/7", "6/7", "5/7", "7/7", "6/7", "5/7");

  show tables;
  select * from characters;








