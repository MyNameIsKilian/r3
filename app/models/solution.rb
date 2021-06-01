class Solution < ApplicationRecord
  include PgSearch::Model
  pg_search_scope :search_by_object_name,
    against: [:object_name],
    using: {
      tsearch: { prefix: true }
    }
  belongs_to :category
  validates :object_name, presence: true
end
