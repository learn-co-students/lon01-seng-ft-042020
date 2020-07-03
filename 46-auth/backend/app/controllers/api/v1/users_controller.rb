class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def index
    @users = []
    User.all.each do |user|
      if current_user.id == user.id
        @users << user
      else
        @users << UserSerializer.new(user)
      end
    end
    render json: { users: @users }
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token(user_id: @user.id, username: @user.username)
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: "failed to create user" }, status: :not_acceptable
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
