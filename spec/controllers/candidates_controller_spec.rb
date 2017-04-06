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
end