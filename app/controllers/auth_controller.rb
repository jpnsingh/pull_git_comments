require 'rest-client'

class AuthController < ApplicationController

  def authorize
    session_code = params[:code]

    access_token_response = RestClient
                                .post(GIT_CONFIG["access_token_url"],
                                      {
                                          :client_id => GIT_CONFIG["client_id"],
                                          :client_secret => GIT_CONFIG["client_secret"],
                                          :code => session_code
                                      },
                                      :accept => :json)

    access_token = JSON.parse(access_token_response)['access_token']

    session[:signed_in] = true
    session[:access_token] = access_token

    redirect_to '/dashboard'
  end

end
