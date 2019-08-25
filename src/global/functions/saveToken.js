export function saveToken({ accesToken }) {
  console.log(accesToken);
  localStorage.setItem("user", accesToken);
}
