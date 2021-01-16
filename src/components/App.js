import './App.css';
import NavBarTop from './NavBar/NavBarTop';
import ResourceCard from './ResourceCard/ResourceCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div id="content">
      <NavBarTop />
      <div id="description">
        <h1>Code School For The Rest Of Us</h1>
        <br />
        <p>
          A collection of <strong>free and low-cost resources</strong> for people teaching themselves to code. Resources cover topics such as <span className="descriptionLink">topic1</span>, <span className="descriptionLink">topic2</span>, and <span className="descriptionLink">topic3</span>, and can be searched by category or keyword in the navigation bar above. 
        </p>
      </div>
      <div id="Cards">
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
      </div>
    </div>
  );
}

export default App;
