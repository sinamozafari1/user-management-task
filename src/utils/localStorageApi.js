const USERS_KEY = 'users';

export function getUsers() {
  return Promise.resolve(JSON.parse(localStorage.getItem(USERS_KEY)) || []);
}

export function addUser(user) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  user.id = Date.now();
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return Promise.resolve(user);
}

export function updateUser(updatedUser) {
  let users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  users = users.map(u => u.id === updatedUser.id ? updatedUser : u);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return Promise.resolve(updatedUser);
}

export function deleteUser(id) {
  let users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  users = users.filter(u => u.id !== id);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return Promise.resolve();
}