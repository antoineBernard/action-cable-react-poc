class CandidateDecorator < Draper::Decorator
  delegate_all

  def avatar
    male_picto   = ActionController::Base.helpers.asset_path("male.png")
    female_picto = ActionController::Base.helpers.asset_path("female.png")

    model.gender == "female" ? female_picto : male_picto
  end

  def status
    model.status == "to_book" ? "À Rencontrer" : "Entretien"
  end
end
