# QurbaniHat - Livestock Booking Platform

A modern livestock booking platform where users can explore animals for Qurbani, view details, and place a booking after authentication.

## Live Link
Add your deployed Vercel link here.

## Key Features
- Responsive navbar with logo, Home, All Animals, avatar, login/register and logout
- Home page with hero banner, featured animals, Qurbani tips, top breeds and extra section
- All Animals page with price sorting and animal cards
- Private animal details page with full details and booking form
- Booking success toast and form reset after submit
- Email/password login and registration
- Google social login
- My Profile page with logged-in user data
- Update profile page for name and photo URL
- Loading state while fetching animal data
- Custom not-found page
- Environment variables for Firebase configuration
- Animate.css package used for animation

## NPM Packages Used
- react
- react-dom
- react-router-dom
- firebase
- react-toastify
- lucide-react
- animate.css
- vite

## Routes
### Public Routes
- `/`
- `/animals`
- `/login`
- `/register`

### Private Routes
- `/details-page/:id`
- `/my-profile`
- `/update-profile`

## Environment Variables
Create a `.env.local` file in the project root and add:

```env
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_project.appspot.com
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
```

## Firebase Setup
1. Create a Firebase project.
2. Add a Web App.
3. Copy the Firebase config values into `.env.local`.
4. Go to Authentication > Sign-in method.
5. Enable Email/Password.
6. Enable Google.
7. Add your deployed domain to Authorized domains after deployment.

## Run Locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deployment
This project includes `vercel.json` so route reload will not show 404 on Vercel.

## Suggested GitHub Commits
1. Initial project setup with Vite React
2. Added routing and layout structure
3. Added navbar and footer
4. Added animal JSON data
5. Created home page sections
6. Created all animals page with sorting
7. Added animal details page
8. Added Firebase authentication
9. Added login and register pages
10. Added private route protection
11. Added my profile and update profile pages
12. Added toast notifications and loading state
13. Added responsive styling
14. Added not found page and Vercel rewrite
15. Final README update
