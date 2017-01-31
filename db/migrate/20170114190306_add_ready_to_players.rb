class AddReadyToPlayers < ActiveRecord::Migration
  def change
    add_column :players, :ready, :boolean, default: false
  end
end
