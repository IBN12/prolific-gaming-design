import navMenuBar from "../images/tools/menuOne.svg";
import navMenuBarHover from "../images/tools/menuOneHover.svg";

// DomContent(): All the Dom Content in the application. 
export function DomContent(){
    console.log("Initializing Content"); // Testing 
    NavHeader();
}

// NavHeader(): The navigation header for the page.
function NavHeader(){
    const content = document.getElementById('content');

    const navHeader = document.createElement('nav');
    navHeader.classList.add('nav-header-section'); 

    content.appendChild(navHeader); 

    NavMenuBar();

    NavLogo();
}

// NavMenuBar(): The navigation menu bar for the navigation header.
function NavMenuBar(){
    const navHeader = document.querySelector('.nav-header-section');

    const navMenuBarImg = document.createElement('img');
    navMenuBarImg.src = navMenuBar;  

    navMenuBarImg.addEventListener('mouseover', MenuBarHover);
    navMenuBarImg.addEventListener('mouseout', MenuBarOut)

    navHeader.appendChild(navMenuBarImg); 
}

// MenuBarHover(): Will change the menu bar when the user hovers over the default bar. 
function MenuBarHover(){
    const navMenuBarImg = document.querySelector('.nav-header-section > img[src]');
    navMenuBarImg.src = navMenuBarHover; 
}

// MenBarOut(): Will change the menu bar back to the default bar when the user hovers out. 
function MenuBarOut(){
    const navMenuBarImg = document.querySelector('.nav-header-section > img[src]');
    navMenuBarImg.src = navMenuBar; 
}

// NavLogo(): The navigation header logo.
function NavLogo(){
    const navHeader = document.querySelector('.nav-header-section');
    
    const navLogo = document.createElement('h1');
    navLogo.textContent = "PROLIFIC GAMING";

    navHeader.appendChild(navLogo);
}