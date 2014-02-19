class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :icon
      t.string :name
      t.string :artist
      t.integer :length

      t.timestamps
    end
  end
end
