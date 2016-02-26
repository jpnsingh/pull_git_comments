class ExportController < ApplicationController
  include CommentsHelper
  include CsvHelper

  def export
    org = params[:org]
    repo = params[:repo]
    @pull_id = params[:id]
    @repo_full_name = "#{org}/#{repo}"
    filename = "#{org}-#{repo}-#{@pull_id}"

    comments = get_comments(@repo_full_name, @pull_id)

    # mappers = [
    #     @repo_full_name,
    #     @pull_id,
    #     comment.user.login,
    #     comment.user.login,
    #     comment.body,
    #     comment.created_at.strftime('%F'),
    #     comment.created_at.strftime('%T')
    # ]

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