class Api::V1::PlayersController < ApplicationController
  def index
    render json: {
      hinters: Player.where(role: "hinter", team: params["team"]),
      guessers: Player.where(role: "guesser", team: params["team"])
    }
  end

  def create
    @player = Player.create(player_params)
    
    if @player.save
      Pusher.trigger('players', 'new_player', {})

      render json: { success: true }.to_json
    else
      render status: :unprocessable_entity, json: { error: "Please provide a username." }.to_json
    end
  end

  def update
    @player = Player.find_by(username: params["id"])

    if @player.update(player_params)
      Pusher.trigger('players', 'new_player', {})

      render json: { success: true }.to_json
    else
      render status: :unprocessable_entity, json: { error: @player.errors.full_messages.join(", ") }.to_json
    end
  end

  def destroy
    @player = Player.find_by(username: params["id"])
    @player.destroy

    render json: {}
  end

  def player_params
    params.permit(:username, :team, :role, :ready)
  end
end
