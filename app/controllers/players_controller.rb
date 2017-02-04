class PlayersController < ApplicationController
  def index
    if params["team"] == "red"
      @players = Player.where(team: 0)
    elsif params["team"] == "blue"
      @players = Player.where(team: 1)
    end

    respond_to do |format|
      format.json { render json: {
          hinters: @players.where(role: 0) ,
          guessers: @players.where(role: 1)
        } }
    end
  end

  def create
    @player = Player.create(player_params)
    @player.role = 1
    @player.save
    Pusher.trigger('players', 'new_player', {})

    respond_to do |format|
      format.json { render json: { success: true }.to_json }
    end
  end

  def update
    @player = Player.find_by(username: params["id"])
    @player.update_attributes(player_params)

    Pusher.trigger('players', 'new_player', {})

    respond_to do |format|
      format.json { render json: { success: true }.to_json }
    end
  end

  def destroy
    @player = Player.find_by(username: params["id"])
    @player.destroy

    respond_to do |format|
      format.json { render json: {} }
    end
  end

  def player_params
    params.require(:player).permit(:username, :team, :role, :ready)
  end
end
