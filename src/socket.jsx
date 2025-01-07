import { createContext, useMemo, useContext } from "react";
import io from "socket.io-client";

const SocketContext = createContext();

const getSocket = () => useContext(SocketContext);

const SocketProvider = ({ children }) => {
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
