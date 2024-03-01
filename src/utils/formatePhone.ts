export default function formatePhone(phone: string): string {
  return `+ ${phone.substring(0, 2)} (${phone.substring(2, 4)}) ${phone.substring(4, 9)}-${phone.substring(9)}`;
}
