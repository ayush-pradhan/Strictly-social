const { Posts, Users } = require('../db/models')

async function createNewPost(userId, title, body) {
    const post = await Posts.create({
        title,
        body,
        userId,
    })
    return post
}

/**
 * showAllPosts({username: ''}) can search with username
 * showAllPosts({title: ''})    or title
 */

async function findAllPosts(query){
    // TODO: Handle query params
    const posts = await Posts.findAll({
        include: [ Users ]
    })
    return posts
}

module.exports = {
    createNewPost,
    findAllPosts
}


// Test code

// async function task() {
//     // console.log(
//     //     await createNewPost(
//     //         1,
//     //         'this is a sample post',
//     //         'Body of the post'
//     //     )
//     // ),
//     // console.log(
//     //     await createNewPost(
//     //         2,
//     //         'Another post',
//     //         'Some body example here as well'
//     //     )
//     // )
//     const posts = await showAllPosts()
//     for (let p of posts) {
//         console.log(`${p.title}\nauthor: ${p.user.username}\n${p.body}\n==========\n`)
//     }
// }

// task()