import './App.css';
import Header from './components/Header';
import lordKrishna from './assets/lord-krishna.png'
import { StyledBanner, StyledTopWrapper } from './components/style';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <StyledTopWrapper>
      <Header />
      <StyledBanner src={lordKrishna} />
      </StyledTopWrapper>
      <Body />
    </div>
  );
}

export default App;
