require 'rails_helper'

describe Api::V1::GamesController do
  let(:body) { JSON.parse(response.body) }

  describe "#index" do
    before(:each) { get(:index) }

    it "returns JSON" do
      expect(response.content_type).to eq "application/json"
    end

    it "returns a 200 status" do
      expect(response.status).to eq(200)
    end

    context "a game is in progress" do
      before(:each) do
        Game.create!
        get(:index)
      end

      it "indicates that a game is being played" do
        expect(body["playing"]).to eq(true)
      end
    end

    context "there is no game in the database" do
      it "indicates that no game is being played" do
        expect(body["playing"]).to eq(false)
      end
    end
  end

  describe "#create" do
    before(:each) { create_list(:word, 25) }

    it "creates a new game" do
      expect{ post :create }.to change{ Game.count }.by(1)
    end

    it "returns 25 cards" do
      post :create

      expect(body["cards"].length).to eq(25)
    end
  end

  describe "#destroy" do
    before(:each) do
      Game.create!
      create_list(:card, 25)
    end

    it "destroys the game from the database" do
      expect{ delete :destroy, id: 1 }.to change{ Game.count }.by(-1)
    end

    it "destroys all cards from the database" do
      expect{ delete :destroy, id: 1 }.to change{ Card.count }.by(-25)
    end
  end
end
