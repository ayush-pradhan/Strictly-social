# Social Media App

## Setup Database

```shell
$ mysql -u root
```

```
create database socialMediadb;

create user socialuser identified with mysql_native_password by 'socialpass';

grant all privileges on socialMediadb.* to socialuser;

flush privileges;
```

## Project structure

```
├───controllers     //functions to connect routes to db operations
├───db              // db connection and model definitions
├───public          // html/css/js files
└───routes          // express middlewares ( route wise )
```

## Business Logic

### Users

1. **create users**
   this will create a new user with a random username

### Posts

1. **create post**
   this will crate a new post, required fields are

   - username ( the author of this post )
   - title
   - body

2. **show all posts**
   list all existing posts, we should have following filtering support

   - filter by username
   - filter by query contained in title (search by title)

3. **edit posts** `TBD`

4. **delete posts** `TBD`

### Comments

1. **show all comments (of a user)**

2. **show all comments (under a post)**

3. **add a comment**

## API DOCUMENTATION

### `users`

1.  ` POST /users`

Creates a new user with random username and an user id

2. `GET /users/{userid}`

Get an user with a given user id

3. `GET /users/{username}`

Get an user with a given username

### `posts`

1. `GET /posts/`

Get all posts by everyone

2. `POST /posts`

Create a new post.

Required fields in request's body

```
userId =
title =
body =
```

### Frontend (Client Side Code)

```shell
src/public
├───app                 # our own frontend js code
├───components          # own html snippets
├───css                 # css libraries
├───fonts               # fonts that
└───js                  # js libraries
```
