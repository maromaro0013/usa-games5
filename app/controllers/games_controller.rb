class GamesController < ApplicationController
  require "hakoirisolver/hakoirisolver"

  def hakoirisolver
  end

  def rescue
    @rescue_level = params["level"]
  end
end
