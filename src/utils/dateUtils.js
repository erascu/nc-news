export const formattedDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};
