<div align="center">
  <br />
    <a href="https://youtu.be/dGHFV_RMGag" target="_blank">
        <img width="920" alt="Image" src="https://github.com/user-attachments/assets/5c29c237-6b83-4596-9214-5a5dd5757e92" />
    </a>
  
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="javascript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="tailwindcss" />
  </div>

  <h3 align="center">AnonWitness</h3>

   <div align="center">
      An AI-Powered Eye-Witness & Incident reporting platform.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1.  [About](#about)
2.  [Tech Stack](#tech-stack)
3.  [Features](#features)
4.  [Quick Start](#quick-start)
 


## <a name="about">About</a>

AnonWitness is an AI-Powered Eye-Witness & Incident reporting platform that enables users to anonymously submit eye-witness updates and exact location on crimes and emergency situations.


## <a name="tech-stack">Tech Stack</a>

- Next.js
- TypeScript
- NextAuth for Authentication
- Neon PostgreSQL database
- Prisma
- React Hook Form
- Tailwind CSS
- Shadcn-ui
- GeminiAI
- Bcrypt for Password Encryption

## <a name="features">Features</a>

-  **Anonymous Reporting**: Report Incidents without revealing Your Identity.

- **Precise Location**: Share accurate incident location by just the tap of a button.

- **Live Photo Upload**: Capture and Share Images directly from the scene.

- **AI Genrated Captions**: AI scans images, and generates precise incident descriptions and captions.
  
- **Progress Tracking**: Monitor submitted reports and their progress.
  
- **Secure Communication**: Two-way secure communication channel with law enforcement.

## <a name="quick-start"> Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/techy-savant/PennySmart
cd PennySmart
```

**Installation**

```bash
# Clone the repository
git clone <your-repo-url>
cd anonymous-reporting-system

# Install dependencies
npm install

# Set up the database
npx prisma generate
npx prisma db push

# Start the development server
npm run dev
```

**Environment Setup**

Create a `.env` file in the root directory with the following variables:

```env

NEXT_PUBLIC_MAPBOX_API_KEY=your-mapbox-key
DATABASE_URL=postgresql:your-database-url
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000/api/auth"
GEMINI_API_KEY=your-gemini-api-key
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your-mapbox-access-api-key


```

**Deployment**

The application can be easily deployed on [Vercel](https://vercel.com):

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Configure the environment variables
4. Deploy!
