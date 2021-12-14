import { Component } from 'react'
import Videos from '../Videos/Videos'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPlayList } from '../../actions/playListActions'

type VideoType = {
  id: string;
  duration: string;
  url: string;
  description: string;
}
type PlayListType = {
  moduleId: string;
  name: string;
  videos: VideoType[];
  url: string;
  id: string;
}
type PlayListProps = {
  moduleId: string;
  playList: PlayListType[];
  getPlayList: (moduleId: string) => void;
}


class PlayList extends Component<PlayListProps> {

  componentDidUpdate(prevState: PlayListProps) {
    if (prevState.moduleId !== this.props.moduleId) {
      this.props.getPlayList(this.props.moduleId)
    }
  }
  renderVideos() {

    return this.props.playList.map((item: PlayListType) => {
      return item.videos.map((video: VideoType) => {
        return <div>
          <Videos key={video.id} videoURL={video.url} description={video.description} />
        </div>

      })
    })
  }
  render() {
    return (
      <div>
        {this.renderVideos()}
      </div>
    )
  }
}
const mapStateToProps = (state: any) => (
  {
    playList: state.playListReducer.playList,
    moduleId: state.moduleListReducer.moduleId
  }
)
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ getPlayList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PlayList)