import { Component } from 'react'
import Videos from '../Videos/Videos'
import { List } from '../Playlist/style'
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
  render() {
    const playList = this.props.playList || [];
    return (

      <div>
        <List>
          {playList.length > 0 ?
            <ul>
              {playList.map((playList: PlayListType, index) => (
                <li key={playList.id} >
                  {playList.name}
                  <Videos videoURL={playList.videos[index].url} />
                </li>
              ))}
            </ul>

            : false
          }
        </List>
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