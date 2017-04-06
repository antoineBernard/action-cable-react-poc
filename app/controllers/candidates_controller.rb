class CandidatesController < ApplicationController
  def index
    @candidates_props = Candidate.all.map(&:decorate)
  end
end
