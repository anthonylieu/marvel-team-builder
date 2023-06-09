USE marvelteam_db;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255),
  username VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE Characters (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  intelligence VARCHAR(3),
  strength VARCHAR(3),
  speed VARCHAR(3),
  durability VARCHAR(3),
  energy VARCHAR(3),
  fighting_skills VARCHAR(3),
  image VARCHAR(255)
);

INSERT INTO users(username, email, password)
VALUES
  ("Sean", "email", "password"),
  ("Anthony", "email", "password");

INSERT INTO Characters(title, intelligence, strength, speed, durability, energy, fighting_skills, image)
VALUES 
  ("Spider-Man (Peter Parker)", "4/7", "4/7", "3/7", "3/7", "1/7", "4/7", "spider-man.webp"),
  ("Thor (Thor Odinson)", "2/7", "7/7", "7/7", "6/7", "6/7", "4/7", "thor-img.webp"),
  ("Doctor Strange (Stephen Strange)", "4/7", "2/7", "7/7", "2/7", "6/7", "6/7", "doctor-strange.webp"),
  ("Deadpool (Wade Wilson)", "2/7", "4/7", "7/7", "4/7", "1/7", "6/7", "deadpool.webp"),
  ("Iron Man (Tony Stark)", "6/7", "6/7", "5/7", "6/7", "6/7", "4/7", "iron-man.webp"),
  ("Wolverine (James Howlett)", "2/7", "4/7", "2/7", "4/7", "2/7", "7/7", "wolverine.webp"),
  ("Hulk (Bruce Banner)", "6/7", "7/7", "3/7", "7/7", "5/7", "4/7", "hulk.webp"),
  ("Captain America (Steve Rogers)", "3/7", "3/7", "2/7", "3/7", "1/7", "6/7", "captain-america.webp"),
  ("Black Panther (T'Challa)", "5/7", "3/7", "2/7", "3/7", "3/7", "5/7", "black-panther.webp"),
  ("Scarlet Witch (Wanda Maximoff)", "3/7", "2/7", "2/7", "2/7", "6/7", "3/7", "scarlet-witch.webp"),
  ("Black Widow (Natalia Romanova)", "3/7", "3/7", "2/7", "3/7", "3/7", "6/7", "black-widow.webp"),
  ("Groot", "3/7", "7/7", "3/7", "4/7", "3/7", "4/7", "groot.webp"),
  ("Ant-Man (Scott Lang)", "4/7", "5/7", "3/7", "5/7", "3/7", "4/7", "ant-man.webp"),
  ("Rocket (Rocket Raccoon)", "3/7", "2/7", "2/7", "2/7", "1/7", "4/7", "rocket-racoon.webp"),
  ("Star-Lord (Peter Quill)", "4/7", "3/7", "2/7", "3/7", "1/7", "4/7", "star-lord.webp"),
  ("Ghost Rider (Johnny Blaze)", "2/7", "4/7", "3/7", "5/7", "4/7", "2/7", "ghost-rider.webp"),
  ("Silver Surfer (Norrin Radd)", "3/7", "7/7", "7/7", "6/7", "7/7", "2/7", "silver-surfer.webp"),
  ("Punisher (Frank Castle)", "3/7", "3/7", "2/7", "2/7", "1/7", "6/7", "punisher.webp"),
  ("Spider-Man (Miles Morales)", "2/7", "4/7", "3/7", "3/7", "2/7", "3/7", "spider-man-miles-morales.webp"),
  ("Professor X (Charles Xavier)", "5/7", "2/7", "2/7", "2/7", "5/7", "3/7", "proffessor-x.webp"),
  ("Phoenix (Jean Grey)", "3/7", "2/7", "7/7", "7/7", "7/7", "4/7", "phoenix.webp"),
  ("Gambit (Remy LeBeau)", "2/7", "2/7", "2/7", "2/7", "2/7", "4/7", "gambit.webp"),
  ("Nightcrawler (Kurt Wagner)", "3/7", "2/7", "7/7", "2/7", "1/7", "3/7", "nightcrawler.webp"),
  ("Colossus (Piotr Rasputin)", "2/7", "6/7", "2/7", "6/7", "1/7", "4/7", "colossus.webp"),
  ("Vision", "4/7", "5/7", "3/7", "6/7", "6/7", "3/7", "vision.webp"),
  ("Daredevil (Matt Murdock)", "3/7", "3/7", "2/7", "2/7", "4/7", "5/7", "daredevil.webp"),
  ("Ghost Rider (Robbie Reyes)", "2/7", "4/7", "7/7", "5/7", "3/7", "4/7", "ghost-rider-robbie-reyes.webp"),
  ("Hawkeye (Clint Barton)", "3/7", "2/7", "2/7", "2/7", "1/7", "6/7", "hawkeye.webp"),
  ("Storm (Ororo Munroe)", "2/7", "2/7", "3/7", "2/7", "5/7", "4/7", "storm.webp"),
  ("Winter Soldier (Bucky Barnes)", "2/7", "4/7", "2/7", "3/7", "1/7", "6/7", "winter-soldier.webp"),
  ("Moon Knight (Marc Spector)", "2/7", "3/7", "2/7", "3/7", "1/7", "4/7", "moon-knight.webp"),
  ("Human Torch (Johnny Storm)", "2/7", "2/7", "5/7", "6/7", "5/7", "3/7", "human-torch.webp"),
  ("Blade (Eric Brooks)", "2/7", "4/7", "2/7", "4/7", "1/7", "5/7", "blade.webp"),
  ("The Thing (Ben Grimm)", "3/7", "6/7", "2/7", "6/7", "1/7", "5/7", "the-thing.webp"),
  ("Cable (Nathan Summers)", "3/7", "4/7", "7/7", "4/7", "4/7", "6/7", "cable.webp"),
  ("Agent Nick Fury)", "3/7", "3/7", "2/7", "3/7", "1/7", "6/7", "agent-nick-fury.webp"),
  ("Captain Marvel (Carol Danvers)", "3/7", "5/7", "5/7", "6/7", "5/7", "4/7", "captain-marvel.webp"),
  ("Nova (Sam Alexander)", "6/7", "6/7", "7/7", "6/7", "6/7", "3/7", "nova.webp"),
  ("Quicksilver (Pietro Maximoff)", "3/7", "4/7", "5/7", "3/7", "1/7", "4/7", "quicksilver.webp"),
  ("War Machine (Jim Rhodes)", "3/7", "6/7", "5/7", "6/7", "6/7", "4/7", "war-machine.webp"),
  ("Drax the Destroyer", "2/7", "5/7", "2/7", "7/7", "6/7", "4/7", "drax-the-destroyer.webp"),
  ("Gamora", "3/7", "3/7", "4/7", "3/7", "1/7", "6/7", "gamora.webp"),
  ("Iceman (Bobby Drake)", "2/7", "3/7", "3/7", "4/7", "5/7", "4/7", "iceman.webp"),
  ("Wasp (Janet Van Dyne)", "3/7", "5/7", "3/7", "2/7", "4/7", "4/7", "wasp.webp"),
  ("Beast (Hank McCoy)", "5/7", "4/7", "3/7", "4/7", "1/7", "4/7", "beast.webp"),
  ("Captain America (Sam Wilson)", "2/7", "2/7", "3/7", "2/7", "1/7", "4/7", "captain-america-sam-wilson.webp"),
  ("Ghost-Spider (Gwen Stacy)", "3/7", "4/7", "3/7", "3/7", "1/7", "3/7", "ghost-spider.webp"),
  ("Talon (Laura Kinney)", "2/7", "2/7", "3/7", "4/7", "1/7", "6/7", "talon.webp"),
  ("Psylocke (Betsy Braddock)", "2/7", "6/7", "4/7", "6/7", "5/7", "4/7", "psylocke.webp"),
  ("Cyclops (Scott Summers)", "3/7", "2/7", "2/7", "2/7", "5/7", "4/7", "cyclops.webp"),
  ("She-Hulk (Jennifer Walters)", "3/7", "7/7", "3/7", "6/7", "1/7", "4/7", "she-hulk.webp"),
  ("Invisible Woman (Sue Richards)", "3/7", "2/7", "3/7", "6/7", "5/7", "3/7", "invisible-woman.webp"),
  ("Mister Fantastic (Reed Richards)", "6/7", "2/7", "2/7", "5/7", "1/7", "3/7", "mister-fantastic.webp"),
  ("Spider-Man 2099 (Miguel O'Hara)", "4/7", "4/7", "4/7", "3/7", "2/7", "2/7", "spider-man-2099.webp"),
  ("Luke Cage (Carl Lucas)", "3/7", "4/7", "2/7", "5/7", "1/7", "4/7", "luke-cage.webp"),
  ("Iron Fist (Danny Rand)", "3/7", "2/7", "2/7", "3/7", "3/7", "6/7", "iron-fist.webp"),
  ("Adam Warlock", "3/7", "5/7", "7/7", "6/7", "6/7", "2/7", "adam-warlock.webp"),
  ("Black Bolt (Blackagar Boltagon)", "2/7", "5/7", "3/7", "3/7", "5/7", "4/7", "black-bolt.webp"),
  ("Rogue (Anna Marie LeBeau)", "7/7", "7/7", "7/7", "7/7", "7/7", "7/7", "rogue.webp"),
  ("Domino (Neena Thurman)", "2/7", "2/7", "2/7", "2/7", "3/7", "6/7", "domino.webp"),
  ("Spider-Woman (Jessica Drew)", "3/7", "5/7", "3/7", "4/7", "5/7", "4/7", "spider-woman.webp"),
  ("Nebula", "4/7", "5/7", "2/7", "3/7", "6/7", "4/7", "nebula.webp"),
  ("Ms. Marvel (Kamala Khan)", "2/7", "4/7", "3/7", "4/7", "1/7", "2/7", "ms-marvel.webp"),
  ("Mantis", "3/7", "3/7", "7/7", "7/7", "3/7", "6/7", "mantis.webp"),
  ("Jessica Jones", "2/7", "4/7", "3/7", "4/7", "1/7", "3/7", "jessica-jones.webp"),
  ("Angel (Warren Worthington III)", "3/7", "2/7", "3/7", "2/7", "1/7", "4/7", "angel.webp"),
  ("Doctor Doom (Victor Von Doom)", "6/7", "4/7", "5/7", "6/7", "6/7", "4/7", "doctor-doom.webp"),
  ("Juggernaut (Cain Marko)", "2/7", "7/7", "2/7", "7/7", "1/7", "4/7", "juggernaut.webp"),
  ("Magneto (Max Eisenhardt)", "5/7", "2/7", "5/7", "2/7", "6/7", "4/7", "magneto.webp"),
  ("White Queen (Emma Frost)", "4/7", "4/7", "2/7", "5/7", "5/7", "3/7", "white-queen.webp"), 
  ("Shang-Chi", "4/7", "3/7", "4/7", "4/7", "3/7", "7/7", "shang-chi.webp"),
  ("Loki", "5/7", "5/7", "7/7", "6/7", "6/7", "3/7", "loki.webp"),
  ("Photon (Monica Rambeau)", "3/7", "2/7", "6/7", "4/7", "6/7", "4/7", "photon.webp"),
  ("Black Widow (Yelena Belova)", "3/7", "6/7", "5/7", "7/7", "6/7", "5/7", "black-widow-yelena-belova.webp");


  show tables;
  select * from Characters;
  select * from users;
  
 SELECT * FROM Characters WHERE title = "Groot";
