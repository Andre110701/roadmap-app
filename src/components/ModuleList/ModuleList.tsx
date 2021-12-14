import { Component } from 'react'
import { getModulesList, setModuleId } from '../../actions/moduleListActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Models, List } from '../ModuleList/ModuleStyle'

type ModuleType = {
  id: string;
  name: string;
}

type ModuleListProps = {
  getModulesList: () => void;
  modulesList: ModuleType[];
  setModuleId: (moduleId: string) => void;
}

class ModuleList extends Component<ModuleListProps> {

  componentDidMount() {
    this.props.getModulesList()
  }

  handleClick(id: string) {
    console.log("cliquei", id)
    this.props.setModuleId(id)
  }
  render() {
    const modulesList = this.props.modulesList || []
    console.log(modulesList)
    return (

      <div>
        {modulesList.length > 0 ?
          <List>
            <ul>
              {modulesList.map((module: ModuleType) => (
                <Models key={module.id}>
                  <li onClick={() => this.handleClick(module.id)}>
                    {module.name}
                  </li>
                </Models>
              ))}
            </ul>
          </List>
          : false
        }
      </div>
    )
  }
}

const mapStateToProps = (state: any) => (
  {
    modulesList: state.moduleListReducer.modulesList,
    moduleId: state.moduleListReducer.moduleId
  }
)

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ getModulesList, setModuleId }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ModuleList)