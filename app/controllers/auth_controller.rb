class AuthController < ApplicationController
  require 'rest-client'

  CLIENT_ID = ENV['GH_CLIENT_ID']
  CLIENT_SECRET = ENV['GH_CLIENT_SECRET']

  def index
    @client_id = CLIENT_ID
    @client_secret = CLIENT_SECRET
  end

  def authorize
    session_code = params[:code]

    access_token_response = RestClient
                                .post('https://github.com/login/oauth/access_token',
                                      {:client_id => CLIENT_ID, :client_secret => CLIENT_SECRET, :code => session_code},
                                      :accept => :json)

    access_token = JSON.parse(access_token_response)['access_token']

    session[:signed_in] = true
    session[:access_token] = access_token

    redirect_to '/dashboard'
  end

end
