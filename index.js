// Write your code here!
const postListContainer = document.getElementById('post-list');

function displayPosts(posts) {
    postListContainer.innerHTML = '';

    posts.forEach(post => {
        const li = document.createElement('li');

        const h1 = document.createElement('h1');
        h1.textContent = post.title;

        const p = document.createElement('p');
        p.textContent = post.body;

        li.appendChild(h1);
        li.appendChild(p);

        postListContainer.appendChild(li);
    });
}

async function loadRandomPosts() {
    const apiUrl = 'https://typicode.com';
    
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const posts = await response.json();
        
        displayPosts(posts);
        
    } catch (error) {
        console.error(error);
        
        const mockPosts = [
            {
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
        ];
        displayPosts(mockPosts);
    }
}

loadRandomPosts();



