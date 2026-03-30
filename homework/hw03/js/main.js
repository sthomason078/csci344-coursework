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
    showProfileHeader();
    showSuggestions();
    showStories();
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

// 1.1 Right Panel: User Profile
async function showProfileHeader() {
    const endpoint = `${rootURL}/api/profile/`;
    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });
    const profile = await response.json();
    const profileHeaderEl = document.querySelector("#profile-header");
    profileHeaderEl.insertAdjacentHTML("beforeend", getProfileHeaderHTML(profile));
}

// 1.2 Right Panel: Suggested Accounts
async function showSuggestions() {
    const endpoint = `${rootURL}/api/suggestions/`;
    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });
    const suggestions = await response.json();
    const suggestionsEl = document.querySelector("#suggestions");
    suggestions.forEach(suggestion => suggestionsEl.insertAdjacentHTML("beforeend", getSuggestionHTML(suggestion)));
}

// 1.3 Stories Panel
async function showStories() {
    const endpoint = `${rootURL}/api/stories/`;
    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });
    const stories = await response.json();
    const storiesEl = document.querySelector("#stories");
    stories.forEach(story => storiesEl.insertAdjacentHTML("beforeend", getStoryHTML(story)));
}

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

// 2.1 Like Post
async function like(postId) {
    const postData = {
        post_id: postId
    }
    const endpoint = `${rootURL}/api/likes/`;
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

    reloadPost(postId);
}

// 2.2 Unlike Post
async function unlike(likeId, postId) {
    const endpoint = `${rootURL}/api/likes/${likeId}`;
    const response = await fetch(endpoint, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        }
    });
    const data = await response.json();
    console.log(data);

    reloadPost(postId);
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

    reloadPost(postId);
}

// 2.4 Unbookmark Post
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

    reloadPost(postId);
}

// 6.1 Redraw the Post without refreshing the page
async function reloadPost(postId) {
    const response = await fetch(`${rootURL}/api/posts/${postId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });

    const post = await response.json();
    const updatedPostHTML = getPostHTML(post);
    const postEl = document.querySelector(`#post-${postId}`);
    postEl.outerHTML = updatedPostHTML;
}

// 6.2 Follow Account
async function followUser(userId) {
    const postData = {
        user_id: userId
    }
    const endpoint = `${rootURL}/api/following/`;
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

    const suggestionButtonEl = document.querySelector(`#suggestion-button-${userId}`);
    suggestionButtonEl.outerHTML = `
        <button onclick="unfollowUser(${data.id}, ${userId})" id="suggestion-button-${userId}" class="text-blue-500 text-sm py-2">unfollow</button>
    `;
}

// 6.3 Unfollow Account
async function unfollowUser(followingId, userId) {
    const endpoint = `${rootURL}/api/following/${followingId}`;
    const response = await fetch(endpoint, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        }
    });
    const data = await response.json();
    console.log(data);

    const suggestionButtonEl = document.querySelector(`#suggestion-button-${userId}`);
    suggestionButtonEl.outerHTML = `
        <button onclick="followUser(${userId})" id="suggestion-button-${userId}" class="text-blue-500 text-sm py-2">follow</button>
    `;
}

// 6.4 Add a Comment
async function addComment(postId) {
    const commentInputEl = document.querySelector(`#comment-input-${postId}`);
    const commentText = commentInputEl.value;

    const postData = {
        "post_id": postId,
        "text": commentText
    }
    const endpoint = `${rootURL}/api/comments/`;
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

    await reloadPost(postId);

    const newCommentInputEl = document.querySelector(`#comment-input-${postId}`);
    newCommentInputEl.focus();
}

// after all of the functions are defined, 
// invoke initialize at the bottom:
initializeScreen();