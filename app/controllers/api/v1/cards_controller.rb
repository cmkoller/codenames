class Api::V1::CardsController < ApplicationController
  def index
    @cards = Card.order(:order)
    render json: @cards
  end

  def update
    @card = Card.find(params["id"])
    @card.update_attributes(card_params)

    Pusher.trigger('cards', 'card_update', {})
    @cards = Card.order(:order)

    render json: @cards
  end

  def card_params
    params.require(:card).permit(:revealed)
  end
end
