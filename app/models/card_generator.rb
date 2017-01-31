class CardGenerator
  def initialize
    @words = import_words.shuffle
    @cards = []
  end

  def generate
    nums = (1..25).to_a.shuffle

    8.times do
      @cards << Card.create(word: @words.pop, team: "red", order: nums.pop)
    end

    8.times do
      @cards << Card.create(word: @words.pop, team: "blue", order: nums.pop)
    end

    8.times do
      @cards << Card.create(word: @words.pop, order: nums.pop)
    end

    @cards << Card.create(word: @words.pop, team: ["blue", "red"].sample, order: nums.pop)
  end

  private

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
