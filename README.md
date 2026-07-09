# SuckerPunch Entertainment - BareKnuckle Fighting Division Website

Professional website for SuckerPunch Entertainment's BareKnuckle Fighting Division.

## Features

- **Hero Section**: Full-width group photo placeholder
- **About Page**: Complete mission, values, and leadership information
- **Athlete Roster**: Grid display of all 28+ athletes with:
  - Name
  - Weight Division
  - BKFC Record
  - Age
  - Individual headshot images (when uploaded)
- **Contact Page**: Email contact form with multiple inquiry types
- **Dark Theme**: Premium, professional design with red accents
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Trade Gothic Typography**: Bold, condensed headings with premium feel

## Project Structure

```
/src
  /app
    - page.tsx (Home/Hero)
    - /about (About page)
    - /roster (Roster grid)
    - /contact (Contact form)
    - layout.tsx (Main layout)
    - globals.css (Global styles)
  /components
    - Navigation.tsx (Nav bar)
    - Footer.tsx (Footer)
    - AthleteCard.tsx (Individual athlete card)
  /data
    - athletes.ts (Athlete data)

/public
  /images
    /athletes
      (place individual headshot images here)
    group-photo.jpg (hero image)
```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Git installed
- Vercel account (for hosting)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/cmcreech1/suckerpunch-bareknuckle.git
   cd suckerpunch-bareknuckle
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Adding Assets

### Hero Image (Group Photo)
1. Save as: `public/images/group-photo.jpg`
2. Dimensions: 1920×1080px
3. Format: JPEG
4. Update the `page.tsx` to reference the image

### Individual Athlete Headshots
1. Save images in: `public/images/athletes/`
2. Filename format: `athlete_firstname_lastname.jpg`
3. Dimensions: 400×400px (square) or larger
4. The AthleteCard component will automatically display them

### Update Athlete Data
Edit `src/data/athletes.ts` to:
- Add Instagram handles when collected
- Update any athlete information
- Add new athletes to the roster

## Deployment

### Deploy to Vercel (Recommended)

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Select the `suckerpunch-bareknuckle` repository
   - Click "Deploy"

3. **Connect Domain**
   - In Vercel dashboard, go to Project Settings > Domains
   - Add your custom domain
   - Follow Vercel's DNS instructions

### Automatic Deployments
Every time you push to GitHub, Vercel automatically rebuilds and deploys the site.

## Customization

### Colors
Edit `tailwind.config.js`:
- `sp-red`: Primary red (#FF0000)
- `sp-dark`: Dark background (#1A1A1A)
- `sp-black`: Black background (#0F0F0F)
- `sp-white`: White text (#FFFFFF)
- `sp-gray`: Gray accents (#2A2A2A)

### Typography
- **Headings**: Trade Gothic Bold Condensed (configured in globals.css)
- **Body**: Inter (Google Fonts)

### Tribal Symbols
Matte black tribal symbols appear as:
- Dividers (`.tribal-divider`)
- Borders (`.tribal-border`)
- Background patterns (`.tribal-bg`)

Edit in `globals.css` to adjust opacity, size, or appearance.

## Contact & Support

**Scott Howard** (Director)
scotth@suckerpunchent.com

**Christopher Creech** (Director of Athlete Relations)
chrisc@suckerpunchent.com

## License

© 2024 SuckerPunch Entertainment. All rights reserved.
