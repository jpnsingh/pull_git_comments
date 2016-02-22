class AuthController < ApplicationController

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

    session[:access_token] = access_token

    # auth_result = JSON.parse(RestClient.get('https://api.github.com/user', {:params => {:access_token => access_token}}))
    #
    # auth_result['private_emails'] = JSON.parse(RestClient.get('https://api.github.com/user/emails', {:params => {:access_token => access_token}}))
    #
    # @user_email = auth_result['private_emails']

    redirect_to '/dashboard'
  end

end
