let strings = {
    self_description: "I am an android developer I am an android developer I am an android developer I am an android developer I am an android developer I am an android developer ",
    twitter_url: "https://twitter.com/sm_saurabhishra",
    github_url: "https://github.com/sm3saurabh/",
    linkedin_url: "https://www.linkedin.com/in/saurabh-mishra-156693146/",
    medium_url: "https://medium.com/@sm3.saurabhmishra"
}

document.addEventListener("DOMContentLoaded", function() {
    populateDescription()
    setupSocialClick()
})

function populateDescription() {
    let element = document.getElementById("description")
    element.innerHTML = strings.self_description
}

function setupSocialClick() {    
    document.getElementById("twitter").addEventListener("click", function(event) {
        event.preventDefault()
        window.open(strings.twitter_url, "_blank")
    })

    document.getElementById("github").addEventListener("click", function(event) {
        event.preventDefault()
        window.open(strings.github_url, "_blank")
    })

    document.getElementById("medium").addEventListener("click", function(event) {
        event.preventDefault()
        window.open(strings.medium_url, "_blank")
    })

    document.getElementById("linkedin").addEventListener("click", function(event) {
        event.preventDefault()
        window.open(strings.linkedin_url, "_blank")
    })
}