import {
  format,
  formatDistanceToNow as dateFNSFormatDistanceToNow,
} from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDateTime(rawDate: string): string {
  const date = new Date(rawDate);

  return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
    locale: ptBR,
  });
}

export function formatDistanceToNow(rawDate: string): string {
  const date = new Date(rawDate);

  return dateFNSFormatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}
