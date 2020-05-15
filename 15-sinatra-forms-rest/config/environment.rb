require 'bundler'
Bundler.require

require_all 'app'
binding.pry

ActiveRecord::Base.establish_connection({
  adapter: 'sqlite3',
  database: 'db/development.sqlite'
})
