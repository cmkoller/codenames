FactoryGirl.define do
  factory :card do
    team "red"
    sequence(:order) { |n| n }
    assassin false
    revealed false
    word
  end
end
