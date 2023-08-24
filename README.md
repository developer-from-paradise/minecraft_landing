# # Minecraft Server Website
This repository contains the code for the landing page of our Minecraft server's website. The landing page is designed to provide an engaging and informative experience for visitors, enticing them to join our Minecraft community. The page has been built using SCSS, Gulp, and Babel to ensure a smooth development process and an optimized user experience.

# Features
1.  **Attractive Design**: The landing page is designed to capture the essence of our Minecraft community. It features vibrant visuals, engaging animations, and an intuitive layout.
    
2.  **Server Information**: Visitors can quickly access essential information about our Minecraft server, such as server address, gameplay modes, and features.
    
3.  **Dynamic Server Status**: The landing page dynamically displays the current server status, indicating whether the server is online or offline.
    
4.  **Interactive Elements**: The page includes interactive elements like buttons for joining the server, accessing the forums, and connecting with our community on social media.
    
5.  **Responsive**: The layout and design of the landing page are responsive, ensuring a seamless experience across various devices and screen sizes.
    
6.  **SCSS Styling**: SCSS (Sassy CSS) is used for styling the landing page, allowing for modular and maintainable styling code.
    
7.  **Gulp Workflow**: Gulp is used to automate tasks such as compiling SCSS to CSS, optimizing images, and watching for file changes during development.
    
8.  **Babel for JavaScript**: Babel is integrated to transpile modern JavaScript code into browser-compatible code, ensuring cross-browser compatibility.


## Technologies Used

-   HTML5
-   CSS3 (SCSS)
-   JavaScript (ES6+)
-   Gulp
-   Babel

## Getting Started

### Prerequisites

-   Node.js and npm (Node Package Manager) should be installed. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1.  Clone this repository to your local machine:
    `git clone https://github.com/developer-from-paradise/minecraft_landing.git` 
    
2.  Navigate to the project directory:
    `cd minecraft_landing` 
    
3.  Install the required dependencies:
    `npm install` 


## Development Workflow

1.  Run the Gulp default task to start the development server:
    `gulp` 
    This will compile SCSS to CSS, transpile JavaScript, optimize images, and start a local development server with live reloading.
2.  Make necessary changes to the HTML, SCSS, and JavaScript files in the `src` directory. The compiled and optimized files will be generated in the `build` directory.

## File Structure
    💼 project/
    
    ├──── 📡 build/ - empty directory for compiled project files
    ├──── 🧶 node-modules/ - directory for node modules
    ├──┬─ 🗄 src/ - directory for project source files
    │  ├──┬─ ⚙ components/ - component directory
    │  │  ├─── 🧩 bem-blocks/ - directory for BEM blocks
    │  │  └─── 🗂 page-blocks/ - directory for typical page blocks, such as header, footer, etc.
    │  ├──── 🔤 fonts/ - directory for fonts
    │  ├──── 🖼 img/ - image directory
    │  ├──── 📑 js/ - directory for JavaScript files
    │  ├──┬─ 📜 scss/ - directory for style files
    │  │  └─── 🧬 base/ - directory for base styles, which we will not modify
    │  └──┬─ ⛱ svg/ - directory for SVG files
    │     └─── 🏷 css/ - directory for SVG files that will be integrated into CSS
    │
    └──── 🛠 tasks/ - directory for Gulp function modules

## Preview
[Link to preview page](https://developer-from-paradise.github.io/minecraft_landing/build/)