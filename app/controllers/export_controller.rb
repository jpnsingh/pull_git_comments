require 'rest-client'

class ExportController < ApplicationController
  include CommentsHelper
  include CsvHelper

  def show
    org = params[:org]
    repo = params[:repo]

    @selected_repo = "#{org}/#{repo}"
  end

  def export
    org = params[:org]
    repo = params[:repo]
    @pull_id = params[:id]
    @repo_full_name = "#{org}/#{repo}"
    filename = "#{org}-#{repo}-#{@pull_id}"

    comments = get_comments(@repo_full_name, @pull_id)

    selected_pull = JSON.parse(RestClient.get("https://api.github.com/repos/#{org}/#{repo}/pulls/#{@pull_id}",
                                              {:params => {:access_token => session[:access_token]}}))

    respond_to do |format|
      format.html
      format.csv { send_data convert_to_csv(column_headers, comments, selected_pull), filename: filename + ".csv" }
      format.xls { send_data convert_to_csv(column_headers, comments, selected_pull, col_sep: "\t"), filename: filename + ".xls" }
    end
  end

  def export_range
    org = params[:org]
    repo = params[:repo]
    @pull_from = params[:from]
    @pull_to = params[:to]
    @repo_full_name = "#{org}/#{repo}"
    filename = "#{org}-#{repo}-#{@pull_from}-#{@pull_to}"

    comments = get_comments_for_range(@repo_full_name, @pull_from, @pull_to)

    puts comments

    respond_to do |format|
      format.html
      format.csv { send_data convert_to_csv(column_headers, comments, []), filename: filename + ".csv" }
      format.xls { send_data convert_to_csv(column_headers, comments, [], col_sep: "\t"), filename: filename + ".xls" }
    end
  end

  private
  def column_headers
    ['Repository', 'Pull Id', 'Github url', 'Developer', 'Reviewer', 'Review Comment', 'Github url', 'Date', 'Time']
  end

end
