/**
 * Sets a cookie which holds the access token after the user 
 * "logs in." This is NOT secure. We will implement a more
 * secure approach in the latter half of the semester.
 * 
 * @param {string} rootURL: The base address of the API
 * @param {string} username: Your username for the course API
 * @param {string} password: Your password for the course API 
 */
async function getAccessToken(rootURL, username, password) {
    const postData = {
        "username": username,
        "password": password
    };
    const endpoint = `${rootURL}/api/token/`;
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
    });
    const data = await response.json();
    return data.access_token;
}

function getProfileHeaderHTML(profile) {
    const profileHeaderHTML = `
        <header class="flex gap-4 items-center">
            <img src="${profile.image_url}" class="rounded-full w-16 h-16" />
            <h2 class="font-Comfortaa font-bold text-2xl">${profile.username}</h2>
        </header>
    `;

    return profileHeaderHTML;
}

function getSuggestionHTML(suggestion) {
    const suggestionHTML = `
        <section class="flex justify-between items-center w-72 mb-4 gap-2">
            <img src="${suggestion.image_url}" class="rounded-full w-10 h-10" />
            <div class="grow">
                <p class="font-bold text-sm">${suggestion.username}</p>
                <p class="text-gray-500 text-xs">suggested for you</p>
            </div>
            <button onclick="followUser(${suggestion.id})" id="suggestion-button-${suggestion.id}" class="text-blue-500 text-sm py-2">follow</button>
        </section>
    `;

    return suggestionHTML;
}

function getStoryHTML(story) {
    const storyHTML = `
        <div class="flex flex-col justify-center items-center">
            <img src="${story.user.image_url}" class="rounded-full w-14 h-14 border-4 border-gray-300" />
            <p class="text-xs text-gray-500">${story.user.username}</p>
        </div>
    `;

    return storyHTML;
}

function getPostHTML(post) {
    const postHTML = `
        <section id="post-${post.id}" class="bg-white border mb-10">
            <div class="p-4 flex justify-between">
                <h3 class="text-lg font-Comfortaa font-bold">${post.user.username}</h3>
                <button class="icon-button"><i class="fas fa-ellipsis-h"></i></button>
            </div>
            <img src="${post.image_url}" alt="${post.alt_text}" width="300" height="300" class="w-full bg-cover">
            <div class="p-4">
                <div class="flex justify-between text-2xl mb-3">
                    <div>
                        ${getLikeButton(post)}
                        <button><i class="far fa-comment"></i></button>
                        <button><i class="far fa-paper-plane"></i></button>
                    </div>
                    <div>
                        ${getBookmarkButton(post)}
                    </div>
                </div>
                <p class="font-bold mb-3">${post.likes.length} like${post.likes.length === 1 ? "" : "s"}</p>
                <div class="text-sm mb-3">
                    <p>
                        <strong>${post.user.username}</strong>
                        ${post.caption}
                    </p>
                </div>
                ${getCommentsHTML(post)}
                <p class="uppercase text-gray-500 text-xs">${post.display_time}</p>
            </div>
            <div class="flex justify-between items-center p-3">
                <div class="flex items-center gap-3 min-w-[80%]">
                    <i class="far fa-smile text-lg"></i>
                    <input id="comment-input-${post.id}" type="text" class="min-w-[80%] focus:outline-none" placeholder="Add a comment...">
                </div>
                <button onclick="addComment(${post.id})" class="text-blue-500 py-2">Post</button>
            </div>
        </section>
    `;

    return postHTML;
}

function getCommentsHTML(post) {
    let commentsHTML = "";

    if (post.comments.length > 1) {
        commentsHTML += `
            <button class="text-blue-500 text-sm mb-3">View all ${post.comments.length} comments</button>
        `;
    }

    if (post.comments.length > 0) {
        const comment = post.comments[post.comments.length - 1];
        commentsHTML += `
            <p class="text-sm mb-3">
                <strong>${comment.user.username}</strong>
                ${comment.text}
            </p>
        `;
    }
    
    return commentsHTML;
}

function getBookmarkButton(post) {
    if (post.current_user_bookmark_id)
        return `<button><i onclick="unbookmark(${post.current_user_bookmark_id}, ${post.id})" class="fas fa-bookmark"></i></button>`;
    else
        return `<button><i onclick="bookmark(${post.id})" class="far fa-bookmark"></i></button>`;
}

function getLikeButton(post) {
    if (post.current_user_like_id)
        return `<button><i onclick="unlike(${post.current_user_like_id}, ${post.id})" class="fas fa-heart text-red-500"></i></button>`;
    else
        return `<button><i onclick="like(${post.id})" class="far fa-heart"></i></button>`;
}