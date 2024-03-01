/* eslint-disable camelcase */
import { SCTableRow } from '../style/TableEmployee/TableRow';
import formateDate from '../utils/formateDate';

export type Employee = {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
};

export default function TableRow(props: Readonly<Employee>) {
  const { name, job, admission_date, phone, image } = props;

  return (
    <SCTableRow>
      <td>
        <img src={image} alt={`Foto do(a) ${name}`} />
      </td>
      <td>{name}</td>
      <td>{job}</td>
      <td>{formateDate(admission_date)}</td>
      <td>{phone}</td>
    </SCTableRow>
  );
}
