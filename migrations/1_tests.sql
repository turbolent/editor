

CREATE TYPE answer_type AS ENUM (
  'resource', 'boolean', 'date', 'number', 'string'
);

CREATE TABLE tests (
  id TEXT PRIMARY KEY,
  answer_type answer_type NOT NULL,
  question TEXT NOT NULL,
  query TEXT NOT NULL,
  answer JSON NOT NULL
);
