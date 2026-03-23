// requires utilities.js to be loaded first:
// included in index.html

const rootURL = "https://photo-app-secured.herokuapp.com";
let token = null;
let username = "sthoma12";
let password = "password";

async function initializeScreen() {
    token = await getToken();
    showNav();
    // invoke all of the Part 1 functions here
    showPosts();
}

async function getToken() {
    return await getAccessToken(rootURL, username, password);
}

function showNav() {
    document.querySelector("#nav").innerHTML = `
    <nav class="flex justify-between py-5 px-9 bg-white border-b fixed w-full top-0">
            <h1 class="font-Comfortaa font-bold text-2xl">Photo App</h1>
            <ul class="flex gap-4 text-sm items-center justify-center">
                <li><span>${username}</span></li>
                <li><button class="text-blue-700 py-2">Sign out</button></li>
            </ul>
        </nav>
    `;
}

// implement remaining functionality below:

// 1.4 Posts Panel
async function showPosts() {
    const endpoint = `${rootURL}/api/posts/`;
    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });
    const posts = await response.json();
    const postsEl = document.querySelector("#posts");
    posts.slice(0, 10).forEach(post => postsEl.insertAdjacentHTML("beforeend", getPostHTML(post)));
}

// 2.3 Bookmark Post
async function bookmark(postId) {
    const postData = {
        post_id: postId
    }
    const endpoint = `${rootURL}/api/bookmarks/`;
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify(postData)
    });
    const data = await response.json();
    console.log(data);
}

async function unbookmark(bookmarkId, postId) {
    const endpoint = `${rootURL}/api/bookmarks/${bookmarkId}`;
    const response = await fetch(endpoint, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        }
    });
    const data = await response.json();
    console.log(data);
}

// after all of the functions are defined, 
// invoke initialize at the bottom:
initializeScreen();