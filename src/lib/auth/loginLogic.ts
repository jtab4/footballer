import axios from 'axios';

interface LoginResponse {
  authorized: boolean;
  token?: string;
  message?: string;
}

export async function login(email: string | null, password: string | null): Promise<LoginResponse> {
  try {
    const response = await axios.post('http://localhost:3008/auth/login', {
      email,
      password,
    });

    return {
      authorized: true,
      token: response.data.access_token,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        authorized: false,
        message: error.response?.data?.message || 'Error logging in',
      };
    } else {
      return {
        authorized: false,
        message: 'Unexpected error',
      };
    }
  }
}
