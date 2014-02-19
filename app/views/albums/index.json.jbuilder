json.array!(@albums) do |album|
  json.extract! album, :id, :icon, :name, :artist, :length
  json.url album_url(album, format: :json)
end
