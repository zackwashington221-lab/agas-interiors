---
name: servicepro-architecture
description: Reference for the ServicePro project structure and frontend API integration status. Use this skill whenever generating code or building features for the ServicePro React Native mobile app, web app, or backend to ensure architectural consistency.
---

# ServicePro Architecture & API Reference

This skill combines the standard project structure and API integration guidelines for ServicePro.

## Project Structure

ServicePro is organised as three independent applications: the public website and admin dashboard, the backend API, and the technician mobile application.

```text
gleam-field/
├── website/                         # Customer website and admin dashboard
│   ├── src/
│   │   ├── routes/                  # TanStack file-based routes
│   │   ├── components/
│   │   │   ├── site/                # Navbar, footer, and public-site layout
│   │   │   ├── admin/               # Admin dashboard layout and utilities
│   │   │   └── ui/                  # Reusable UI primitives
│   │   ├── assets/                  # Images and visual assets
│   │   ├── data/                    # Demo and display data
│   │   ├── hooks/                   # Reusable React hooks
│   │   ├── lib/                     # API client and shared utilities
│   │   ├── styles.css               # Tailwind theme tokens and global styles
│   │   ├── router.tsx               # Router configuration
│   │   └── start.ts                 # TanStack Start client entry
│   ├── public/                      # Public static files
│   ├── package.json
│   └── vite.config.ts
│
├── backend/                         # Express API and real-time services
│   ├── src/
│   │   ├── config/                  # Environment, database, logging, Swagger
│   │   ├── middleware/              # Authentication, validation, and error flow
│   │   ├── models/                  # Mongoose data models
│   │   ├── modules/                 # Feature modules and route handlers
│   │   │   ├── auth/                # Authentication and session management
│   │   │   ├── bookings/            # Booking lifecycle
│   │   │   ├── technicians/         # Technician profiles and verification
│   │   │   ├── services/            # Service catalogue
│   │   │   ├── users/               # User administration
│   │   │   ├── payments/            # Payment operations
│   │   │   ├── notifications/       # User and admin notifications
│   │   │   ├── support/             # Support tickets
│   │   │   ├── reviews/             # Reviews and moderation
│   │   │   ├── content/             # Public website content
│   │   │   └── admin/               # Administrative reporting and controls
│   │   ├── sockets/                 # Socket.IO events
│   │   ├── scripts/                 # Admin and demo-data seeding
│   │   ├── test/                    # API tests
│   │   ├── utils/                   # Shared API helpers
│   │   └── server.ts                # API application entry
│   ├── public/uploads/              # User-uploaded files
│   ├── docker-compose.yml
│   └── package.json
│
├── mobile/                          # Expo React Native technician app
│   ├── index.ts                     # Expo registration entry
│   ├── App.tsx                      # Application provider composition
│   ├── src/
│   │   ├── navigation/              # Root stack and bottom tabs
│   │   ├── screens/                 # Auth, jobs, profile, messages, and more
│   │   ├── components/              # Shared mobile components
│   │   ├── controllers/              # Feature controllers for API workflows
│   │   ├── context/                 # Authentication and app-data contexts
│   │   ├── redux/                   # Store, slices, and API state
│   │   ├── theme/                   # Theme tokens and provider
│   │   ├── data/                    # Constants and local data
│   │   ├── helpers/                 # Shared helpers
│   │   ├── middlewares/             # Mobile middleware
│   │   └── types/                   # TypeScript types
│   ├── android/                     # Native Android project
│   ├── ios/                         # Native iOS project
│   ├── assets/                      # Mobile image assets
│   ├── app.json                     # Expo configuration
│   └── package.json
```

## How the applications connect

```text
Website (website/) ── REST API ──> Backend (backend/) ──> MongoDB
        │                                  │
        └────── Socket.IO notifications ───┘

Mobile (mobile/) ─── REST API / Socket.IO ─┘
```

## Common commands

Run commands from the application directory they belong to.

