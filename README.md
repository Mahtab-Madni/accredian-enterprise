# Accredian Enterprise — Full Stack Intern Assignment

A pixel-faithful clone of [enterprise.accredian.com](https://enterprise.accredian.com/) built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## Live Demo & Repository

- **Live URL**: (https://accredian-enterprise-two.vercel.app/)
- **GitHub Repository**: (https://github.com/Mahtab-Madni/accredian-enterprise)

---

## Tech Stack

| Layer        | Technology                      | Version |
| ------------ | ------------------------------- | ------- |
| Framework    | Next.js (App Router)            | 16.2.4  |
| Language     | TypeScript                      | 5.x     |
| Styling      | Tailwind CSS                    | 4.x     |
| UI Icons     | React Icons & Lucide React      | Latest  |
| Deployment   | Vercel                          | -       |
| Data Storage | JSON file via Next.js API Route | -       |

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/Mahtab-Madni/accredian-enterprise.git
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
# Open http://localhost:3000 in your browser

# 4. Build for production
npm run build

# 5. Start production server
npm start
```

### Development Tips

- Hot reload is enabled by default in dev mode
- Tailwind CSS watch is automatic
- TypeScript errors will show in console and browser

---

## Project Structure

```
accredian-enterprise/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky navigation with smooth scroll
│   │   ├── Hero.tsx                # Hero section with CTA button
│   │   ├── Stats.tsx               # Animated statistics display
│   │   ├── AccredianEdge.tsx       # Key features and edge sections
│   │   ├── CAT.tsx                 # Concept/Application/Tools framework
│   │   ├── HowItWorks.tsx          # 3-step delivery process
│   │   ├── FAQs.tsx                # Tabbed accordion for FAQs
│   │   ├── Testimonials.tsx        # Testimonial carousel
│   │   ├── LeadForm.tsx            # Lead capture modal form
│   │   └── Footer.tsx              # Footer with links & contact
│   ├── api/
│   │   └── leads/
│   │       └── route.ts            # POST & GET API for leads
│   ├── globals.css                 # Global Tailwind styles
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Main page (orchestrates all components)
├── public/                         # Static assets
├── data/                           # JSON storage for leads (created at runtime)
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.mjs
├── postcss.config.mjs
└── README.md
```

---

##  Approach Taken

### 1. **Reference Site Analysis**

- Analyzed the original Accredian Enterprise website structure
- Identified 10 major sections: Navbar, Hero, Stats, Edge, CAT, How It Works, FAQs, Testimonials, Footer, and Lead Form
- Documented color palette (blue `#2563eb`, dark gray `#111827`), typography hierarchy, and spacing patterns

### 2. **Component-First Architecture**

- Each page section isolated as a reusable React component
- Props interface for parent-child communication (e.g., `onOpenForm` callback)
- Functional components with hooks (useState, useEffect) for state management
- Zero external component libraries — built everything from scratch using Tailwind

### 3. **Responsive Design Strategy**

- Mobile-first CSS approach using Tailwind responsive prefixes (`md:`, `lg:`, `sm:`)
- Tested across breakpoints: 320px (mobile), 768px (tablet), 1024px (desktop)
- All sections adapt gracefully without breaking layout

### 4. **Interactive Features**

- **Navbar**: Sticky positioning with smooth scroll links using anchor IDs
- **Stats**: Animated count-up numbers with IntersectionObserver (triggers when in viewport)
- **FAQs**: Tabbed category navigation + accordion expand/collapse
- **Testimonials**: Carousel with dot navigation
- **Lead Form**: Modal with form validation, loading states, and success feedback

### 5. **API Integration (Bonus Feature)**

- Built custom `/api/leads` POST endpoint to capture form submissions
- Form data stored to `data/leads.json` file
- GET endpoint to retrieve all leads (useful for admin dashboard)
- Error handling & validation for required fields

---

## AI Usage Explanation

### Where AI Helped

| Component        | AI Assistance                                               | Manual Modifications                                                      |
| ---------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Navbar.tsx**   | Generated sticky nav logic with scroll shadow effect        | Adjusted colors, added smooth scroll behavior, tested anchor links        |
| **Stats.tsx**    | Drafted IntersectionObserver pattern for count-up animation | Rewrote animation logic to fix re-trigger issues on scroll                |
| **FAQs.tsx**     | Created accordion state management structure                | Fixed button centering, adjusted spacing, improved keyboard accessibility |
| **LeadForm.tsx** | Generated form structure and basic validation               | Added loading states, success message design, styled form fields          |
| **API Route**    | Drafted POST handler with JSON file storage                 | Added GET endpoint, improved error handling, added timestamps             |
| **Styling**      | Suggested Tailwind class combinations for all components    | Fine-tuned spacing, colors, shadows to match original design              |
| **TypeScript**   | Generated type interfaces (Props, States)                   | Added proper error typing, improved union types                           |

### What AI Did NOT Do

- AI did not generate the entire component tree
- AI did not copy templates or use boilerplate starters
- Each component was reviewed and modified for accuracy against the reference design
- All spacing, color, and typography were manually adjusted to match the original

### Thinking Process

- Used AI as a brainstorming and scaffolding tool, not a copy-paste solution
- Reviewed all AI suggestions and tested them in the browser
- Made deliberate architectural choices (e.g., using flexbox instead of grid in certain sections)

---

##  Features Implemented

### Core Features 

- [x] Fully responsive landing page (mobile + desktop)
- [x] 10 major sections with smooth scrolling
- [x] Sticky navigation bar with active state highlighting
- [x] Component-based architecture with reusable pieces
- [x] TypeScript for type safety
- [x] Tailwind CSS for styling
- [x] Clean, readable code structure

### Bonus Features 

- [x] Lead capture form with modal design
- [x] Form validation (name, email, company required)
- [x] API endpoint to store lead data
- [x] Success/error states with user feedback
- [x] Animated counter statistics
- [x] FAQ accordion with category tabs
- [x] Testimonial carousel

---

##  API Endpoints

### POST `/api/leads`

Capture lead information from the form.

**Request:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "phone": "+919876543210",
  "domain": "Gen-AI Mastery",
  "candidates": "50",
  "delivery": "Online"
}
```

**Response:**

```json
{
  "success": true,
  "lead": {
    "id": 1682077200000,
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-04-22T10:30:00Z"
  }
}
```

### GET `/api/leads`

Retrieve all captured leads.

**Response:**

```json
{
  "leads": [
    { "id": 1, "name": "John Doe", "email": "john@example.com", ... },
    { "id": 2, "name": "Jane Smith", "email": "jane@example.com", ... }
  ]
}
```

---

##  Improvements With More Time

1. **Database Integration**
   - Replace JSON file storage with PostgreSQL or MongoDB
   - Use Prisma ORM for type-safe database queries
   - Enable lead management with filtering and sorting

2. **Email Notifications**
   - Send automated confirmation email to leads using Resend or Nodemailer
   - Admin notification when new lead captured
   - Weekly lead summary reports

3. **Authentication & Admin Dashboard**
   - Add NextAuth.js for admin login
   - Build admin dashboard to view and manage leads
   - Export leads to CSV/Excel

4. **Advanced Animations**
   - Integrate Framer Motion for scroll-reveal animations
   - Parallax effects on hero section
   - Smooth page transitions

5. **Image Optimization**
   - Use Next.js `<Image />` component for automatic optimization
   - Add lazy loading and blur placeholders
   - Replace all external image links with optimized versions

6. **CMS Integration**
   - Connect FAQs and testimonials to Contentful or Sanity CMS
   - Enable non-technical updates without code changes
   - Version control for content changes

7. **Analytics & Monitoring**
   - Integrate Vercel Analytics or PostHog for user behavior tracking
   - Monitor form completion rates and drop-off points
   - SEO optimization with Next.js metadata API

8. **Performance Enhancements**
   - Implement code splitting and lazy loading for components
   - Optimize bundle size
   - Add service worker for offline support

9. **Accessibility Improvements**
   - Add ARIA labels and semantic HTML
   - Keyboard navigation for all interactive elements
   - Screen reader testing and fixes

10. **Testing**
    - Unit tests with Jest and React Testing Library
    - E2E tests with Playwright
    - Form validation edge case testing

---

## 📄 License

MIT License — feel free to use this for reference or personal projects.

---

## Author

**Mahtab Madni**  
Full Stack Developer Intern Submission  
April 2026
