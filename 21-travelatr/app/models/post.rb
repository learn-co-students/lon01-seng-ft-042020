class Post < ApplicationRecord
  belongs_to :blogger
  belongs_to :destination

  def like
    self.update({ likes: self.likes + 7 })
    self.likes
  end
end
