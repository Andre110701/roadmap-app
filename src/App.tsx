import ModuleList from './components/ModuleList/ModuleList';
import PlayList from './components/Playlist/PlayList';
import { Body, Section, Article } from './styles';

export default function App() {

  return (
    <>
      <Body>
        <Section>
          <h1>ROADMAP</h1>
          <ModuleList />
        </Section>
        <Article>
          <PlayList />
        </Article>
      </Body>
    </>
  );
};




