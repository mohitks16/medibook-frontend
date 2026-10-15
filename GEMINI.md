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

## 🚨 CRITICAL RULE: File Modification Scope
* **Only modify the exact file(s) I explicitly mention.** 
* Do **NOT** touch, edit, or refactor any other files in the project workspace unless I give you direct permission.
* If you need information from another file, ask me for it instead of assuming or changing it.

## 💻 Coding Style Guidelines (Beginner-Friendly)
* **Keep It Simple:** Use clean, standard, and easy-to-understand code structures (e.g., standard `if/else` statements, basic loops, and clear function declarations).
* **No Advanced Features:** Do **NOT** use complex or rarely used features (avoid advanced arrow function chaining, complex ternary nests, obscure libraries, or high-level abstractions).
* **Write Detailed Comments:** Every function, logical branch, and variable block must have clear, plain-English comments explaining *what* it does and *why*.
* **Readable Names:** Use clear, descriptive names for variables and functions (e.g., use `totalPrice` instead of `tp`).

## 🧪 Unit Testing Instructions
When I ask you to write unit tests, strictly follow these beginner-friendly rules:

Focus strictly on these basic elements:

1. Basic UI Validation: Ensure the component renders correctly.
2. Common RTL Queries: Use standard queries like screen.getByRole, screen.getByLabelText, or screen.getByText.
3. User Event Actions: Write basic tests using userEvent to simulate clicks or typing inputs.
4. Props & Component Communication: Test that functions passed down as props (like onClick handlers) are called correctly when triggered.

Keep the code simple, well-commented, and readable for a junior developer. Do not use advanced production frameworks or complex configurations.
