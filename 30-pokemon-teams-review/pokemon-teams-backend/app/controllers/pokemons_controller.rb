class PokemonsController < ApplicationController

  def create
    # Create a new Pokemon, using Faker to generate the Nickname and Species. The trainer_id that this Pokemon belongs to will come from the frontend
    @pokemon = Pokemon.create(nickname: Faker::Name.first_name, species: Faker::Games::Pokemon.name, trainer_id: params[:trainer_id])
    # Respond with the newly created Pokemon
    render json: @pokemon
  end

  def destroy
    # Delete the Pokemon with the id we got from the frontend
    Pokemon.destroy(params[:id])
    # Respond with an empty object to signify that the Pokemon has been successfully deleted
    render json: {}
  end
end
