class Cult
  # Get a cult's name, location, founding year and slogan
  attr_reader :name, :location, :founding_year, :slogan

  # Keep track of all followers
  @@all = []

  # Create a new cult with a name, location, founding year and slogan
  def initialize(name:, location:, founding_year:, slogan:)
    @name = name
    @location = location
    @founding_year = founding_year
    @slogan = slogan
    # Add the newly created follower to the list of all of the followers
    @@all << self
  end

  # Get all cults
  def self.all
    @@all
  end

  # Take an instance of follower and add it to that cult's list of followers
  def recruit_follower(follower)
    # Create a new bloodoath that belongs to this cult and the follower we were given
    BloodOath.new(initiation_date: Time.now, cult: self, follower: follower)
  end

  # Get all of the blood oaths this cult has
  def blood_oaths
    # First, get all of the blood oaths and then from them, select only the ones that belong to this cult
    BloodOath.all.select { |blood_oath| blood_oath.cult == self }
  end

  # Get all of the followers in this cult
  def followers
    # First, get all of this cult's blood oaths and then for each one, return the follower that blood oath belongs to
    self.blood_oaths.map { |blood_oath| blood_oath.follower }
  end

  # Get the number of followers in this cult
  def cult_population
    # First, get all of the followers that belong to this cult, then count how many there are
    self.followers.count
  end

  # Take a name and find the cult with that name
  def self.find_by_name(name)
    Cult.all.find { |cult| cult.name == name}
  end

  # Take a location and find the cult with that location
  def self.find_by_location(location)
    Cult.all.find { |cult| cult.location == location}
  end

  # Take a founding_year and find the cult with that founding_year
  def self.find_by_founding_year(founding_year)
    Cult.all.find { |cult| cult.founding_year == founding_year}
  end

  # Get the cult with the least number of followers
  def self.least_popular
    # Get all of the cults
    # For each cult, find out how many followers they have
    # Select the cult with the least followers
    @@all.min_by {|cult| cult.cult_population }
  end




end
