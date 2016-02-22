class SignOutController < ApplicationController
  def sign_out
    session[:access_token] = nil

    redirect_to root_path
  end
end
