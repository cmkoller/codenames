class Api::V1::PlayersController < ApplicationController
  def index
    render json: {
      hinters: Player.where(role: 0, team: params["team"]),
      guessers: Player.where(role: 1, team: params["team"])
    }
  end

  def create
    @player = Player.create(player_params)
    @player.role = 1
    @player.save
    Pusher.trigger('players', 'new_player', {})

    render json: { success: true }.to_json
  end

  def update
    @player = Player.find_by(username: params["id"])
    @player.update_attributes(player_params)

    Pusher.trigger('players', 'new_player', {})

    render json: { success: true }.to_json
  end

  def destroy
    @player = Player.find_by(username: params["id"])
    @player.destroy

    render json: {}
  end

  def player_params
    params.require(:player).permit(:username, :team, :role, :ready)
  end
end
