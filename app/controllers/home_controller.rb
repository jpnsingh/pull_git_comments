class HomeController < ApplicationController

  include HomeHelper

  def dashboard
    if session[:access_token].nil?
      redirect_to root_path
    else
      puts "access_token: " + session[:access_token]
      render 'home/dashboard'
    end
  end

  def about

  end

  def comments
    client = authenticate_user

    @params = pull_request_params
    @selected_pull_request = JSON.parse(@params[:pull])
    @comments = client.issue_comments(@params[:repo], @params[:id])
                    .concat(client.pull_request_comments(@params[:repo], @params[:id])).reverse

    render 'home/pull_request_comments'
  end

  private
  def pull_request_params
    params.require(:pull_request).permit(:repo, :id, :pull)
  end

end
