local log_file = nil

	function LuaExportStart()
		log_file = io.open("C:/Users/George/Documents/Web Page Projects/rising-thunder-alpha-test/data/dcs-time.txt", "w")

	end

	function LuaExportBeforeNextFrame()
	end

	function LuaExportAfterNextFrame()
		
	end

	function LuaExportActivityNextEvent(t)
		local tNext = t
		local TIME = LoGetModelTime()
		log_file:write(string.format("Time: %.0f \n",TIME))
		tNext = tNext + 6
		return tNext
	end
	
	function LuaExportStop()
		log_file:write(string.format("EXIT"))
		if log_file then
			log_file:close()
			log_file = nil
		end
	end