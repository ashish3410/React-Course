const maincontainer=document.getElementById("root")
function customElement(reactElement,container){
    const Element=document.createElement(reactElement.type)
    Element.innerHTML=reactElement.children
    Element.setAttribute("href",reactElement.props.href)
    Element.setAttribute("target",reactElement.props.target)
    container.appendChild(Element)
}



reactElement={
    type:"a",
    props:{
        href:"htpps://google.com/",
        target:"_blank"
    },
    children:"Click me to go to google"
}


customElement(reactElement,maincontainer)