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
            <img src="${profile.image_url}" alt="Profile image for user ${profile.username}" class="rounded-full w-16 h-16" />
            <h2 class="font-Comfortaa font-bold text-2xl">${profile.username}</h2>
        </header>
    `;

    return profileHeaderHTML;
}

function getSuggestionHTML(suggestion) {
    const suggestionHTML = `
        <section class="flex justify-between items-center w-72 mb-4 gap-2">
            <img src="${suggestion.image_url}" alt="Profile image for user ${suggestion.username}" class="rounded-full w-10 h-10" />
            <div class="grow">
                <p class="font-bold text-sm">${suggestion.username}</p>
                <p class="text-gray-600 text-xs">suggested for you</p>
            </div>
            <button onclick="followUser(${suggestion.id})" id="suggestion-button-${suggestion.id}" class="text-blue-600 text-sm py-2">follow</button>
        </section>
    `;

    return suggestionHTML;
}

function getStoryHTML(story) {
    const storyHTML = `
        <div class="flex flex-col justify-center items-center">
            <img src="${story.user.image_url}" alt="Profile image for user ${story.user.username}" class="rounded-full w-14 h-14 border-4 border-gray-300" />
            <p class="text-xs text-gray-600">${story.user.username}</p>
        </div>
    `;

    return storyHTML;
}

function getPostHTML(post) {
    const postHTML = `
        <section id="post-${post.id}" class="bg-white border mb-10">
            <div class="p-4 flex justify-between">
                <h3 class="text-lg font-Comfortaa font-bold">${post.user.username}</h3>
                <button class="icon-button" aria-label="Options"><i class="fas fa-ellipsis-h" aria-hidden="true"></i></button>
            </div>
            <img src="${post.image_url}" alt="${post.alt_text}" width="300" height="300" class="w-full bg-cover">
            <div class="p-4">
                <div class="flex justify-between text-2xl mb-3">
                    <div>
                        ${getLikeButton(post)}
                        <button aria-label="Comment"><i class="far fa-comment" aria-hidden="true"></i></button>
                        <button aria-label="Share"><i class="far fa-paper-plane" aria-hidden="true"></i></button>
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
                <p class="uppercase text-gray-600 text-xs">${post.display_time}</p>
            </div>
            <div class="flex justify-between items-center p-3">
                <div class="flex items-center gap-3 min-w-[80%]">
                    <i class="far fa-smile text-lg" aria-hidden="true"></i>
                    <input id="comment-input-${post.id}" type="text" aria-label="Add a comment" class="min-w-[80%] focus:outline-none" placeholder="Add a comment...">
                </div>
                <button onclick="addComment(${post.id})" class="text-blue-600 py-2">Post</button>
            </div>
        </section>
    `;

    return postHTML;
}

function getCommentsHTML(post) {
    let commentsHTML = "";

    if (post.comments.length > 1) {
        commentsHTML += `
            <button class="text-blue-600 text-sm mb-3">View all ${post.comments.length} comments</button>
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
        return `<button onclick="unbookmark(${post.current_user_bookmark_id}, ${post.id})" aria-label="Unbookmark"><i class="fas fa-bookmark" aria-hidden="true"></i></button>`;
    else
        return `<button onclick="bookmark(${post.id})" aria-label="Bookmark"><i class="far fa-bookmark" aria-hidden="true"></i></button>`;
}

function getLikeButton(post) {
    if (post.current_user_like_id)
        return `<button onclick="unlike(${post.current_user_like_id}, ${post.id})" aria-label="Unlike"><i class="fas fa-heart text-red-600" aria-hidden="true"></i></button>`;
    else
        return `<button onclick="like(${post.id})" aria-label="Like"><i class="far fa-heart" aria-hidden="true"></i></button>`;
}