# Technical Report: Budget, Digital Services Budget Generator

Yanet Pérez (GitHub: ypmodev) · IT Academy · Budget Project · October 2026

Budget is a Single Page Application (SPA) developed with React that allows users to select and configure digital services, generate customized quotes and share them through a unique URL.

The project covers levels 1, 2 and 3 defined in the kickoff.

## 1. Scope and status

- **Level 1 (implemented):** selection of digital services, Web service configurator, dynamic total price calculation and a form to collect client information.
- **Level 2 (implemented):** quote history with search by client information and sorting by date, amount and name.
- **Level 3 (implemented):** generation of a unique URL for each quote and a sharing feature.
- **PDF bonus (future improvement):** functionality considered as a possible future improvement.

## 2. Technologies

- **React, TypeScript and Vite:** typed SPA.
- **Tailwind CSS and shadcn/ui:** mobile-first design (md and lg breakpoints) with accessible components.
- **React Hook Form and Zod:** declarative validation; data types are derived from the schema.
- **localStorage:** local persistence allowed by the briefing for the MVP.
- **Git/Gitflow, Trello and GitHub Actions:** version control, Kanban and deployment.
- **Vitest and Testing Library:** unit and component tests.

## 3. Structure

The code is organized by responsibility: the budget state is managed in `Budget`, and the logic is kept outside the components so it can be tested independently.

```text
src/
├── components/   views: Budget, BudgetList, ServiceCard, WebOptions,
│                 ExtraCostModal, FormClient, Banner
│   ├── layout/   Layout
│   └── ui/       shadcn base components (button, card, checkbox,
│                 dialog, input, select, sonner)
├── data/         services.json and texts.json (editable data and text)
├── lib/          utils.ts (shadcn/ui helper function)
├── pages/        SharedBudget (budget details)
├── router/       router.tsx
├── schemas/      clientFormSchema.ts (form validation)
├── services/     budgetStorage.ts (only access point to localStorage)
├── test/         ServiceCard.test.tsx and utils.test.ts
├── types/        shared types
└── utils/        calculateBudget.ts and budgetFilters.ts (logic without React)
```

## 4. Key decisions

- **Web pricing:** the €500 includes 1 page and 1 language; each additional item costs €30.
- **Data and text in JSON:** `services.json` contains the service data and `texts.json` stores the interface text.
- **Button-based controls:** page and language counters can only be increased or decreased using buttons. This prevents invalid values and allows keyboard interaction. The minimum value is obtained from the JSON file.
- **Additional cost notification:** an informational modal is displayed once per counter. The first click increases the quantity and displays the notification. When Web is deselected, the counters are reset and the notification becomes available again.
- **Form:** includes a single field for first and last name (both are required), a phone number of 9 to 15 digits, visually hidden labels and errors associated through ARIA attributes. The quote is not saved if no services are selected.
- **Persistence:** the `budgetStorage` service saves the unique ID, date, client information, selected services and total amount. Pages and languages are only stored when Web is selected.
- **History:** allows users to search for quotes and sort them using a single function based on three criteria: date, amount and client name. Each criterion supports ascending and descending order; clicking the active criterion again reverses the order.
- **Sharing:** the `/budget/:id` route allows users to view a quote's details using its identifier and displays its cost breakdown. The data is retrieved from `localStorage`, so access is limited to the browser where it was saved.
- **Accessibility:** semantic HTML, ARIA attributes, visible focus indicators, keyboard navigation and adequate contrast are used.

## 5. Management and good practices

- **Work organization:** task management using the Kanban methodology in Trello, with the columns Backlog, To Do, In Progress, In Review / Testing and Done. Tasks are organized into cards by epic.
- **Version control:** use of Git Flow with the `main`, `develop` and working branches (`feature/*`, `test/*` and `docs/*`). Small, descriptive commits are made using the prefixes `feat`, `fix`, `refactor`, `style`, `chore`, `test` and `docs`, with Pull Requests to `develop`.
- **Discrepancy resolution:** inconsistencies identified between the briefing and the mockups (example totals, names and fields) were documented together with the decisions made.
- **Coding best practices:** code written in English and application of the DRY (avoid duplication), KISS (keep it simple) and YAGNI (implement only what is necessary) principles, avoiding magic numbers.

## 6. Testing and quality

Automated tests have been implemented using Vitest and React Testing Library to check the functionality of utility functions and application components.

The code coverage achieved exceeds the required minimum of 20%, reaching 38.09% line coverage.

### Lighthouse audit

A Lighthouse audit was performed on the home page, using the production build and an incognito window.

**Desktop results:**

- Performance: 100
- Accessibility: 96
- Best Practices: 100
- SEO: 91

**Mobile results:**

- Performance: 96
- Accessibility: 96
- Best Practices: 100
- SEO: 91

## 7. Limitations and improvements

- **Sharing quotes:** currently, links only allow quotes to be viewed in the browser where they were created, since the data is stored in `localStorage`. As a future improvement, developing an API connected to a database is proposed, allowing access to quotes from different devices.
- **Cost breakdown (future improvement):** saving prices and the quote breakdown at the time of creation to avoid possible discrepancies if service prices change later.
- **Test coverage (future improvement):** expanding automated tests to cover budget calculation (`calculateTotalBudget`), history filters and client form validation.
- **PDF export (future improvement):** implementing the generation and download of quotes in PDF format.