create table if not exists users (
  id serial primary key,
  name varchar(50) not null,
  email varchar(254) not null
);

create type item_types as enum ('apparel', 'shoe');

create table if not exists sizes (
  id serial primary key,
  name varchar(4) not null unique,
  type item_types not null
);

create type genders as enum ('men', 'women');

create table if not exists products (
  id serial primary key,
  name varchar(70) not null,
  description varchar(500) not null,
  releasedAt timestamp default current_timestamp,
  price numeric(9,4) not null,
  gender genders not null,
  type item_types not null
);

create table if not exists products_variants (
  id serial primary key,
  name varchar(70) not null,
  productId integer references products on delete cascade
);

create table if not exists products_variants_sizes (
  productVariantId integer references products_variants on delete cascade,
  sizeId integer references sizes on delete restrict,
  quantity integer default 0,
  primary key(productVariantId, sizeId)
); 

create table if not exists products_variants_photos (
  id serial primary key,
  productVariantId integer references products_variants on delete cascade,
  url text not null unique
);

create type ratings as enum ('5', '4.5', '4', '3.5', '3', '2.5', '2', '1.5', '1', '0.5', '0');

create table if not exists reviews (
  id serial primary key,
  title varchar(70) not null,
  reviewBody text,
  rating ratings not null,
  createdAt timestamp default current_timestamp,
  author integer references users on delete cascade,
  product integer references products on delete cascade
);