class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  before_validation :strip_phone_number

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :researches
  has_many :rounds
  validates :email, uniqueness: true
  validates :phone_number, length: { in: 8..11 }

  private

  def strip_phone_number
    phone_number.delete(' ')
  end
end
