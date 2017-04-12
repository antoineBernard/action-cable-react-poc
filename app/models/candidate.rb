class Candidate < ActiveRecord::Base
  after_commit { CandidateBroadcastJob.perform_later self }

  validates :first_name,  presence: true
  validates :last_name,   presence: true


  STATUS_VALUES = %W(to_book interview)
end