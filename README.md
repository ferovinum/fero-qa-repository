# fero-qa-assignment

Ferovinum helps companies in the wine and spirits industry scale.

In this assignment, we showcase a very small slice of our business. In a typical scenario, a company
would get funding from us by selling us their inventory (a certain quantity at a certain price).

This is a simple project that uses react and typescript in this particular use case for a client.
They can see their inventory that they've sold to us and can sell more.

## Getting Started

You are expected to get familiar with this solution and come prepared for a code pairing interview.
The best place to start is `src/app/page.tsx`. It has most if not all of the functionality.

You are not expected to have depth in any of:

- tailwind
- shadcn/ui
- next.js
- @tanstack/table
- Spring Boot

## Getting Started

### Starting the Backend Server

The project uses a Spring Boot server with H2 database. To start the server:

```bash
# On Unix-like systems:
./gradlew bootRun

# On Windows:
gradlew.bat bootRun
```

This starts the API at [http://localhost:4001](http://localhost:4001).

You can access the H2 database console at [http://localhost:4001/h2-console](http://localhost:4001/h2-console) with:
- JDBC URL: jdbc:h2:mem:ferovinum
- Username: sa
- Password: (leave empty)

We only make use of 2 APIs:

```bash
POST /stocks
GET /stocks?client_id=
```

### Starting the Frontend

In another terminal, run the app:

```bash
npm run dev
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

## Learn More

To learn more about the technology used, take a look at the following resources:

- [React Documentation](https://react.dev/learn#) - learn about React.
- [TypeScript Documentation](https://www.typescriptlang.org/) - learn about TypeScript.
- [Tailwind Documentation](https://tailwindcss.com/docs/styling-with-utility-classes) - learn about Tailwind.
- [shadcn/ui Documentation](https://ui.shadcn.com/docs) - learn about shadcn/ui.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tanstack Table Documentation](https://tanstack.com/table/latest) - learn about Tanstack Table.
- [Spring Boot Documentation](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/) - learn about Spring Boot.
