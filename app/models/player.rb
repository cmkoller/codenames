class Player < ActiveRecord::Base
  enum team: { red: 0, blue: 1 }
  enum role: { hinter: 0, guesser: 1}
end
