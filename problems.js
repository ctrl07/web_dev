const posts = [];
let lastActivityTime = null;

function createPost() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newPost = { title: `Post${posts.length + 1}` };
            posts.push(newPost);
            resolve(newPost);
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("No posts to delete");
            }
        }, 1000);
    });
}

async function main() {
    try {
        await createPost();
        await updateLastUserActivityTime();

        console.log("All Posts:", posts);
        console.log("Last Activity Time:", lastActivityTime);

        const deletedPost = await deletePost();
        console.log("Deleted Post:", deletedPost);
        console.log("Remaining Posts:", posts);
    } catch (error) {
        console.log(error);
    }
}

main();
