export default {
  getStars(repo) {
    return fetch(`https://api.github.com/repos/${repo}`)
      .then((response) => response.json())
      .then((data) => data.stargazers_count)
      .then((stars) => stars.toLocaleString('en'));
  },
};
