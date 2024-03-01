import { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TableHeader from './components/TableHeader';
import TableRow, { Employee } from './components/TableRow';
import { SCApp, SCDivSearch } from './style/App/App';
import api from './services/api';

function App() {
  const [employees, setEmployees] = useState<Employee[] | undefined>(undefined);

  useEffect(() => {
    api
      .get('/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
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
          <tbody>
            {employees?.map(employee => (
              <TableRow key={employee.id} {...employee} />
            ))}
          </tbody>
        </table>
      </main>
    </SCApp>
  );
}

export default App;
