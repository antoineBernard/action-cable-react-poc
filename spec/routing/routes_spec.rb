require 'rails_helper'

RSpec.describe 'routes', type: :routing do
  it { expect(get('/'))          .to route_to 'hello_world#index' }
  it { expect(get('/candidates')).to route_to 'candidates#index' }
  it { expect(post('/previous_step/57')).to route_to 'candidates#previous_step', candidate_id: "57" }
  it { expect(post('/next_step/57'))    .to route_to 'candidates#next_step',     candidate_id: "57" }

  it { expect(candidates_path)       .to eq  '/candidates' }
  it { expect(next_step_path(57))    .to eq '/next_step/57' }
  it { expect(previous_step_path(57)).to eq '/previous_step/57' }
end
