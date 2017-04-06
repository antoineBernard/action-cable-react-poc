class AddStatusToCandidate < ActiveRecord::Migration[5.0]
  def change
    add_column :candidates, :status, :string, index: true, default: false
  end
end
