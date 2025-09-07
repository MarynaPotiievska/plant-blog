export function getSizeByCategory(category) {
  switch (category) {
    case "new":
      return "large";
    case "top":
      return "middle";
    default:
      return "small";
  }
}