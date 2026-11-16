fileconst Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, 'team_status.db'));

db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS team_members (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    email TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS status_updates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    member_id INTEGER NOT NULL,
    type TEXT NOT NULL CHECK(type IN ('daily', 'weekly')),
    done TEXT NOT NULL,
    doing TEXT NOT NULL,
    blockers TEXT DEFAULT '',
    plan TEXT DEFAULT '',
    week_start DATE,
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(member_id) REFERENCES team_members(id)
  );
`);

const count = db.prepare('SELECT COUNT(*) as c FROM team_members').get();
if (count.c === 0) {
  const insert = db.prepare('INSERT INTO team_members (name, email) VALUES (?, ?)');
  insert.run('Alice Johnson', 'alice@team.com');
  insert.run('Bob Smith', 'bob@team.com');
  insert.run('Carol White', 'carol@team.com');
  insert.run('David Brown', 'david@team.com');
}

module.exports = db;
