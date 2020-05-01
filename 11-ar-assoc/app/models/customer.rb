class Customer < ActiveRecord::Base
  # creates a method #receipts on the Customer instances, that returns all the receipts that have the customer_id set to that customers id
  has_many :receipts
  # creates a method called #books, that fetches the relevant object using receipts as a join class
  has_many :books, through: :receipts
end
