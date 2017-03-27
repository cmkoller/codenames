class ChangeTeamAndRoleToStrings < ActiveRecord::Migration
  class Player < ActiveRecord::Base
  end

  TEAM_INT_TO_NAME = {"red" => 0, "blue" => 1}
  ROLE_INT_TO_NAME = {"hinter" => 0, "guesser" => 1}

  def up
    add_column :players, :team_temp, :integer
    add_column :players, :role_temp, :integer

    Player.all.each do |player|
      player.team_temp = player.team
      player.role_temp = player.role
      player.save!
    end

    change_column :players, :team, :string
    change_column :players, :role, :string

    Player.reset_column_information

    Player.all.each do |player|
      player.team = TEAM_INT_TO_NAME.invert[player.team_temp]
      player.role = ROLE_INT_TO_NAME.invert[player.role_temp]
      player.save!
    end

    remove_column :players, :team_temp
    remove_column :players, :role_temp
  end

  def down
    add_column :players, :team_temp, :string
    add_column :players, :role_temp, :string

    Player.all.each do |player|
      player.team_temp = player.team
      player.role_temp = player.role
      player.save!
    end

    remove_column :players, :team
    remove_column :players, :role

    add_column :players, :team, :integer
    add_column :players, :role, :integer

    Player.reset_column_information

    Player.all.each do |player|
      player.team = TEAM_INT_TO_NAME[player.team_temp]
      player.role = ROLE_INT_TO_NAME[player.role_temp]
      player.save!
    end

    remove_column :players, :team_temp
    remove_column :players, :role_temp
  end
end
