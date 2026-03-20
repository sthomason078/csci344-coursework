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

function getPostHTML(post) {
    const postHTML = `
        <section class="bg-white border mb-10">
            <div class="p-4 flex justify-between">
                <h3 class="text-lg font-Comfortaa font-bold">${post.user.username}</h3>
                <button class="icon-button"><i class="fas fa-ellipsis-h"></i></button>
            </div>
            <img src="${post.image_url}" alt="${post.alt_text}" width="300" height="300" class="w-full bg-cover">
            <div class="p-4">
                <div class="flex justify-between text-2xl mb-3">
                    <div>
                        <button><i class="far fa-heart"></i></button>
                        <button><i class="far fa-comment"></i></button>
                        <button><i class="far fa-paper-plane"></i></button>
                    </div>
                    <div>
                        <button><i class="far fa-bookmark"></i></button>
                    </div>
                </div>
                <p class="font-bold mb-3">${post.likes.length} like${post.likes.length === 1 ? "" : "s"}</p>
                <div class="text-sm mb-3">
                    <p>
                        <strong>${post.user.username}</strong>
                        ${post.caption}
                        <button class="button">more</button>
                    </p>
                </div>
                ${getCommentsHTML(post)}
                <p class="uppercase text-gray-500 text-xs">${post.display_time}</p>
            </div>
            <div class="flex justify-between items-center p-3">
                <div class="flex items-center gap-3 min-w-[80%]">
                    <i class="far fa-smile text-lg"></i>
                    <input type="text" class="min-w-[80%] focus:outline-none" placeholder="Add a comment...">
                </div>
                <button class="text-blue-500 py-2">Post</button>
            </div>
        </section>
    `;

    return postHTML;
}

function getCommentsHTML(post) {
    // if there are no comments, return an empty string
    // if there is exactly one comment, render just that comment
    // if there is more than one comment:
    //     render a "view all n comments" button
    //     render only the most recent comment underneath it
    // return the HTML string for whichever case applies
    let commentsHTML = "";

    post.comments.forEach(comment => {
        commentsHTML += `
            <p class="text-sm mb-3">
                <strong>${comment.user.username}</strong>
                ${comment.text}
            </p>
        `;
    });
    
    return commentsHTML;
}