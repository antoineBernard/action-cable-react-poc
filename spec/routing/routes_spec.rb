require 'rails_helper'

RSpec.describe 'routes', type: :routing do
  it { expect(get('/'))          .to route_to 'hello_world#index' }
  it { expect(get('/candidates')).to route_to 'candidates#index' }

  it { expect(post('/update_status/57/interview')).to route_to 'candidates#update_status', candidate_id: '57', status: 'interview' }

  it { expect(candidates_path)      .to eq  '/candidates' }
  it { expect(update_status_path(57, 'interview')).to eq  '/update_status/57/interview' }
end
