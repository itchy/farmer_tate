class GamesController < ApplicationController

  def round_up
    render text: "This will be the round up game"
  end

  def milk_cow
    render text: "This will be the cow milking game"
  end

  def horse_ride
    render text: "This will be the horse riding game"
  end

  def feed_animals
  end

  def exercise_pigs
    render text: "This will be the pig exercise riding game"
  end

  def vet
    render text: "This will be the place to visit the vet"
  end

end