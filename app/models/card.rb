class Card < ActiveRecord::Base
  enum team: { red: 0, blue: 1 }
end
