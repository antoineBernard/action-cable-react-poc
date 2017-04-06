class Candidate < ActiveRecord::Base
  validates :first_name,  presence: true
  validates :last_name,   presence: true


  STATUS_VALUES = %W(to_book interview)
end