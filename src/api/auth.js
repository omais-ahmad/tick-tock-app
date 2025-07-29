export const login = async (email, password) => {

  const mockUser = {
    email: 'omais@gmail.com',
    password: '123',
    name: 'Omais Ahmed',
    token: 'mock-token-abc123'
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === mockUser.email && password === mockUser.password) {
        resolve({
          token: mockUser.token,
          user: { name: mockUser.name, email: mockUser.email },
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 500);
  });

};
