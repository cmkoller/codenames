class Player < ActiveRecord::Base
  TEAMS = ["red", "blue"]
  ROLES = ["hinter", "guesser"]

  validates :username, presence: true
  validates :team, inclusion: { in: TEAMS, allow_nil: true }
  validates :role, inclusion: { in: ROLES, allow_nil: true }
end
