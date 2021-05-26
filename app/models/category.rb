class Category < ApplicationRecord
  has_many :solutions
  has_many :researches
  validates :name, presence: true
end
