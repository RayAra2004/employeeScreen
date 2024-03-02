import { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TableHeader from './components/TableHeader';
import TableRow, { Employee } from './components/TableRow';
import { SCApp, SCDivSearch } from './style/App/App';
import api from './services/api';

function App() {
  const [employees, setEmployees] = useState<Employee[] | undefined>(undefined);
  const [employeesSurveyed, setEmployeesSurveyed] = useState<
    Employee[] | undefined
  >(undefined);
  const [textInput, setTextInput] = useState<string>('');

  useEffect(() => {
    api
      .get('/employees')
      .then(response => {
        setEmployees(response.data);
        setEmployeesSurveyed(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const searchResult = employees?.filter(employee => {
      const searchLowerCase = textInput?.toLowerCase().trim();
      return (
        employee.name.toLowerCase().includes(searchLowerCase) ||
        employee.job.toLowerCase().includes(searchLowerCase) ||
        employee.phone.toLowerCase().includes(searchLowerCase)
      );
    });

    setEmployeesSurveyed(searchResult);
  }, [textInput]);
  return (
    <SCApp>
      <Header />
      <main>
        <SCDivSearch>
          <h1>Funcionários</h1>
          <SearchBar textInput={textInput} setTextInput={setTextInput} />
        </SCDivSearch>
        <table>
          <TableHeader />
          <tbody>
            {employeesSurveyed?.map(employee => (
              <TableRow key={employee.id} {...employee} />
            ))}
          </tbody>
        </table>
      </main>
    </SCApp>
  );
}

export default App;
