const urlPattern = /https:\/\/meet\.google\.com\/(_meet\/)?[a-z]{3}-[a-z]{4}-[a-z]{3}/

if (window.location.href.match(urlPattern)) {
  const timer = setInterval(() => {
    const loadingEl = document.evaluate("//div[text()='Getting ready...']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    const joinButton = document.evaluate("//span[text()='Join now']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue

    if (loadingEl) {
    } else if (joinButton) {
      joinButton.parentNode.parentNode.focus()
      clearInterval(timer)
    }
  }, 250)
}
