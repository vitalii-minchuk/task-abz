export const getPositionId = (position: string): string => {
  switch (position) {
    case "Lawyer":
      return "1";
    case "Content manager":
      return "2";
    case "Security":
      return "3";
    case "Designer":
      return "4";
    default:
      return "0";
  }
};

export const getPhoneStr = (str: string): string => {
  const s = str.split("");
  return `${s[0]}${s[1]}${s[2]} (${s[3]}${s[4]}${s[5]}) ${s[6]}${s[7]}${s[8]} ${s[9]}${s[10]} ${s[11]}${s[12]}`;
};

export const phoneMask = (str: string): string => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  if (!numbers.includes(str.substr(-1))) {
    return str.slice(0, -1);
  }
  if (str.length < 6) {
    return `+38 (0${str}`;
  }
  switch (str?.length) {
    case 8:
      return `${str}) `;
    case 13:
      return `${str} - `;
    case 18:
      return `${str} - `;
    case 24:
      return str.slice(0, -1);
    default:
      return str;
  }
};

export const normalizePhone = (str: string | undefined): string => {
  if (!str) return "123";
  return str
    .split(" - ")
    .join("")
    .split(" (")
    .join("")
    .split(") ")
    .join("")
    .slice(0, 13);
};
