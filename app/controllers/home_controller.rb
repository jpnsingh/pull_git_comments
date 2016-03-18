class HomeController < ApplicationController
  include CommentsHelper

  def dashboard
    if git_access_token.nil?
      redirect_to root_path
    else
      render 'home/dashboard'
    end
  end

  def about

  end

end
