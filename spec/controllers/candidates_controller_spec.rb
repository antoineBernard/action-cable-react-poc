require 'rails_helper'

RSpec.describe CandidatesController, type: :controller do

  describe "GET edit" do
    let!(:candidates) { create_list(:candidate, 5).sort_by(&:updated_at) }

    render_views

    specify do
      expect { get :index, format: :html }.to make_database_queries(count: 0..1)

      expect(assigns[:candidates_props]).to eq candidates
      expect(response).to render_template(:index)
      expect(response).to be_success
    end
  end

  describe "POST next step" do
    let!(:candidate_to_promote) { create :candidate, status: "to_book" }

    specify do
      expect { post :next_step, params: { candidate_id: candidate_to_promote.id } }
        .to change { candidate_to_promote.reload.status }.from("to_book").to("interview")

      expect(response).to have_http_status(:success)
    end
  end

  describe "POST previous step" do
    let!(:candidate_to_promote) { create :candidate, status: "interview" }

    specify do
      expect { post :previous_step, params: { candidate_id: candidate_to_promote.id } }
        .to change { candidate_to_promote.reload.status }.from("interview").to("to_book")

      expect(response).to have_http_status(:success)
    end
  end
end