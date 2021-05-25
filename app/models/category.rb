class Category < ApplicationRecord
  has_many :solutions
  has_many :researches
end
