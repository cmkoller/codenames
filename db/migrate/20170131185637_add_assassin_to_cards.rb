class AddAssassinToCards < ActiveRecord::Migration
  def change
    add_column :cards, :assassin, :boolean, default: false
  end
end
