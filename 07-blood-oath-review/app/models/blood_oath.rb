class BloodOath
  # Get a blood oath's initiation date or the cult or follower it belongs to
  attr_reader :cult, :follower

  # Keep track of all blood oaths
  @@all = []

  # Create a new blood oath with an initiation date and the cult and follower that it belongs to
  def initialize(initiation_date:, cult:, follower:)
    @initiation_date = initiation_date
    @cult = cult
    @follower = follower
    # Add the newly created blood oath to the list of all of the bloodoaths
    @@all << self
  end

  # Get all blood oaths
  def self.all
    @@all
  end


end
