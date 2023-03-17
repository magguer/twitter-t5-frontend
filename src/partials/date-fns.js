import { formatDistance } from "date-fns";

export function formatDateDistance(date) {
  return formatDistance(new Date(), date, { addSuffix: true });
}
