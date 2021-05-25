class Game < ApplicationRecord
  has_many :rounds
  validates :name, presence: true
  validates :description, presence: true
end
