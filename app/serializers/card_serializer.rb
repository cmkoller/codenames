class CardSerializer < ActiveModel::Serializer
  attributes :id, :word, :team, :revealed, :assassin, :order

  def word
    object.word.text
  end
end
