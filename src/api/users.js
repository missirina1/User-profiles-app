async function getUsers() {
  const res = await fetch('https://dummyjson.com/users?limit=10');
  const data = await res.json();
  return data.users;
}
export default getUsers;
