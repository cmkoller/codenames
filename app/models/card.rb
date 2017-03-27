class Card < ActiveRecord::Base
  belongs_to :word

  validates :word, presence: true
  validates :team, inclusion: { in: Player::TEAMS, allow_nil: true }
end
