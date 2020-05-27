class UsersController < ApplicationController
  skip_before_action :authenticate

  def sign_in
  end

  def sign_out
    session[:user_id] = nil
    redirect_to '/sign-in'
  end

  def create
    @user = User.find_by(username: params[:user][:username])
    if @user
      # found the user
      if @user.authenticate(params[:user][:password])
        # user managed to sign in
        session[:user_id] = @user.id
        redirect_to '/random-question'
      else
        # user failed to sign in
        flash[:errors] = ["Password invalid."]
        redirect_to '/sign-in'
      end
    else
      # not found it
      @user = User.create(user_params)
      if @user.valid?
        session[:user_id] = @user.id
        redirect_to '/random-question'
      else
        flash[:errors] = @user.errors.full_messages
        redirect_to '/sign-in'
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
