class PlayersController < ApplicationController
  def index
    render json: Player.all, include: :comments
  end

  def edit
    player = Player.find_by(id: params[:id])
    
    if player
      player.update(player_params)
      render json: player
    else
      render json: { error: 'Player not found.' }, status: 404
    end
  end

  private

  def player_params
    params.require(:player).permit([:score, :image, :name])
  end

end