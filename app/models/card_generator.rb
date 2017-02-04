class CardGenerator
  def initialize
    @words = []
    @cards = []
    @nums = (1..25).to_a.shuffle

    select_words
  end

  def generate
    create_red_cards
    create_blue_cards
    create_neutral_cards
    create_assassin_card
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
    7.times do
      @cards << Card.create(word: @words.pop, order: @nums.pop)
    end
  end

  def create_assassin_card
    @cards << Card.create(word: @words.pop, order: @nums.pop, assassin: true)
  end

  def create_flip_card
    @cards << Card.create(word: @words.pop, team: ["blue", "red"].sample, order: @nums.pop)
  end

  def select_words
    while @words.length < 25
      word = Word.offset(rand(Word.count)).first
      @words << word
      @words.uniq!
    end

    @words.shuffle!
  end
end
