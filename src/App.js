import './App.css'
import Card from './components/card/Card';
import CardList from './components/card/CardList';


function App() {

  //render DOM
  return (
    <CardList>
      <Card secondary fontSize = '30px'></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </CardList>
  );
}

export default App;
