import logo from '../assets/logo.png';
import { SCHeader } from '../style/Header/Header';

export default function Header() {
  return (
    <SCHeader>
      <img src={logo} alt="" />
    </SCHeader>
  );
}
