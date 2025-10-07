import React from "react";

function VideoEach({ link,text }) {
  return (
    <div className="flex-shrink-0 flex flex-col justify-end h-[200px] w-[200px] rounded-xl bg-cover bg-center p-4"
         style={{ backgroundImage: `url(${link})` }}>
            <p className="text-md font-semibold">{text}</p>
    </div>
  );
}

export default VideoEach;