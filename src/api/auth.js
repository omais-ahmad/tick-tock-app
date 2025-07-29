export const login = async (email, password) => {
  if (email === 'test@example.com' && password === 'password123') {
    return {
      token: 'mock-token',
      user: { name: 'Test User', email },
    };
  } else {
    throw new Error('Invalid credentials');
  }
};
