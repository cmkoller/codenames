require 'rails_helper'

describe Api::V1::PlayersController do
  let!(:red_player) { create(:player, role: :hinter, team: :red) }
  let!(:blue_player) { create(:player, role: :hinter, team: :blue) }
  let(:body) { JSON.parse(response.body) }

  describe "#index" do
    before(:each) { get(:index, format: :json, team: "red") }

    it "returns JSON" do
      expect(response.content_type).to eq "application/json"
    end

    it "returns a 200 status" do
      expect(response.status).to eq 200
    end

    it "returns a list of hinters and guessers" do
      expect(body.keys).to include("hinters")
      expect(body.keys).to include("guessers")
    end

    it "sorts players by role" do
      expect(body["guessers"].length).to eq(0)
      expect(body["hinters"].length).to eq(1)
    end

    it "only returns the players on the specified team" do
      red_player_info = JSON.parse(red_player.to_json)
      blue_player_info = JSON.parse(blue_player.to_json)

      expect(body.values.flatten).to include(JSON.parse(red_player.to_json))
      expect(body.values.flatten).to_not include(JSON.parse(blue_player.to_json))
    end
  end
end
