class Word < ActiveRecord::Base
  has_many :card

  validates :text, presence: true, uniqueness: true
end
