class CardGenerator
  def initialize
    @words = import_words.shuffle
    @cards = []
    @nums = (1..25).to_a.shuffle
  end

  def generate
    create_red_cards
    create_blue_cards
    create_neutral_cards
    create_flip_card
  end

  private

  def create_red_cards
    8.times do
      @cards << Card.create(word: @words.pop, team: "red", order: @nums.pop)
    end
  end

  def create_blue_cards
    8.times do
      @cards << Card.create(word: @words.pop, team: "blue", order: @nums.pop)
    end
  end

  def create_neutral_cards
    8.times do
      @cards << Card.create(word: @words.pop, order: @nums.pop)
    end
  end

  def create_flip_card
    @cards << Card.create(word: @words.pop, team: ["blue", "red"].sample, order: @nums.pop)
  end

  def import_words
    [
      "Buttstuff",
      "Mario",
      "Lamp",
      "Lump",
      "Garbage",
      "Bouldering",
      "Australia",
      "Crevice",
      "Astronaut",
      "Record",
      "Fireball",
      "Parkour",
      "Australopithecus",
      "Monkey",
      "Fblthp",
      "Astr",
      "Lance",
      "Bubble",
      "Link",
      "Falcon",
      "Gamecube",
      "Panda",
      "Pokemon",
      "Luigi",
      "Wizard"
    ]
  end
end
