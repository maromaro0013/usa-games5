class GamesController < ApplicationController
  require "hakoirisolver/hakoirisolver"

  def hakoirisolver
    f = params["field_data"]

    solver = HakoiriSolver.new
    solver.set_field_info f["framesize"]["w"].to_i, f["framesize"]["h"].to_i, f["endpoint"]["x"].to_i, f["endpoint"]["y"].to_i

    f["panels"].each {|key, panel|
      case panel["type"]
      when "target"
        type = 1
      else
        type = 0
      end

      solver.add_panel_to_field(panel["x"].to_i, panel["y"].to_i, panel["w"].to_i, panel["h"].to_i, type)
    }


    solver.init_solver
    ret = solver.data_validate

    solver.solve_field

    message = ""
    move_cnt = 0
    move_actions = []

    while (message = solver.pop_message) != "" do
      m = message.to_s.split ","
      move_actions[move_cnt] = {}
      move_actions[move_cnt]["index"] = m[0]
      move_actions[move_cnt]["action"] = m[1]
      move_cnt += 1
    end

    #move_actions = move_actions.reverse
    solver.delete_solver

    render :json => move_actions
  end

  def rescue
    @rescue_level = params["level"]
  end
end
