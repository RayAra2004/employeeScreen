import Search from '../assets/icons/Search';
import { SCSearchBar } from '../style/SearchBar/SearchBar';

type SearchBarProps = {
  textInput: string;
  setTextInput: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar(props: SearchBarProps) {
  const { textInput, setTextInput } = props;

  return (
    <SCSearchBar>
      <input
        type="text"
        placeholder="Pesquisar"
        value={textInput}
        onChange={e => setTextInput(e.target.value)}
      />
      <Search />
    </SCSearchBar>
  );
}
