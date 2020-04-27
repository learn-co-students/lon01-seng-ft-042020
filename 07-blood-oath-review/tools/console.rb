require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end
# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

# Create some data to test with
cult1 = Cult.new(name: "Cult of Joe", location: "London", founding_year: 2020, slogan: "All hail Joe")
cult2 = Cult.new(name: "Cult of Cthulhu", location: "Underwater", founding_year: 1928, slogan: "Giant eldritch horrors from other dimensions are awesome")
cult3 = Cult.new(name: "Cool Cult", location: "Hull", founding_year: 1988, slogan: "Please join my cult, I'm really lonely :(")

follower1 = Follower.new(name: "Timmy O' Toole", age: 20, life_motto: "Somebody please - tell me what to think!!!")
follower2 = Follower.new(name: "Sally Smith", age: 19, life_motto: "Decisions are hard!!!")

# Create some relationships between the instances we've created for testing - we now have one cult with two followers, one cult with only one follower and one cult with no followers at all :(
cult1.recruit_follower(follower1)
cult1.recruit_follower(follower2)

cult2.recruit_follower(follower1)



binding.pry

puts "Mwahahaha!" # just in case pry is buggy and exits
