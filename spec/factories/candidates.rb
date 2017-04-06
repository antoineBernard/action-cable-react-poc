FactoryGirl.define do
  factory :candidate do
    first_name      { FFaker::Name.first_name }
    last_name       { FFaker::Name.last_name }
    job_title       { FFaker::Job.title }
    average_rate    { rand(0.1..5).round(1) }
    gender          { %w(male female).sample }
    status          { Candidate::STATUS_VALUES.sample}
  end
end
