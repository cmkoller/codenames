require 'rails_helper'

describe Api::V1::CardsController do
  let(:body) { JSON.parse(response.body) }

  describe "#index" do
    let!(:card_1) { create(:card) }
    let!(:card_2) { create(:card) }

    before(:each) { get(:index) }

    it "returns JSON" do
      expect(response.content_type).to eq "application/json"
    end

    it "returns a 200 status" do
      expect(response.status).to eq(200)
    end

    it "returns a list of cards" do
      expect(body.length).to eq(2)

      ids = body.map { |c| c["id"] }
      expect(ids).to include(card_1.id)
      expect(ids).to include(card_2.id)
    end
  end

  describe "#update" do
    let!(:card) { create(:card) }

    it "returns success when provided valid params" do
      post :update, id: card.id, card: { revealed: true }

      expect(response.status).to eq(200)
      expect(card.reload.revealed).to eq(true)
    end
  end
end
