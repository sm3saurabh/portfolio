let strings = {
    twitter_url: "https://twitter.com/sm_saurabhishra",
    github_url: "https://github.com/sm3saurabh/",
    linkedin_url: "https://www.linkedin.com/in/saurabh-mishra-156693146/",
    medium_url: "https://medium.com/@sm3.saurabhmishra",
    mm_url: "https://mutualmobile.com/"
}

document.addEventListener("DOMContentLoaded", function() {
    setupSocialClick()
    setupLinkClick()
})

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

function setupLinkClick() {
    document.getElementById("mm").addEventListener("click", function(event) {
        event.preventDefault()
        window.open(strings.mm_url, "_blank")
    })
}