# Pinterest Clone Project  

We built this Pinterest clone using [Next.js](https://nextjs.org/), bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Here’s a straightforward breakdown of the project!  


## Table of Contents  
1. [Features](#features)  
2. [Technologies I Used](#technologies-i-used)  
3. [Getting Started](#getting-started)  
4. [Project Structure](#project-structure)  
5. [Deployment](#deployment)  
6. [Contributing](#contributing)  
7. [License](#license)  


## Features  
- *User Login*: Log in with a Google account using NextAuth.js.  
- *Pin Display*:  
  - Home page shows all pins.  
  - User profiles display their info and posted pins.  
- *Pin Details*: Each pin has a dedicated page with image, title, description, and links.  
- *Pin Creation*: Logged-in users can create new pins.  


## Technologies I Used  
### Front-end  
- *Next.js 13.4.7*: A React framework for fast loading and SEO-friendly pages (server-side rendering).  
- *Tailwind CSS 3.3.2*: A CSS tool to build custom, responsive UI quickly.  
- *NextAuth.js 4.22.1*: Handles user login, especially Google authentication.  

### Back-end  
- *Firebase Firestore*: A database to store user info and pin data.  
- *Firebase Storage*: Holds the images for each pin.  


## Getting Started  
### What You Need  
- Node.js (version 16.8.0 or higher)  
- npm or yarn  


### How to Set It Up  
1. *Clone the project*:  
bash  
git clone https://github.com/rrs301/pinterest-clone.git  
cd pinterest-clone  
  

2. *Install tools*:  
bash  
npm install  
# or use yarn  
yarn install  
  

3. *Set up Google login*:  
Create a .env file in the project folder with these lines (get IDs from [Google Cloud Console](https://console.cloud.google.com/)):  
plaintext  
GOOGLE_CLIENT_ID="your_google_client_id"  
GOOGLE_CLIENT_SECRET="your_google_client_secret"  
  


### Run the App  
1. Start the development server:  
bash  
npm run dev  
# or  
yarn dev  
  

2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the app.  


### Edit Pages  
Change files in the app folder to update pages. For example, edit app/page.tsx to change the home page. Changes will show up automatically!  


## Project Structure  
- **app/**: Main pages and components.  
  - **layout.tsx**: Global design with header and login session tools.  
  - **[userId]/page.jsx**: User profiles (grabs data from Firebase).  
  - **pin-builder/page.jsx**: Page to create new pins.  
  - **components/**: Reusable parts like headers, pin lists, and user info boxes.  
- **package.json**: Lists tools and commands.  
- **next.config.js**: Settings for Next.js.  
- **.env**: Holds your Google login IDs.  


## Deployment  
The easiest way to share your app online is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), made by the Next.js team.  
Learn more in the [Next.js deployment guide](https://nextjs.org/docs/deployment).  



