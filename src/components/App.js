import './App.css';
// import Container from 'react-bootstrap/Container';
import NavBarTop from './NavBar/NavBarTop';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // <Container>
    <div id="content">
      <NavBarTop />
      <div id="description">
        <h1>Code School For The Rest Of Us</h1>
        <br />
        {/* <strong><p>About the site:</p></strong> */}
        <p>
          A collection of <strong>free and low-cost resources</strong> for people teaching themselves to code. Resources cover topics such as <span className="descriptionLink">topic1</span>, <span className="descriptionLink">topic2</span>, and <span className="descriptionLink">topic3</span>, and can be searched by category or keyword in the navigation bar above. 
        {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. */}
        </p>
      </div>
      </div>
    // </Container>
  );
}

export default App;
