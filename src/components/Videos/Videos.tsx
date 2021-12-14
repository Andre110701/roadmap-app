import ReactPlayer from 'react-player'
import { Section } from '../Videos/styleVideos'

/* type VideosType = {
  isCompleted: boolean;
  id: string;
  duration: string;
  url: string;
  description: string;
  videos: VideosType[];
} */
type VideosProps = {
  videoURL: string;
  description: string;
  /* videoId: string; */
  /* videos: VideosType[]; */
}
export default function Video(props: VideosProps) {
  /* const handleClick = (videoId: string) => {
    const newVideo = this.playList.map((video: VideosType) => {
      if (video.id === videoId) return { ...video, isCompleted: !video.isCompleted }

      return video;
    });
  }; */

  return (
    <>
      <Section>
        <h1>{props.description}</h1>
        <ReactPlayer width="500px" height="300px" controls url={props.videoURL} />
        {/* <button onClick={() => handleClick(videos.id)}>Concluído</button> */}
      </Section>
    </>
  )

}

