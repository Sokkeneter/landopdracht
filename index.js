const headerhtml =
`
<img id="header_img" src="https://i.pinimg.com/originals/dd/ee/3b/ddee3b67203ac454da390873da382e4c.jpg" alt="knife kirby">
    <nav id="navigation_bar">
        <div >
            <ul>
                <li class="navigation_bar_item"><a href="/index.html">home</a></li>
                <li class="navigation_bar_item"><a href="/pages/bezienswaardigheden.html">bezienswaardigheden</a></li>
                <li class="navigation_bar_item"><a href="/pages/geschiedenis.html">geschiedenis</a></li>
                <li class="navigation_bar_item"><a href="/pages/wiebenik.html">over mij</a></li>
            </ul>
        </div>
    </nav>
`

const footerhtml =
`
    <ul>
        <li class="footer_item"><a href="/pages/wiebenik.html#contact_heading">contact</a></li>
        <li class="footer_item"><a href="/pages/wiebenik.html">about</a></li>
        <li class="footer_item"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">surprise :)</a></li>
    </ul>
    <p align="center">this website is copyrighted by my Ass™. all rights reserved.</p>
`


function addHeader(){
    document.getElementById("header").innerHTML = headerhtml

    window.onscroll = function() {setSticky()};
    const header = document.getElementById("navigation_bar");
    const main = document.querySelector("main");
    let headerOffset = header.offsetTop;
    let headerimgheight = document.getElementById("header_img").clientHeight;
    let scrollLimit = headerOffset + headerimgheight;
    function setSticky() {
        if (window.pageYOffset > scrollLimit) {
            header.classList.add("sticky");
            // main.style.marginTop = `${ 100 + header.clientHeight}px`;
        } else {
            header.classList.remove("sticky");
            // main.style.marginTop = `10px`;
        }
    }
//https://www.w3schools.com/howto/howto_js_sticky_header.asp
// thanks w3schools
 }


 function addFooter(){
    document.getElementById("footer").innerHTML = footerhtml;
 }
addHeader();
addFooter();
