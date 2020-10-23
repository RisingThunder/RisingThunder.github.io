
function LuaExportStart()

	package.path  = package.path..";"..lfs.currentdir().."/LuaSocket/?.lua"
	package.cpath = package.cpath..";"..lfs.currentdir().."/LuaSocket/?.dll"

	socket = require("socket")
	IPAddress = "127.0.0.1"
	Port = 31090

	MySocket = socket.try(socket.connect(IPAddress, Port))
	MySocket:setoption("tcp-nodelay",true) 
end

function LuaExportBeforeNextFrame()
end

function LuaExportAfterNextFrame()

end

function LuaExportActivityNextEvent(t)

	local tNext = t
		local TIME = LoGetModelTime()
		-- "%.0f" displays the data in whole seconds, with no decimals.
		socket.try(MySocket:send(string.format("Time: %.0f \n",TIME)))
		-- The below writes the data in one second intervals.
		tNext = tNext + 1
		return tNext

end

function LuaExportStop()

	if MySocket then 
		socket.try(MySocket:send("exit"))
		MySocket:close()
	end
end
