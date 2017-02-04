class AddWordsAssociationToCards < ActiveRecord::Migration
  def up
    remove_column :cards, :word
    add_column :cards, :word_id, :integer, null: false
    add_index :cards, :word_id, unique: true
  end

  def down
    remove_index :cards, :word_id
    remove_column :cards, :word_id
    add_column :cards, :word, :string
  end
end
