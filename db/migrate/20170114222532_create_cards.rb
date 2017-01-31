class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :word
      t.integer :team
      t.boolean :revealed, default: false
    end
  end
end
