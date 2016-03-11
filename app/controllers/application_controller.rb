class ApplicationController < ActionController::Base

  before_filter :force_expire
  before_filter :authenticate_token
  before_filter :authenticate_user


  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def force_expire

  end

  def authenticate_token

  end

  def authenticate_user

  end

end
