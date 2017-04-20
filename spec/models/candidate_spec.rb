require 'rails_helper'

describe Candidate, type: :model do
  describe 'validations' do
    it { expect(subject).to validate_presence_of(:first_name) }
    it { expect(subject).to validate_presence_of(:last_name) }
    it { expect(subject).to validate_inclusion_of(:status).in_array(Candidate::STATUS_VALUES) }
  end
end
