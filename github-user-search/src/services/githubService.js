import axios from "axios";

const fetchUserData = async (searchTerm) => {
  const response = await axios.get(
    `https://api.github.com/users/${searchTerm}`,
  );
  return response.data;
};

export default fetchUserData;
