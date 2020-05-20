class Destination < ApplicationRecord
  has_many :posts
  has_many :bloggers, through: :posts

  def avg_blogger_age
    blogger_age_array = self.posts.map {|p| p.blogger}.map {|b| b.age}
    (blogger_age_array.sum / blogger_age_array.size.to_f).round
  end
end
