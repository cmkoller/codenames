class RemoveMessages < ActiveRecord::Migration
  def up
    drop_table :messages
  end

  def down
    create_table :messages do |t|
      t.string :username
      t.string :text
    end
  end
end
