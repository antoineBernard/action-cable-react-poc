class CandidatesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @candidates_props = Candidate.all.map(&:decorate)
  end

  def update_status
    candidate = Candidate.find(params[:candidate_id])

    candidate.update_attributes(status: params[:status])
  end
end
