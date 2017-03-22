require 'rails_helper'

describe Player do
  it { should validate_presence_of(:username) }
end
