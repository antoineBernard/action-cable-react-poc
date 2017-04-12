class CandidateBroadcastJob < ApplicationJob
  queue_as :default

  def perform(*args)
    ActionCable.server.broadcast 'candidate_channel', candidates: Candidate.all.map(&:decorate)
  end
end
