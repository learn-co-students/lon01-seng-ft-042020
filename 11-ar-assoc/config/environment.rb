require "bundler/setup"
Bundler.require

# Create a connection to our database via ActiveRecord and specify that we're using sqlite3
ActiveRecord::Base.establish_connection(
  adapter: "sqlite3",
  database: "db/development.sqlite",
)

# Uses a gem called require-all to pull all the code from every file in the app folder into this file
require_all "app"
