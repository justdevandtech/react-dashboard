import 'bootstrap/dist/css/bootstrap.min.css';
import { Counter } from './features/counter/Counter';
import './App.css';
import { SidebarMenu } from './components/sidebarMenu/SidebarMenu';
import { MainContainer } from './components/mainContainer/MainContainer';

function App() {
  return (
    <div className="App">
     <SidebarMenu/>
      <MainContainer/>
    </div>
  );
}

export default App;
