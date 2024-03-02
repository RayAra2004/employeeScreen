/* eslint-disable camelcase */
import { useState } from 'react';
import ArrowDown from '../assets/icons/ArrowDown';
import {
  SCInformationsEmployee,
  SCTableRow,
} from '../style/TableEmployee/TableRow';
import formateDate from '../utils/formateDate';
import formatePhone from '../utils/formatePhone';
import ArrowUp from '../assets/icons/ArrowUp';

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
  const [openInformations, setOpenInformations] = useState<boolean>(false);

  function openCloseInformations() {
    setOpenInformations(prevValue => !prevValue);
  }
  return (
    <>
      <SCTableRow openInformations={openInformations}>
        <td>
          <img src={image} alt={`Foto do(a) ${name}`} />
        </td>
        <td>{name}</td>
        <td className="mobile">
          <button type="button" onClick={() => openCloseInformations()}>
            {!openInformations && <ArrowDown />}

            {openInformations && <ArrowUp />}
          </button>
        </td>
        <td className="web">{job}</td>
        <td className="web">{formateDate(admission_date)}</td>
        <td className="web">{formatePhone(phone)}</td>
      </SCTableRow>
      {openInformations && (
        <SCInformationsEmployee>
          <td colSpan={3}>
            <div>
              <p>Cargo</p>
              <span>{job}</span>
            </div>
            <div>
              <p>Data de admissão</p>
              <span>{formateDate(admission_date)}</span>
            </div>
            <div>
              <p>Telefone</p>
              <span>{formatePhone(phone)}</span>
            </div>
          </td>
        </SCInformationsEmployee>
      )}
    </>
  );
}
