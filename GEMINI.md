# MediBook - Doctor Appointment System

MediBook is a web-based doctor appointment booking and management system built with Next.js (App Router), React, Tailwind CSS, and Axios. It provides dedicated portals and workflows for patients and doctors, including patient signup/login, doctor login, registration, doctor detail pages, appointment booking/checkout, patient dashboards, and doctor dashboards.

## Tech Stack & Architecture

- **Framework:** Next.js 16 (App Router) with React 19
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **HTTP Client:** Axios (`src/lib/axios.js`) for API integration
- **Cookie Management:** `js-cookie`
- **Testing:** Vitest with `@testing-library/react`, `@testing-library/jest-dom`, and jsdom

## Project Structure

```
medibook/
├── src/
│   ├── app/                         # Next.js App Router pages & components
│   │   ├── AppointmentCheckout/     # Appointment booking & checkout flow
│   │   ├── DoctorDashboard/         # Doctor management portal (appointments, profile)
│   │   ├── DoctorDetailPage/        # Doctor profile & details view
│   │   ├── DoctorLogin/             # Doctor authentication & login
│   │   ├── PatientDashboard/        # Patient portal & appointment history
│   │   ├── PatientLogin/            # Patient login
│   │   ├── PatientSignup/           # Patient registration
│   │   ├── RegisterAsDoctor/        # Doctor registration form
│   │   ├── globals.css              # Global styles & Tailwind imports
│   │   ├── layout.js                # Root layout wrapper
│   │   └── page.js                  # Home page
│   ├── components/                  # Shared UI components (Header, Footer, tests)
│   ├── lib/                         # Utility libraries (Axios instance configuration)
│   └── services/                    # API service modules (appointmentService, authService, doctorService)
├── public/                          # Static assets and SVGs
├── package.json                     # Project dependencies & scripts
├── vitest.config.js                 # Vitest testing configuration
├── vitest.setup.js                  # Vitest test setup file
└── jsconfig.json                    # Path aliases (`@/*` -> `./src/*`)
```

## Building and Running

### Development Server
```bash
npm run dev
```
Runs the development server at [http://localhost:3000](http://localhost:3000).

### Build for Production
```bash
npm run build
```

### Production Start
```bash
npm run start
```

### Linting
```bash
npm run lint
```

### Testing
```bash
# Run tests in watch mode via Vitest
npm test

# Run tests once (CI mode)
npm run test:run

# Run Vitest UI
npm run test:ui
```

## Development Conventions

- **Module Aliases:** Use `@/*` imports mapping to `./src/*` (configured in `jsconfig.json` and Vitest).
- **API Services:** Keep backend API interactions encapsulated within `src/services/` (`appointmentService.js`, `authService.js`, `doctorService.js`) utilizing the configured Axios instance in `src/lib/axios.js`.
- **Testing:** Write component and unit tests using Vitest and Testing Library (e.g., `*.test.jsx`). Ensure tests are maintained alongside code changes.
- **Styling:** Use Tailwind CSS v4 utility classes and custom styles in `globals.css`.

# Frontend Development Guidelines & System Instructions

## 🚨 Critical Scope & Workspace Boundaries
- **Strict File Isolation:** Modify **only** the component, page, or style file(s) explicitly targeted in the prompt. Never touch unmentioned components, layout wrappers, or global config files.
- **State & Props Boundary:** Do not refactor parent components, global stores, or shared hooks unless explicitly requested. If props or store values are missing, ask for context.
- **No Unrequested Dependencies:** Do not install new UI kits, icon packs, animation libraries, or state management packages. Use the styling system (CSS, Tailwind, CSS Modules) and libraries already present in the project.

---

## 🛠️ Step-by-Step Execution Workflow
Follow this exact order of operations for every task:

1. **Analyze:** Inspect the target file and adjacent UI files to identify established patterns (e.g., function components vs. arrow functions, styling approach, state hooks vs. props, naming conventions).
2. **Locate:** Identify the exact JSX/HTML block, state variable, or styling class requiring updates.
3. **Execute:** Provide only the precise component changes or markup required. Avoid reprinting huge, untouched JSX trees unless a full component replacement is requested.

---

## 💻 Frontend Code Style: Beginner-Friendly & Clear

### 1. Readability & State Management
- **Avoid Advanced Hooks:** Do **NOT** use premature optimization or advanced hooks such as `useCallback`, `useMemo`, `useActionState`, `useTransition`, or custom hook abstractions unless explicitly instructed or already required by adjacent code.
- **Stick to Core Hooks:** Rely primarily on standard `useState` and basic `useEffect` where needed. Keep state updates clear, predictable, and local.
- **Simple Conditional Rendering:** Prefer clean  ternary  early-exit guards or readable standard conditionals  
- **Descriptive Naming:** 
  - Handlers: Use action-oriented names (e.g., `handleFormSubmit`, `handleCloseModal` instead of generic `handleClick` or `submit`).
  - Booleans: Use standard prefix flags (e.g., `isOpen`, `isLoading`, `hasError`).
  - Components: Use PascalCase matching the file name.

### 2. Consistency & Styling
- **Match Existing Style Conventions:** Strictly mirror the established styling pattern of adjacent files (e.g., Tailwind CSS, Vanilla CSS, BEM naming, or CSS Modules).
- **Component Decomposition:** Do not over-abstract small elements into dozens of tiny sub-components prematurely. Keep the layout easy to read top-to-bottom.
- **Asset Usage:** Reuse existing UI components (buttons, cards, modals) and icons already imported in the project before creating new ones.

### 3. Clear Explanatory Comments
- Add plain-English comments above non-obvious lifecycle triggers (`useEffect`), complex data transformations, and conditional branches.
- Explain **what** the UI element represents and **why** a specific handler or side effect is triggered.

