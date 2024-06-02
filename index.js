document.getElementById("fetch-posts").addEventListener("click", fetchPosts);
document
  .getElementById("fetch-posts-usernames")
  .addEventListener("click", fetchUsernames);

function fetchPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      const postsContainer = document.getElementById("posts-container");
      postsContainer.innerHTML = "";
      data.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
        postsContainer.appendChild(postElement);
      });
    })
    .catch((error) => console.error("Error fetching posts:", error));
}

function fetchUsernames() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      const postsContainer = document.getElementById(
        "posts-usernames-container"
      );
      postsContainer.innerHTML = "";
      data.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post-users");
        postElement.innerHTML = `
                    <h2>${post.name}</h2>
                    <p>${post.username}</p>
                    <p>${post.email}</p>
                    <p>${post.phone}</p>
                    <p>${post.website}</p>
                `;
        postsContainer.appendChild(postElement);
      });
    })
    .catch((error) => console.error("Error fetching posts:", error));
}
