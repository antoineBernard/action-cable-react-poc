require 'rails_helper'

RSpec.describe CandidatesController, type: :controller do

  describe "GET index" do
    let!(:candidates) { create_list(:candidate, 5).sort_by(&:updated_at) }

    render_views

    specify do
      # expect { get :index, format: :html }.to make_database_queries(count: 0..1)
      get :index, format: :html
      expect(assigns[:candidates_props]).to eq candidates
      expect(response).to render_template(:index)
      expect(response).to be_success

    end
  end

  describe "POST update_status" do
    let!(:candidate_to_promote) { create :candidate, status: "to_book" }

    specify do
      expect { post :update_status, params: { candidate_id: candidate_to_promote.id , status: 'interview' } }
        .to change { candidate_to_promote.reload.status }.from("to_book").to("interview")

      expect(response).to have_http_status(:success)
    end
  end
end