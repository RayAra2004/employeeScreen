import { SCTableHeader } from '../style/TableHeader/TableHeader';

export default function TableHeader() {
  return (
    <SCTableHeader>
      <tr>
        <th>FOTO</th>
        <th>NOME</th>
        <th className="mobile little-ball">•</th>
        <th className="web">CARGO</th>
        <th className="web">DATA DE ADMISSÃO</th>
        <th className="web">TELEFONE</th>
      </tr>
    </SCTableHeader>
  );
}
