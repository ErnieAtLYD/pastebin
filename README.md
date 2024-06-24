# Pastebin project

This project is a simple yet powerful Pastebin service. It allows users to store and share text-based information, such as code snippets, notes, or any other type of text content. The service assigns unique URLs to each text snippet, which can be shared with others, allowing them to access and view the content.

## Tech Stack

This project was built using the following technologies:
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [shadcn/ui](https://ui.shadcn.com/) and [Tailwind CSS](https://tailwindcss.com/), via https://v0.dev/
- [Vercel](https://vercel.com/)
- [KV Database](https://kvdb.io/)
- [pnpm](https://pnpm.io/)
- GitHub Actions

This project also represents my first foray into Next.js and Vercel architecture, my first time actually doing something related to CI/CD instead of talking about it like a big bowl of abstractions, and my first experience giving the side eye at the React Server Components because, seriously, is it 2004 again? Do any of you remember ASP pages, or were you all, like, three years old? 


### Local Installation

- Clone the repo
- Install NPM packages
- Start the development server at localhost:3000
- You will need to have the following environment variables set:
    - `NEXT_PUBLIC_KV_URL` - The URL of the KV database
    - `NEXT_PUBLIC_KV_TOKEN` - The token for the KV database

See the [Environment Variables page on Vercel](https://vercel.com/docs/projects/environment-variables).

Start the development server at localhost:3000 by running the following command:
```bash
pnpm dev
```

## Directory structure

```
├ __mocks__
├ __tests__
...
src/
├─ app/
│  ├─ api/
│  │  ├─ paste/
│  │  │  └─ route.ts -> /api/paste, server component
│  ├─ paste/
│  │  ├─ [id]/
│  │  │  └─ page.tsx, /paste/[id], client component
│  ├─ layout.tsx, layout component
│  ├─ page.tsx, home page
├─ components/
│  ├─ metadata.tsx
│  ├─ pastebin.tsx
│  ├─ ui/
│  │  ├─ button.tsx
│  │  └─ textarea.tsx
├─ lib/
│  └─ db.ts
```

https://v0.dev/t/BeFhZb3Yvcm


## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - your_email@gmail.com
Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)