class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    # serialization
    render json: @users, only: [:id, :name], include: :tweets
  end
end
