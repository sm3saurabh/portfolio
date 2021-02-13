const urls = {
  twitter_url: "https://twitter.com/mishrasaurabh__",
  github_url: "https://github.com/sm3saurabh/",
  linkedin_url: "https://www.linkedin.com/in/saurabhmishra97/",
  medium_url: "https://medium.com/@sm3.saurabhmishra",
  mm_url: "https://mutualmobile.com/",
  skia_url: "https://skia.org/",
  android_url: "https://www.android.com/intl/en_in/"
}

document.addEventListener("DOMContentLoaded", function () {
  setupSocialClick()
  setupLinkClick()
})

function setupSocialClick() {
  document.getElementById("twitter").addEventListener("click", function (event) {
    event.preventDefault()
    openUrl(urls.twitter_url)
  })

  document.getElementById("github").addEventListener("click", function (event) {
    event.preventDefault()
    openUrl(urls.github_url)
  })

  document.getElementById("medium").addEventListener("click", function (event) {
    event.preventDefault()
    openUrl(urls.medium_url)
  })

  document.getElementById("linkedin").addEventListener("click", function (event) {
    event.preventDefault()
    openUrl(urls.linkedin_url)
  })
}

function setupLinkClick() {

  document.getElementById("mm").addEventListener("click", function (event) {
    event.preventDefault()
    openUrl(urls.mm_url)
  })

  document.getElementById("skia").addEventListener("click", function (event) {
    event.preventDefault()
    openUrl(urls.skia_url)
  })

  document.getElementById("android").addEventListener("click", function (event) {
    event.preventDefault()
    openUrl(urls.android_url)
  })
}

function openUrl(url) {
  window.open(url, "_blank")
}