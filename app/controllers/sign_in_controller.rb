class SignInController < ApplicationController

  def sign_in
    session[:signed_in] = nil
    session[:access_token] = nil

    @client_id = GIT_CONFIG["client_id"]
  end

end
