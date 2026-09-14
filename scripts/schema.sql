-- Run this in the Supabase SQL editor (Project > SQL Editor > New query).
-- Safe to re-run: uses "if not exists" / "drop ... if exists" throughout, so
-- re-running after the comments/position-profile update below is harmless.

create extension if not exists "pgcrypto";

-- A division's technical competencies, mirrored here once a division is migrated
-- from the static JSON so its content can be live-edited via the review workflow.
-- Divisions not yet present in this table keep reading from the static JSON.
create table if not exists division_competencies (
  id uuid primary key default gen_random_uuid(),
  division_code text not null,
  competency_index int not null,
  name text not null,
  definition text not null,
  dimensions jsonb not null,
  updated_at timestamptz not null default now(),
  unique (division_code, competency_index)
);

-- A division's Position Competency Profile ("individual competencies"), mirrored
-- here once seeded so position-level competency/level assignments can be
-- live-edited via the same review workflow. Divisions not yet present here
-- keep reading from the static positionProfiles.ts.
create table if not exists division_position_profiles (
  id uuid primary key default gen_random_uuid(),
  division_code text not null,
  position_index int not null,
  title text not null,
  section text,
  competencies jsonb not null, -- array of { name, level }
  updated_at timestamptz not null default now(),
  unique (division_code, position_index)
);

-- Comments submitted while validating content, reviewed by HRDD, and (if
-- accepted) embedded back into division_competencies or
-- division_position_profiles depending on target_type.
create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  division_code text not null,
  target_type text not null default 'competency' check (target_type in ('competency', 'position')),
  -- target_type = 'competency': competency_index + competency_name (+ optional dimension_name)
  competency_index int,
  competency_name text not null,
  dimension_name text,
  -- target_type = 'position': position_index + position_title, competency_name names which
  -- competency within that position's list is being commented on; suggested_text/final_text
  -- hold a proficiency level string rather than prose in this case.
  position_index int,
  position_title text,
  author_name text not null,
  author_role text,
  comment_text text not null,
  suggested_text text,
  status text not null default 'pending' check (status in ('pending', 'accepted', 'returned')),
  hrdd_note text,
  final_text text,
  created_at timestamptz not null default now(),
  reviewed_at timestamptz
);

-- Widen an existing comments table from before target_type/position support existed.
alter table comments add column if not exists target_type text not null default 'competency';
alter table comments add column if not exists position_index int;
alter table comments add column if not exists position_title text;
alter table comments alter column competency_index drop not null;
do $$ begin
  if not exists (
    select 1 from pg_constraint where conname = 'comments_target_type_check'
  ) then
    alter table comments add constraint comments_target_type_check check (target_type in ('competency', 'position'));
  end if;
end $$;

create index if not exists comments_division_code_idx on comments (division_code);
create index if not exists comments_status_idx on comments (status);
create index if not exists division_position_profiles_division_code_idx on division_position_profiles (division_code);

-- Row Level Security: all reads/writes go through server-side API routes using
-- the service-role key, so client-side (anon-key) access is fully locked down.
alter table division_competencies enable row level security;
alter table division_position_profiles enable row level security;
alter table comments enable row level security;
