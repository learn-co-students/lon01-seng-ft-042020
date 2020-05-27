class Appearance < ApplicationRecord
  belongs_to :guest
  belongs_to :episode

  validates :rating, inclusion: { in: 1..5, message: "Enter a number between 1 and 5." }
  validates :guest_id, uniqueness: { scope: :episode_id }
end
