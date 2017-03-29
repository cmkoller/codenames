require 'rails_helper'

describe Word do
  it { should have_many(:cards) }
  it { should validate_presence_of(:text) }
  it { should validate_uniqueness_of(:text) }
end
