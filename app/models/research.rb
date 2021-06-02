class Research < ApplicationRecord
  belongs_to :user
  belongs_to :category
  belongs_to :solution
  validates :query, length: { in: 2..20 }
  validates :category, presence: true
end
