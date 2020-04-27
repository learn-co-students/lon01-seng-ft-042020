class Follower
  # Get a follower's name, age and life motto
  attr_reader :name, :age, :life_motto

  # Keep track of all followers
  @@all = []

  # Create a new follower with a name, age and life motto
  def initialize(name:, age:, life_motto:)
    @name = name
    @age = age
    @life_motto = life_motto
    # Add the newly created follower to the list of all of the followers
    @@all << self
  end

  # Get all followers
  def self.all
    @@all
  end

  # Take a cult and have this follower join that cult
  def join_cult(cult)
    # Create a new blood oath that belongs to this follower and the cult we were given
    BloodOath.new(initiation_date: Time.now, follower: self, cult: cult)
  end

  # Get all bloodoaths this follower has made
  def blood_oaths
    # First, get all of the blood oaths and then from them, select only the ones that belong to this follower
    BloodOath.all.select { |blood_oath| blood_oath.follower == self }
  end

  # Get all cults that this follower is in
  def cults
    # First, get all of this follower's blood oaths and then for each one, return the cult that blood oath belongs to
    self.blood_oaths.map { |blood_oath| blood_oath.cult }
  end

  # Take an age and find all followers who are that age or older
  def self.of_a_certain_age(age)
    # First, get all of the followers, then select only the ones that have an age greater than or equal to the age given
    self.all.select { |follower| follower.age >= age }
  end
end
