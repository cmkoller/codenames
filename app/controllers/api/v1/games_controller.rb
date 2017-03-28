class Api::V1::GamesController < ApplicationController
  def index
    playing = Game.any?
    render json: { playing: playing }
  end

  def create
    @cards = CardGenerator.new.generate
    Game.create(started: true)

    Pusher.trigger('games', 'game_started', {})

    render json: { cards: @cards }
  end

  def destroy
    Game.destroy_all
    Card.destroy_all
    Pusher.trigger('games', 'game_cleared', {})

    render json: {}
  end
end
