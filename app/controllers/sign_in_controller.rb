class SignInController < ApplicationController

  CLIENT_ID = ENV['GH_CLIENT_ID']
  CLIENT_SECRET = ENV['GH_CLIENT_SECRET']

  def sign_in
    session[:signed_in] = nil
    session[:access_token] = nil

    @client_id = CLIENT_ID
    @client_secret = CLIENT_SECRET
  end
end
