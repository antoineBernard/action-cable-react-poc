class CandidatesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @candidates_props = Candidate.all.map(&:decorate)
  end

  def next_step
    candidate = Candidate.find(params[:candidate_id])
    values   = Candidate::STATUS_VALUES
    new_index = values.find_index(candidate.status) + 1

    candidate.update_attributes(status: values[new_index]) unless new_index > values.length
  end


  def previous_step
    candidate = Candidate.find(params[:candidate_id])
    values    = Candidate::STATUS_VALUES
    new_index = values.find_index(candidate.status) - 1

    candidate.update_attributes(status: values[new_index]) unless new_index < 0
  end
end
