import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TableHeader from './components/TableHeader';
import { SCApp, SCDivSearch } from './style/App/App';

function App() {
  return (
    <SCApp>
      <Header />
      <main>
        <SCDivSearch>
          <h1>Funcionários</h1>
          <SearchBar />
        </SCDivSearch>
        <table>
          <TableHeader />
        </table>
      </main>
    </SCApp>
  );
}

export default App;
