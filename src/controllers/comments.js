const { Posts, Users, Comments } = require('../db/models')

async function createNewComment(userId, title, body, postId) {
    const comment = await Comments.create({
        title,
        body,
        userId,
        postId
    })
    return comment
}
// showAllComments({username: ''})
async function findAllComments(query){
    // TODO: Handle query params
    const comments = await Comments.findAll({
        include: [ Posts ]
    })
    return comments
}

module.exports = {
    createNewComment,
    findAllComments
}

async function task() {
    // console.log(
    //     await createNewComment(
    //         1,
    //         'this is a sample comment',
    //         'Body of the comment',
    //         1,
    //     )
    // ),
    // console.log(
    //     await createNewComment(
    //         2,
    //         'Another comment',
    //         'Some comment body example here as well',
    //         3
    //     )
    // )
    const comments = await findAllComments()
    for(let c of comments) {
    console.log(`${c.title}`)
    }
    // const posts = await showAllPosts()
    // for (let p of posts) {
    //     console.log(`${p.title}\nauthor: ${p.user.username}\n${p.body}\n==========\n`)
    // }
}

task()
