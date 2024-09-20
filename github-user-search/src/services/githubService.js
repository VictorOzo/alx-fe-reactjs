import axios from "axios";

export const fetchUserData = async (searchTerm) => {
  const response = await axios.get(
    `https://api.github.com/users/${searchTerm}`,
  );
  return response.data;
};
