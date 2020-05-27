class ApplicationController < ActionController::Base
  before_action :define_user, :authenticate

  def authenticate
    if session[:user_id] == nil
      redirect_to '/sign-in'
    end
  end

  def define_user
      @user = User.find_by(id: session[:user_id])
  end
end
