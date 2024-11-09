
import Termekek from "./components/Public/termekek";
import TermekUrlap from "./components/Admin/TermekUrlap";

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h1>Fakestore webáruház</h1>
       
      </header>
      <section className="p-5">
        <TermekUrlap/></section>
      <article>
        <Termekek/>
      </article>
    </div>
  );
}

export default App;
