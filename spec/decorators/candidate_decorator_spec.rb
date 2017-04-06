require 'rails_helper'

describe CandidateDecorator do
  describe "#avatar" do
    let(:picto_male)   { ActionController::Base.helpers.asset_path("male.png") }
    let(:picto_female) { ActionController::Base.helpers.asset_path("female.png") }

    context "with male" do
      let(:candidate) { build(:candidate, gender: "male").decorate }

      it { expect(candidate.avatar).to eq picto_male }
    end

    context "with female" do
      let(:candidate) { build(:candidate, gender: "female").decorate }

      it { expect(candidate.avatar).to eq picto_female }
    end

    context "without gender (weird?)" do
      let(:candidate) { build(:candidate, gender: nil).decorate }

      it { expect(candidate.avatar).to eq picto_male }
    end
  end


  describe "#status" do
    context "is to_book" do
      let(:candidate) { build(:candidate, status: "to_book").decorate }

      it { expect(candidate.status).to eq "À Rencontrer" }
    end

    context "is interview" do
      let(:candidate) { build(:candidate, status: "interview").decorate }

      it { expect(candidate.status).to eq "Entretien" }
    end
  end
end
