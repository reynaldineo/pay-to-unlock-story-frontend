# Pay To Unlock Story Platform

A modern web application that enables authors to monetize their stories by allowing readers to purchase and unlock full story content.

## 🌟 Features

- **Browse Stories**: Explore a collection of stories with details like title, author, and price
- **Story Preview**: View story details and descriptions before purchasing
- **Secure Payments**: Purchase stories through a secure transaction system
- **Read Unlocked Content**: Access full stories after purchase with reading progress tracking
- **User Authentication**: Register and login to manage purchased stories
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Share Stories**: Share interesting stories with friends via social media

## 📸 Screenshots for Main Feature

Here are some key screenshots showcasing the application's main features:

| Page | Screenshot |
|------|------------|
| **Home Page** | ![Home Page](/docs/img/home.png) |
| **Story Detail** | ![Story Detail](/docs/img/story_detail.png) |
| **Read Story (No Access)** | ![No Access](/docs/img/story_read_no_access.png) |
| **Read Story (Unlocked)** | ![With Access](/docs/img/story_read_with_access.png) |

## 📋 Application Flow

1. **Browse**: Users can browse available stories on the homepage
2. **Preview**: Click on a story to view its details, including title, author, description, and price
3. **Authentication**: Login or register to purchase stories
4. **Purchase**: Buy a story using the integrated payment system
5. **Access**: After purchase, unlock and read the full story content
6. **Reading Experience**: Track reading progress and enjoy a clean reading interface

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **State Management**: Zustand with immer for immutable state updates
- **Styling**: Tailwind CSS with shadcn/ui components
- **API Integration**: Axios with React Query for data fetching
- **Form Handling**: React Hook Form with Zod validation
- **Authentication**: Custom auth implementation with cookie-based sessions

## 💻 Getting Started

First, install the dependencies:

```bash
# Using pnpm (recommended)
pnpm install
```

Then, run the development server:

```bash
# Using pnpm (recommended)
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 🔧 Environment Setup

Set up your enviroment variabel by copy the example. `cp .env.example .env`

```
NEXT_PUBLIC_API_URL_DEV=your_backend_api_url
```

## 📁 Project Structure

```
src/
├── app/                  # Next.js app directory
│   ├── (auth)/           # Authentication pages (login, register)
│   ├── (home)/           # Home page components and containers
│   └── stories/          # Story pages, including detail and read
├── components/           # Reusable components
│   ├── custom/           # Custom application components
│   ├── hoc/              # Higher-order components
│   └── ui/               # UI components based on shadcn/ui
├── lib/                  # Utility functions and API client
├── stores/               # Zustand state stores
└── types/                # TypeScript type definitions
```

## Backend Application

The backend application for this project is built with Golang using Gin and is available in a separate repository:

- [github.com/reynaldineo/pay-to-unlock-story-backend](https://github.com/reynaldineo/pay-to-unlock-story-backend)