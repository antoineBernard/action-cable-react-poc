class CandidateChannel < ApplicationCable::Channel
  def subscribed
    stream_from "candidate_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def next_step(data)
    ActionCable.server.broadcast "candidate_channel", candidate: data['candidate']
  end
end
