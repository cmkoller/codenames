require 'rails_helper'

describe Card do
  it { should validate_presence_of(:word) }

  it { should validate_inclusion_of(:team).in_array(Player::TEAMS) }
end
