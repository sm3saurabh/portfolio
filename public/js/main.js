let strings = {
    twitter_url: "https://twitter.com/mishrasaurabh__",
    github_url: "https://github.com/sm3saurabh/",
    linkedin_url: "https://www.linkedin.com/in/saurabhmishra97/",
    medium_url: "https://medium.com/@sm3.saurabhmishra",
    mm_url: "https://mutualmobile.com/",
    skia_url: "https://skia.org/",
    android_url: "https://www.android.com/intl/en_in/",
    resume_url: "https://drive.google.com/file/d/1xW3offh6Bqcq4LZSksXvwuziq29H-6-9/view?usp=sharing"
}

document.addEventListener("DOMContentLoaded", function() {
    setupSocialClick()
    setupLinkClick()
})

function setupSocialClick() {    
    document.getElementById("twitter").addEventListener("click", function(event) {
        event.preventDefault()
        openUrl(strings.twitter_url)
    })

    document.getElementById("github").addEventListener("click", function(event) {
        event.preventDefault()
        openUrl(strings.github_url)
    })

    document.getElementById("medium").addEventListener("click", function(event) {
        event.preventDefault()
        openUrl(strings.medium_url)
    })

    document.getElementById("linkedin").addEventListener("click", function(event) {
        event.preventDefault()
        openUrl(strings.linkedin_url)
    })

    document.getElementById("resume").addEventListener("click", function(event) {
      event.preventDefault()
      openUrl(strings.resume_url)
    })
}

function setupLinkClick() {

    document.getElementById("mm").addEventListener("click", function(event) {
        event.preventDefault()
        openUrl(strings.mm_url)
    })

    document.getElementById("skia").addEventListener("click", function(event) {
        event.preventDefault()
        openUrl(strings.skia_url)
    })

    document.getElementById("android").addEventListener("click", function(event) {
        event.preventDefault()
        openUrl(strings.android_url)
    })
}

function openUrl(url) {
    window.open(url, "_blank")
}