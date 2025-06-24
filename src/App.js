import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import { action,orginal,comedy } from "./Components/RowPost/url";
function App() {
  return (
    <div className="App">
      <NavBar/>
     <Banner/>
     <RowPost url={orginal}title='Netflix Orginals'/> 
     <RowPost url={action} title='Action movies' isSmall /> 
     <RowPost url={comedy} title='Comedy movies' istoSmall /> 
    </div>
  );
}

export default App;
