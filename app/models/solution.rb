class Solution < ApplicationRecord

  belongs_to :category
  validates :object_name, presence: true

  def bien_jeter
    content.split('Bien jeter : ')[1]
  end

  def first_content
    content.split('Bien jeter : ').first
  end
end
