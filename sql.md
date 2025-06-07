# Create topics table

```sql
CREATE TABLE topics (
  id SERIAL PRIMARY KEY NOT NULL,
  icon VARCHAR(10) NOT NULL,
  title VARCHAR(100) NOT NULL
);
```

# Insert topics
```sql
INSERT INTO topics (icon, title) VALUES
('⚖️', 'Philosophy'),
('🌍', 'Travel'),
('📜', 'History'),
('🧙‍♂️', 'Fantasy Lore'),
('🤖', 'Technology'),
('🏛️', 'Civilizations'),
('🌐', 'Geopolitics');
```

# Create topic-description
```sql
CREATE TABLE topic_descriptions (
  id SERIAL PRIMARY KEY NOT NULL,
  topic_id INTEGER NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
  description TEXT NOT NULL
);
```

# Insert topic-descriptions
```sql
INSERT INTO topic_descriptions (topic_id, description) VALUES
(1, 'Explore the nature of reality, ethics, and human thought across cultures and eras.'),
(2, 'Discover hidden gems, iconic destinations, and the philosophies of meaningful journeys.'),
(3, 'Trace the rise and fall of empires, revolutions, and turning points that shaped humanity.'),
(4, 'Uncover ancient prophecies, magical realms, and the rich mythologies of imagined worlds.'),
(5, 'Dive into the evolution of machines, artificial intelligence, and the digital frontier.'),
(6, 'Study the legacies of ancient societies and how they continue to influence the modern world.'),
(7, 'Analyze power, strategy, and conflict in the global arena from past to present.');
```