| Application | Development | Verification |
| --- | --- | --- |
| Website | `cd website && npm run dev` | `cd website && npm run build` |
| Backend | `cd backend && npm run dev` | `cd backend && npm run typecheck` or `npm test` |
| Mobile | `cd mobile && npm run start` | `cd mobile && npm run typecheck` |

## Conventions

- Keep web route files in `website/src/routes/`; shared web UI belongs in `website/src/components/`.
- Keep backend business logic inside the relevant `backend/src/modules/` feature directory, and shared behaviour in middleware, models, configuration, or utilities as appropriate.
- Keep the mobile `App.tsx` focused on provider composition. Add screens and navigation through `mobile/src/screens/` and `mobile/src/navigation/`.
- Use the `@/` alias within the website and mobile source trees for imports from their respective `src/` directories.

## Frontend ↔ API Integration Status

Base URL comes from `VITE_API_BASE_URL` (e.g. `http://localhost:4000/api/v1`).
Client lives in `src/lib/api.ts`. When the variable is unset, every wired screen falls back to demo data but still performs the correct navigation.

### ✅ Connected (live call + navigation wired)

| Screen | Endpoint | On success navigates to |
| --- | --- | --- |
| `/admin-login` | `POST /auth/login` | `/admin` (replace) |
| `/admin/*` (guard) | local session check | `/admin-login` when no token |
| Admin sidebar Logout | `POST /auth/logout` | `/admin-login` (replace) |
| `/book` step 6 | `POST /bookings` | `/booking-confirmation?ref=…&service=…` |
| `/booking-confirmation` | reads `?ref` | `/track?ref=…` via Track button |
| `/track` | `GET /bookings/:ref` (polls 15s) | timeline advances with live status |
| `/apply` | `POST /auth/register` (role `technician`) | success state |
| `/contact` | `POST /support/tickets` | success state |

### ⏳ Remaining — still on static JSON (`src/data/*.ts`)

Public site
- `/services`, `/services/$slug` → `GET /services`, `GET /services/:id`
- `/technicians`, `/technicians/$slug` → `GET /technicians`, `GET /technicians/:id`
- Home / Why Us / Pricing / FAQ content → `GET /cms`
- Reviews on technician profiles → `GET /reviews`
- Booking step 2 technician availability → `GET /technicians?service=&date=`
- File uploads in `/book` and `/apply` → `POST /files`

Admin panel
- `/admin` dashboard → `GET /admin/dashboard`, `GET /admin/stats`
- `/admin/bookings`, `/admin/bookings/$bookingId` → `GET /admin/bookings`, `GET /bookings/:id`,
  `PATCH /bookings/:id/assign`, `PATCH /bookings/:id/status`
- `/admin/technicians` → `GET /technicians`, `PATCH /users/:id/status`
- `/admin/verification`, `/admin/verification/$techId` → `GET /technicians/verification-queue`,
  `PATCH /technicians/:id/verification`
- `/admin/customers` → `GET /users`, `PATCH /users/:id/status`
- `/admin/services` → `POST|PATCH|DELETE /services`
- `/admin/calendar` → `GET /admin/calendar`, `POST /admin/calendar/leave`
- `/admin/payments` → `GET /payments`
- `/admin/reviews` → `GET /reviews`, `PATCH /reviews/:id/moderate`
- `/admin/support` → `GET /support/tickets`, `POST /support/tickets/:id/messages`
- `/admin/notifications` → `GET /notifications`, `POST /notifications/broadcast`
- `/admin/reports` → `GET /admin/reports`
- `/admin/cms` → `GET /cms`, `PUT /cms/:key`
- `/admin/settings` → `GET /admin/settings`, `PATCH /admin/settings/:scope`
- `/admin/profile` → `GET /auth/me`, `PATCH /auth/change-password`, `POST /auth/logout-all`

### Not yet on the backend
- Forgot password / OTP verification (`/auth/forgot-password`, `/auth/reset-password`)
- Realtime tracking over Socket.IO (`booking:status`, `technician:location`) — structure only
- Payment capture / refunds against a provider
