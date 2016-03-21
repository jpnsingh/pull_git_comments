require 'csv'

module CsvHelper

  def convert_to_csv (headers, comments, selected_pull, options = {})
    CSV.generate(options) do |csv|
      csv << headers
      comments.each do |comment|
        csv << [
            selected_pull["base"]["repo"]["full_name"],
            selected_pull["number"],
            hyperlink(comment.pull_request_url, "View in Github"),
            selected_pull["user"]["login"],
            comment.user.login,
            comment.body,
            hyperlink(comment.html_url, "View in Github"),
            comment.created_at.strftime('%F'),
            comment.created_at.strftime('%T')
        ]
      end
    end
  end

  private
  def hyperlink (url, name)
    "=HYPERLINK(\"#{url}\", \"#{name}\")"
  end
end
