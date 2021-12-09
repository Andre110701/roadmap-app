import ReactPlayer from 'react-player'



type VideoProps = {
  videoURL: string;

}
export default function Video(props: VideoProps) {
  return (
    <ReactPlayer url={props.videoURL} />
  )
}

