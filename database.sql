
create table courses (
  id uuid default gen_random_uuid() primary key,
  title text,
  description text
);

insert into courses (title, description) values
('Cording for computational science', 'Learn programming for computational science'),
('Python for computational science', 'Python programming applied to computational science'),
('Understanding Computational chemistry', 'Basics of computational chemistry'),
('Python for Computational chemistry', 'Python applied to computational chemistry'),
('Python for Bioinformatics', 'Python and bioinformatics workflows'),
('Introduction to Drug design', 'Fundamentals of drug discovery and design');

create table projects (
  id uuid default gen_random_uuid() primary key,
  client_id uuid references auth.users(id),
  title text,
  description text,
  status text default 'Pending Review',
  created_at timestamp default now()
);

create table payments (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id),
  amount numeric,
  status text default 'pending',
  created_at timestamp default now()
);
