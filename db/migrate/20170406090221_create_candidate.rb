class CreateCandidate < ActiveRecord::Migration[5.0]
  def change
    create_table :candidates do |t|
      t.string :first_name
      t.string :last_name
      t.string :job_title
      t.float  :average_rate
      t.string :gender

      t.timestamps
    end
  end
end
