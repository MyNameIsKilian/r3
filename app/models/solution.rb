class Solution < ApplicationRecord
  include PgSearch::Model
  pg_search_scope :search_by_object_name,
    against: [:object_name],
    using: {
      tsearch: { prefix: true }
    }

  belongs_to :category
  validates :object_name, presence: true

  def bien_jeter
    content.split('Bien jeter : ')[1]
  end

  def first_content
    content.split('Bien jeter : ').first
  end
end
