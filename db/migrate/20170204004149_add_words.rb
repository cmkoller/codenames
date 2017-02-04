class AddWords < ActiveRecord::Migration
  def change
    create_table :words do |t|
      t.string :text, null: false
    end

    add_index :words, :text, unique: true
  end
end
