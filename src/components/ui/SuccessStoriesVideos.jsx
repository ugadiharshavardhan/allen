import React from "react";
import VideoEach from "../otherComponents/VideoEach";

function SuccessStoriesVideos() {
  return (
    <div className="flex justify-center items-center pb-5">
      <div className="flex flex-col">
        <img src="https://thumbs.dreamstime.com/b/video-camera-icon-vector-isolated-white-background-your-web-mobile-app-design-video-camera-logo-concept-video-camera-134068975.jpg" className="h-20 w-30" />
        <h1 className="font-bold text-xl">Success <br/> Stories</h1>
        <p>Students who <br/> inspires us!</p>
      </div>
      <div className="w-3/5 overflow-x-auto flex flex-nowrap gap-4 p-4">
        <VideoEach text={"No shortcuts! From AIR 27,249 to AIR 1,341"} link="https://img.jagranjosh.com/imported/images/E/Articles/ALLEN-Career-Institute-images-2.webp" />
        <VideoEach text={"Laser sharp focus led him to success"} link="https://pbs.twimg.com/media/D8_8fe4U0AEhX5A.jpg" />
        <VideoEach text={"Debater. Flute player. IITian. He did it all!"} link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ptb_usRfZFuXEFgd7b73JRt6aoSxFeVv-Q&s" />
        <VideoEach text={"Never a topper kid. But now an IITian!"} link="https://images.bhaskarassets.com/web2images/521/2024/07/27/12_172201707866a3e5360df3d_04.jpg" />
        <VideoEach text={"0% shortcut. 100% discipline"} link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD0f2oRo12w2DgrxikW2WWlb2mUB17Z4MkJqLUCUrCRvfm_vEBgbc9Ez53wSUDdn66QAU&usqp=CAU" />
        <VideoEach text={"Laser sharp focus led him to success"} link="https://myexam.allen.in/wp-content/uploads/2022/09/ALLEN-NEET-UG-Tanisha-AIR1-thegem-blog-timeline-large.jpg" />
        <VideoEach text={"No shortcuts! From AIR 27,249 to AIR 1,341"} link="https://img.jagranjosh.com/imported/images/E/Articles/ALLEN-Career-Institute-images-2.webp" />
        <VideoEach text={"Laser sharp focus led him to success"} link="https://pbs.twimg.com/media/D8_8fe4U0AEhX5A.jpg" />
        <VideoEach text={"Debater. Flute player. IITian. He did it all!"} link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ptb_usRfZFuXEFgd7b73JRt6aoSxFeVv-Q&s" />
        <VideoEach text={"Never a topper kid. But now an IITian!"} link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD0f2oRo12w2DgrxikW2WWlb2mUB17Z4MkJqLUCUrCRvfm_vEBgbc9Ez53wSUDdn66QAU&usqp=CAU" />
        <VideoEach text={"0% shortcut. 100% discipline"} link="https://images.bhaskarassets.com/web2images/521/2024/07/27/12_172201707866a3e5360df3d_04.jpg" />
        <VideoEach text={"Laser sharp focus led him to success"} link="https://myexam.allen.in/wp-content/uploads/2022/09/ALLEN-NEET-UG-Tanisha-AIR1-thegem-blog-timeline-large.jpg" />
      </div>
    </div>
  );
}

export default SuccessStoriesVideos;