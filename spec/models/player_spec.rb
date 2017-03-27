require 'rails_helper'

describe Player do
  it { should validate_presence_of(:username) }

  it { should validate_inclusion_of(:team).in_array(Player::TEAMS) }
  it { should validate_inclusion_of(:role).in_array(Player::ROLES) }
end
