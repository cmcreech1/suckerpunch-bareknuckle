# SuckerPunch Entertainment - BareKnuckle Fighting Division

Professional website for SuckerPunch Entertainment's BareKnuckle Fighting Division.

## Pages

- **Home** - Hero section with featured stats and CTAs
- **About** - Mission statement and leadership information
- **Roster** - Grid of all 28+ athletes
- **Contact** - Contact form and team info

## Features

- Dark theme with red accents
- Responsive design (mobile, tablet, desktop)
- 28 athletes pre-loaded with data
- Professional styling throughout

## Getting Started

### Local Development
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Adding Assets

**Hero Image:**
- Save to `public/images/group-photo.jpg`
- Dimensions: 1920×1080px
- Update `app/page.js` to reference it

**Athlete Headshots:**
- Save to `public/images/athletes/`
- Filename format: `athlete_firstname_lastname.jpg`
- Component will auto-display them

## Deployment

Push to GitHub and connect to Vercel for automatic deployment.

## License

© 2024 SuckerPunch Entertainment. All rights reserved.
