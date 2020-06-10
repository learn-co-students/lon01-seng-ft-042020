class TrainersController < ApplicationController

  # INDEX
  def index
    # Get all trainers
    @trainers = Trainer.all
    # Respond with all trainers, including all the Pokemon that belong to them
    render json: @trainers, include: :pokemons
  end
end
