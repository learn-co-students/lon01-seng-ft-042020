# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Tweet.destroy_all

users = [
  {
    name: "daniel",
    password_digest: "asdifuhk24jgg24g24g24",
  },
  {
    name: "joanne",
    password_digest: "1358JLIET(*2T4knJQt4028h",
  },
]

User.create users

dan = User.find_by(name: "daniel")
jo = User.find_by(name: "joanne")

tweets = [
  {
    user_id: dan.id,
    content: "my name is daniel",
  },
  {
    user_id: dan.id,
    content: 'i\'m 28',
  },
  {
    user_id: dan.id,
    content: "i live in n1",
  },
  {
    user_id: jo.id,
    content: "i like rabbits",
  },
]

Tweet.create tweets
