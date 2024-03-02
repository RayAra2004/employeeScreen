// @ts-expect-error error finding file
import logo from '../assets/png/logo.png';
import { SCHeader } from '../style/Header/Header';

export default function Header() {
  return (
    <SCHeader>
      <img src={logo} alt="" />
    </SCHeader>
  );
}
