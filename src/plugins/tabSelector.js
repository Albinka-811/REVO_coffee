function TabSelector () {
    let tabs

    function init (tabsSelector) {
        tabs = document.querySelectorAll(tabsSelector)

        for (let tab of tabs) {
            tab.addEventListener('click', changeTab)
        }
    }

    function changeTab ({target}) {
        const title = document.querySelector(
            '.giftset-depiction-content-info__name')
        title.textContent = target.dataset.title
        setTabDeactivatedStyle(target)
        setTabActiveStyle(target)
    }

    function setTabActiveStyle (tab) {
        tab.classList.add('active')
    }

    function setTabDeactivatedStyle (exceptTab) {
        for (let tab of tabs) {
            if (tab !== exceptTab) {
                tab.classList.remove('active')
            }
        }
    }

    return {
        init,
    }
}

export {
    TabSelector,
}
