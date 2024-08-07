import './App.css';
import Router from './Router';
import Header from './components/Header/Header';

function App() {

  // useEffect(() => {
  //   exampleApiCall();
  // }, [])

  // example of talking to the api
  // async function exampleApiCall() {
  //   const result = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/health`)
  //   console.log(result)
  // }


  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
