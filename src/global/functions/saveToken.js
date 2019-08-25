export function saveToken({ accesToken }) {
  localStorage.setItem("user", accesToken);
}
