import { createContext, useMemo, useContext } from "react";
import io from "socket.io-client";
// import { server } from "./constants/config";

const SocketContext = createContext();

const getSocket = () => useContext(SocketContext);

cconst SocketProvider = ({ children }) => {
  const socket = useMemo(
    () =>
      io("https://minimalist-chat-app-server.onrender.com", {
        withCredentials: true,
        transports: ["websocket"], // Force WebSocket transport
      }),
    []
  );

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { SocketProvider, getSocket };
