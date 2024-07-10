
function customrender(reactelement,container){
    // const domelement = document.createElement(reactelement.type)
    // domelement.innerHTML = reactelement.children
    // domelement.setAttribute('href',reactelement.props.href)
    // domelement.setAttribute('target',reactelement.props.target)


    const domelement = document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.children

    for (const prop in reactelement.props) {
        domelement.setAttribute(prop, reactelement.props[prop])
    }

    container.appendChild(domelement)
}

const container = document.getElementById('root')


const reactElement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank'
    },
    children: 'Vist google'
}



customrender(reactElement, container)

