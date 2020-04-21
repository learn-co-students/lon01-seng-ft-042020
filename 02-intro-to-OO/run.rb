require "pry"

# to create your own objects, you need to define classes
# class names are in CamelCase (start with upper and capitalize every next word)
class BankAccount
  # @@ variables are CLASS variables, they are SHARED between ALL OBJECTS
  @@all = []

  # initalize is a special method name
  # this method gets called when we instantiate the object ( when we call BankAccount.new )
  def initialize(user_id, balance)

    # @ variables are called 'instance variables'
    @user_id = user_id
    @balance = balance
    # keyword self in initialize means `the instance itself`
    @@all << self
  end

  # self, when used as a prefix to a method name
  # is going to make that method a class method
  # that means that an instance cannot respond to it,
  # but the class itself can.
  def self.all
    @@all
  end

  def self.total_balance
    @@all.map { |ba| ba.balance }.sum
  end

  def self.average_balance
    self.total_balance / @@all.size
  end

  # a reader - gives you a value
  def balance
    @balance
  end

  # a writer - enables you to set a value of an instance variable
  def balance=(new_amount)
    @balance = new_amount
  end

  def deposit(amount)
    @balance = @balance + amount
  end

  def withdraw(amount)
    @balance = @balance - amount
  end
end

# to create an _instance_ of a custom object, you call `.new` on a class
ba_1 = BankAccount.new("12333", 1)
ba_2 = BankAccount.new("65578", 570)
ba_3 = BankAccount.new("52378", 1398558913)
ba_4 = BankAccount.new("672468", 48)
ba_5 = BankAccount.new("671118", 5370)

binding.pry
