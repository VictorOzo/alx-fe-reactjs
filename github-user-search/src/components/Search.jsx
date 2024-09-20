import { useState } from "react";
import axios from "axios"; // Import axios for API requests

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    setError(null); // Clear any previous errors

    try {
      const response = await axios.get(
        `https://api.github.com/users/${searchTerm}`,
      );
      setUserData(response.data);
    } catch (error) {
      setError("Looks like we cant find the user");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search GitHub Username"
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} />
          <p>{userData.login}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer noopener">
            View Profile
          </a>
        </div>
      )}
    </>
  );
};

export default Search;
