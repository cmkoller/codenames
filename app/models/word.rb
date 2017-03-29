class Word < ActiveRecord::Base
  has_many :cards

  validates :text, presence: true, uniqueness: true
end
