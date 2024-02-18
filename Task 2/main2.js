// Task 2

/*
fetch ფუნქციის გამოყენებით წამოიღე
მონაცემები მოცემული მისამართიდან და
გამოიტანე DOM-ში პოსტის სახით
*/

const fetchAndDisplayPost = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      if (!response.ok) {
        throw Error("Error fetching data");
      }
      const posts = await response.json();

      posts.forEach((post) => {
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        let span = document.createElement("span");
        let p = document.createElement("p");
        h1.textContent = post.title;
        p.textContent = post.body;
        span.textContent = `user id: ${post.userId}`;
        div.append(h1, p, span);
        document.body.append(div);
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  fetchAndDisplayPost();