create table
    employees (
        id bigint primary key generated always as identity,
        name text,
        email text,
        department text default 'Hooli',
        created_at timestamptz default now ()
    );

create table
    files (
        id bigint primary key generated always as identity,
        name text,
        image text
    );