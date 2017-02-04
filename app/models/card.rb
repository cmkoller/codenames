class Card < ActiveRecord::Base
  belongs_to :word

  enum team: { red: 0, blue: 1 }
end
