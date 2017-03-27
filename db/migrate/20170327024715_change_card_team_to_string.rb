class ChangeCardTeamToString < ActiveRecord::Migration
  class Card < ActiveRecord::Base
  end

  TEAM_INT_TO_NAME = {"red" => 0, "blue" => 1}

  def up
    add_column :cards, :team_temp, :integer

    Card.all.each do |card|
      card.team_temp = card.team
      card.save!
    end

    change_column :cards, :team, :string

    Card.reset_column_information

    Card.all.each do |card|
      card.team = TEAM_INT_TO_NAME.invert[card.team_temp]
      card.save!
    end

    remove_column :cards, :team_temp
  end

  def down
    add_column :cards, :team_temp, :string

    Card.all.each do |card|
      card.team_temp = card.team
      card.save!
    end

    remove_column :cards, :team

    add_column :cards, :team, :integer

    Card.reset_column_information

    Card.all.each do |card|
      card.team = TEAM_INT_TO_NAME[card.team_temp]
      card.save!
    end

    remove_column :cards, :team_temp
  end
end
