class Post
  # SSOT - single source of truth for Posts
  @@all = []

  attr_accessor :content, :user

  def initialize(content, user)
    @content = content
    @user = user
    @@all << self
  end

  def self.all
    @@all
  end
end
