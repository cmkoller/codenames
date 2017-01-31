class CardsController < ApplicationController
  def index
    @cards = Card.order(:order)
    respond_to do |format|
      format.json { render json: {
          cards: @cards
        } }
    end
  end

  def update
    @card = Card.find(params["id"])
    @card.update_attributes(card_params)

    Pusher.trigger('cards', 'card_update', {})

    respond_to do |format|
      format.json { render json: { card: Cards.order(:order) }.to_json }
    end
  end

  def card_params
    params.require(:card).permit()
  end
end
