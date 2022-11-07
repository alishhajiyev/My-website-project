let body= document.body;
let nav = document.querySelector('#ad2>div')
let heading = document.querySelectorAll('h1,h2,h3')
heading.forEach((el, index) => {
    let anchor = document.createElement('a')
    let a= el.tagName==='H1'? '': el.tagName==='H2'? '–': el.tagName==='H3'? '—–': false;
    anchor.innerText = a+el.innerText;
    index=String(index)+'fire'
    anchor.setAttribute('href', `#${index}`)
    anchor.setAttribute('id', `${index}`)
    el.setAttribute('id', `${index}`)
    nav.append(anchor)
});
// Go to top of the page
let upButton = document.querySelector('#upButton')
upButton.addEventListener("click", ()=>{
    let a1 = document.querySelector('#ad2 > div > a:nth-child(1)');
    a1.click()
})
