import axios from 'axios';

interface RegisterResponse {
  registered: boolean;
  message?: string;
}

export async function register(email: string | null, password: string | null): Promise<RegisterResponse> {
  try {
    const response = await axios.post('http://localhost:3008/auth/register', {
      email,
      password,
    });

    return {
      registered: true,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        registered: false,
        message: error.response?.data?.message || 'Error registering user',
      };
    } else {
      return {
        registered: false,
        message: 'Unexpected error',
      };
    }
  }
}
