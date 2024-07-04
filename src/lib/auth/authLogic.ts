import axios from 'axios'
export async function checkAuthorized(token: string): Promise<boolean> {
    try {
      const response = await axios.get('http://localhost:3000/auth/verify-token', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.status === 200;
    } catch (error) {
      return false;
    }
  }