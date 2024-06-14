const user = {
  id: 1,
  username: 'User',
  role: 'user',
  email: 'user@user.com',
  password: 'secret_user'
}

const validLoginBody = { email: 'admin@admin.com', password: 'secret_admin' };
const userRegistered = { ...user, password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'};
const withoutEmail = { email: '', password: 'secret_admin' };
const withoutPassword = { email: 'admin@admin.com', password: '' };
const invalidEmail = { email: 'invalid_email', password: 'secret_user'};
const invalidPassword = { email: 'user@user.com', password: '123'};

const role = {
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
}

export {
  user,
  validLoginBody,
  userRegistered,
  withoutEmail,
  withoutPassword,
  invalidEmail,
  invalidPassword,
  role,
}