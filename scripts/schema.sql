-- Run this once in the Supabase SQL editor (Project > SQL Editor > New query).
-- Safe to re-run: uses "if not exists" / "or replace" throughout.

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

-- Comments submitted by a division's head of office while validating content,
-- reviewed by HRDD, and (if accepted) embedded back into division_competencies.
create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  division_code text not null,
  competency_index int not null,
  competency_name text not null,
  dimension_name text,
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

create index if not exists comments_division_code_idx on comments (division_code);
create index if not exists comments_status_idx on comments (status);

-- Row Level Security: all reads/writes go through server-side API routes using
-- the service-role key, so client-side (anon-key) access is fully locked down.
alter table division_competencies enable row level security;
alter table comments enable row level security;
