class Solution < ApplicationRecord
  belongs_to :category
  validates :object_name, presence: true
end
