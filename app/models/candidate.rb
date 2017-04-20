class Candidate < ActiveRecord::Base
  after_commit { CandidateBroadcastJob.perform_later self }

  STATUS_VALUES = %W(to_book interview)

  validates :first_name,  presence: true
  validates :last_name,   presence: true
  validates :status,      presence: true, inclusion: { in: STATUS_VALUES }
end