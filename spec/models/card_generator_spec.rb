require 'rails_helper'

describe CardGenerator do
  describe "#new" do
    context "there are too few words in the database" do
      it "raises an error" do
        expect{ CardGenerator.new }.to raise_error(CardGenerator::InsufficientWordsError)
      end
    end

    context "there are enough words in the database" do
      before(:each) { create_list(:word, 25) }

      it "selects 25 words" do
        expect(CardGenerator.new.words.length).to eq(25)
      end
    end
  end

  describe "#generate" do
    before(:each) { create_list(:word, 25) }
    let!(:generator) { CardGenerator.new }

    it "creates 25 cards" do
      expect{ generator.generate }.to change{ Card.count }.by(25)
    end

    it "creates 8 to 9 red cards" do
      generator.generate

      red_cards = Card.where(team: "red")
      expect(red_cards.length).to be_between(8, 9)
    end

    it "creates 8 to 9 blue cards" do
      generator.generate

      blue_cards = Card.where(team: "blue")
      expect(blue_cards.length).to be_between(8, 9)
    end

    it "creates 7 neutral cards" do
      generator.generate

      neutral_cards = Card.where(team: nil, assassin: false)
      expect(neutral_cards.length).to eq(7)
    end

    it "creates 1 assassin card" do
      generator.generate

      blue_cards = Card.where(assassin: true)
      expect(blue_cards.length).to eq(1)
    end

    it "returns the list of cards" do
      cards = generator.generate
      expect(cards.length).to eq(25)
      expect(cards.first).to be_a(Card)
    end
  end
end
