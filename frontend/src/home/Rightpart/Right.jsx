import React from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";

function Right() {
  return (
    <div className="w-[70%] bg-slate-900 text-gray-300">
      <Chatuser />
      <div
        className="no-scrollbar overflow-y-auto"
        style={{ maxHeight: "calc(92vh - 8vh)" }}
      >
        <Messages />
      </div>
      <Typesend />
    </div>
  );
}

export default Right;
