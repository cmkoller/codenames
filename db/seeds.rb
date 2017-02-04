require 'csv'

CSV.foreach(Rails.root.join("db/data/words.csv")) do |row|
  Word.find_or_create_by(text: row[0])
end
