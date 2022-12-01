export function getTimeOfDay(date: Date): [string, string] {

  let hours = date.getHours();
  let message = "";
  let url = "";
  if (hours < 6) {
    message = "good night";
    url = `${process.env.PUBLIC_URL}/moon.svg`;

  } else if (hours < 12) {
    message = "good morning";
    url = `${process.env.PUBLIC_URL}/sunrise.svg`;
  } else if (hours < 18) {
    message = "good afternoon";
    url = `${process.env.PUBLIC_URL}/sun.svg`;
  } else {
    message = "good evening";
    url = `${process.env.PUBLIC_URL}/evening.svg`;
  }
  return [message, url];
}
