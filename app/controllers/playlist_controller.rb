class PlaylistController < ApplicationController
  def index
    @albums = Album.all
    @playlist = (session[:playlist] ||= [])
  end

  def add
    session[:playlist] << params[:name]
    session[:playlist].uniq!
    render json: session[:playlist].to_json
  end
end
