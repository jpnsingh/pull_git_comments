class SignOutController < ApplicationController
  def sign_out
    redirect_to root_path
  end
end
