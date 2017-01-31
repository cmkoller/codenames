class GamesController < ApplicationController
  def index
    playing = Game.any?

    respond_to do |format|
      format.json { render json: { playing: playing } }
    end
  end

  def create
    @cards = CardGenerator.new.generate
    respond_to do |format|
      format.json { render json: {
          cards: @cards
        } }
    end
  end
end
