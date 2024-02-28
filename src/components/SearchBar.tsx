import Search from '../assets/icons/Search';
import { SCSearchBar } from '../style/SearchBar/SearchBar';

export default function SearchBar() {
  return (
    <SCSearchBar>
      <input type="text" placeholder="Pesquisar" />
      <Search />
    </SCSearchBar>
  );
}
