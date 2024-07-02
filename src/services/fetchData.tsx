import axios from 'axios';

export default {
  // fetchData: async () => {
  //   try {
  //     const response = await axios.get('https://api.github.com/');
  //     return response.data;
  //   } catch (error) {
  //     throw new Error('Failed to fetch data from GitHub API');
  //   }
  // },
  getUser: async (user: string) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data from GitHub API');
    }
  },
  getUserRepository: async (user: string) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}/repos`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data from GitHub API');
    }
  }
}
