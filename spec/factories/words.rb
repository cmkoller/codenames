FactoryGirl.define do
  factory :word do
    sequence(:text) { |n| "Glitter#{n}"}
  end
end
