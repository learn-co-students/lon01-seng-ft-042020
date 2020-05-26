class ApplicationController < ActionController::Base
  before_action :define_number_correct

  def define_number_correct
      session[:number_correct] ||= 0
      @number_correct = session[:number_correct]
  end
end
