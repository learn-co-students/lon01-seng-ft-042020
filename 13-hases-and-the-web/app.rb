system("clear")

require "pry"
require "rest-client" # this is a gem that enables us to make HTTP requests! (client)
require "json" # enables us to turn JSON text into a Ruby Hash

API_ROOT = "https://swapi.dev/api/"
API_PEOPLE_SEARCH = API_ROOT + "people/?search="
# Make HTTP GET requests to the Star Wars API.

# define a method to BUILD the url for searching for a character
def build_search_url(character_name)
  API_PEOPLE_SEARCH + character_name
end

puts "Hello! Welcome to the Star Wars API CLI"
puts "What character are you looking for?"
character_name = gets.chomp

# in this moment we are requesting a specific piece of data,
# it's analogous to requesting a website in the browser,
# but this time we are gonna receive JSON
response = RestClient.get(build_search_url(character_name))

# turn raw JSON into a Ruby Hash
response_hash = JSON.parse(response.body)

# &: syntax - advanced
# response_hash = response_hash.transform_keys(&:to_sym)

puts "These are the results of the search:"
puts "We have found #{response_hash["count"]} characters that match your request"

if response_hash["count"] > 0
  response_hash["results"].each do |character|
    puts "- #{character["name"]}"
  end
else
  puts "sorry - there are no results for '#{character_name}'"
end

puts "BYE"
