class Api::V1::CardsController < ApplicationController
  def index
    @cards = Card.order(:order)
    respond_to do |format|
      format.json { render json: @cards }
    end
  end

  def update
    @card = Card.find(params["id"])
    @card.update_attributes(card_params)

    Pusher.trigger('cards', 'card_update', {})
    @cards = Card.order(:order)

    respond_to do |format|
      format.json { render json: @cards }
    end
  end

  def card_params
    params.require(:card).permit(:revealed)
  end
end
