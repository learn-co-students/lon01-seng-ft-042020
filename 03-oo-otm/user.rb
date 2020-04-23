# note on the keyword `self`:
# self in a instance method means the instance
# when self prefixes the method name, that method is a class method
# when we use self in a class method, then self means the class, NOT THE INSTANCE

class User
  @@all = []
  attr_accessor :username

  def initialize(username)
    @username = username
    @@all << self
  end

  def self.all
    @@all
  end

  def posts
    # returns an array of posts that belong to this user
    Post.all.select { |post| post.user == self }
  end

  def create_post(content)
    Post.new(content, self)
  end
end