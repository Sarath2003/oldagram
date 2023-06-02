const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.png",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.png",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const avatarEl = document.getElementById("avatar")
const nameEl = document.getElementById("name")
const locationEl = document.getElementById("location")
const postEl = document.getElementById("post")
const likesEl = document.getElementById("likes")
const usernameEl = document.getElementById("username")
const commentEl = document.getElementById("comment")

avatarEl.src = "images/avatar-vangogh.png"
nameEl.textContent = posts[0].name
locationEl.textContent = posts[0].location
postEl.src = "images/post-ducreux.png"
likesEl.textContent = `${posts[0].likes} likes`
usernameEl.textContent = posts[0].username
commentEl.textContent = posts[0].comment

