import { useState } from "react";
import { fetchUserData } from "../services/githubService";

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
      const response = await fetchUserData(searchTerm);
      setUserData(response);
      console.log(response);
    } catch (error) {
      setError("Looks like we cant find the user");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center">
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
