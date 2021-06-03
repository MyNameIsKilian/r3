class Research < ApplicationRecord
  belongs_to :user
  belongs_to :category
  belongs_to :solution
  validates :query, presence: true, length: { in: 2..60 }
  validates :category, presence: true
end
