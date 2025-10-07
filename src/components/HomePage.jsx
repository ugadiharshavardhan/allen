import NavBar from "./ui/NavBar";
import Carousel from "./ui/Courosel";
import Banner2 from "./ui/Courosel1";
import RightCourse from "./ui/RightCourse";
import TrendingCourse from "./ui/TrendingCourse";
import CoursesRecommended from "./ui/CoursesRecommended";
import Results from "./ui/Results";
import Trending from "./ui/Trending";
import OurChampions from "./ui/OurChampions";
import SuccessStoriesVideos from "./ui/SuccessStoriesVideos";
import TestimalsFromStudents from "./ui/TestimalsFromStudents";
import FormMain from "./ui/FormMain";
import PlayStroe from "./ui/PlayStroe";

function HomePage() {
  return (
    <>
        <NavBar />
        <Carousel />
        <RightCourse />
        <TrendingCourse />
        <CoursesRecommended />
        <Banner2 />
        <Results />
        <Trending />
        <OurChampions />
        <SuccessStoriesVideos />
        <TestimalsFromStudents />
        <FormMain />
        <PlayStroe />
    </>
  )
}

export default HomePage
