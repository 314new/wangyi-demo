const links = document.querySelectorAll('link[rel="import"]')


Array.prototype.forEach.call(links, (link) => {
    let template = link.import.querySelector('.task-template')
    let clone = document.importNode(template.content, true)

    if (link.href.match('bottom.html')) {
        document.querySelector('#bottom').appendChild(clone)
    }

    if (link.href.match('left-navbar.html')) {
        document.querySelector('#left-nav').appendChild(clone)
    }else {
        document.querySelector('#center').appendChild(clone)
    } 
})
