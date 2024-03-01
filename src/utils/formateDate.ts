export default function formateDate(date: string): string {
  const dt = new Date(date);
  const dia = dt.getUTCDate();
  const mes = dt.getUTCMonth() + 1;
  const ano = dt.getUTCFullYear();

  return `${(dia < 10 ? '0' : '') + dia}/${mes < 10 ? '0' : ''}${mes}/${ano}`;
}
