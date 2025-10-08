# 🚀 Alfa Space Agrocom | Admin Platform

The **administrative hub** for managing and featuring **Rice, Pulses, Wheat, and Wheat Flour** products — ensuring secure control over inventory and digital assets.

---

## 🧑‍💻 Maintainer  
✨ Maintained by [**om-bhargav**](https://github.com/om-bhargav)
🚀 Live Link: (https://alfa-space-agrocom-6pnl.vercel.app/)

---

## 🧭 Table of Contents
- [💡 Alfa Space Agrocom?](#-alfa-space-agrocom)
- [✨ Key Features](#-key-features)
- [🛠️ Technology Stack](#️-technology-stack)
- [📦 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [➡️ Usage & Routes](#️-usage--routes)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [🧑‍💻 Author](#-author)

---

## 💡 Alfa Space Agrocom?

This project provides a **zero-compromise admin backend** built on the **Next.js App Router** for managing your core product catalog. It ensures **security** and delivers a **lightning-fast experience** by:

- **Elevate Operational Security:** Leveraging Role-Based Access Control (RBAC) via middleware, ensuring only authorized users access sensitive data endpoints.  
- **Streamline Content Workflow:** Direct integration with Cloudinary simplifies product image uploads and asset management for your inventory.  
- **Future-Proof Development:** Built using best-in-class TypeScript patterns, making the codebase scalable, maintainable, and easy to extend.  
- **Used For Any Product-Based Website:** With little effort, the user can adapt it for any other product platform.

---

## ✨ Key Features

This project leverages modern **Next.js** and **Auth.js** patterns to provide a robust and secure foundation for administrative operations:

- 🔒 **Ironclad Authentication:** Implemented with **NextAuth.js (v5)** Credentials Provider and **bcryptjs** hashing for password security.  
- 🖼️ **Integrated Image Hosting:** Seamless, scalable image management powered by **Cloudinary**.  
- 🛡️ **Granular Access Control (RBAC):** Dynamic route and data restrictions based on user roles.  
- 🚀 **Zero-Trust Architecture:** Uses **Next.js Server Actions** for all backend logic, minimizing client-side exposure.  
- 🧩 **Mongoose ODM:** Reliable CRUD operations and structured data modeling with **MongoDB**.  
- 🎨 **Responsive UI:** Built with **Tailwind CSS** for an adaptive and accessible design.

---

## 🛠️ Technology Stack

| Category | Technology | Purpose |
|-----------|-------------|----------|
| **Framework** | Next.js (App Router) | Full-stack React framework |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **Authentication** | Auth.js (NextAuth v5) | Secure, modern authentication layer |
| **Database** | Mongoose | MongoDB Object Data Modeling (ODM) |
| **Media Hosting** | Cloudinary | Cloud-based image and video management |
| **Security** | bcryptjs | Password hashing and verification |

---

## 📦 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites
Make sure you have the following installed:
- Node.js (v18 or higher)
- npm or Yarn
- A running MongoDB instance (local or Atlas)

---

### Installation

Clone the repository:

\`\`\`bash
git clone https://github.com/om-bhargav/alfa-space-agrocom.git
cd alfa-space-agrocom
\`\`\`

Install dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

Run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Visit the app at [http://localhost:3000](http://localhost:3000).

---

### Environment Variables

Create a \`.env.local\` file in the root directory and add:

| Variable | Description | Example Value |
|-----------|-------------|----------------|
| \`MONGODB_URI\` | MongoDB connection string | \`mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/dbname\` |
| \`AUTH_SECRET\` | Session encryption key for Auth.js | \`your_long_random_secret_key\` |
| \`NEXTAUTH_SECRET\` | Alias for AUTH_SECRET | \`same_as_auth_secret\` |
| \`CLOUDINARY_CLOUD_NAME\` | Your Cloudinary name | \`your_cloud_name\` |
| \`CLOUDINARY_API_KEY\` | Cloudinary API key | \`123456789012345\` |
| \`CLOUDINARY_API_SECRET\` | Cloudinary API secret | \`a_secret_key_here\` |
| \`CLOUDINARY_UPLOAD_PRESET\` | Upload preset for client uploads | \`my_upload_preset\` |
| \`TYPE\` | Environment type | \`production\` |

---

## ➡️ Usage & Routes

### Initial Credentials (for Testing)
⚠️ **Security Warning:** These credentials are for development only.

| Role | Email | Password |
|------|--------|-----------|
| Admin | testmail2@testing.com | 123445678 |

---

### Key Application Routes

| Route | Description | Access Type |
|--------|-------------|--------------|
| \`/\` | Landing page | Public |
| \`/about/\` | About project/company | Public |
| \`/contact/\` | Customer inquiry form | Public |
| \`/admin/\` | Admin Login | Public |
| \`/admin/u/dashboard/\` | Admin dashboard | Authenticated |
| \`/admin/u/products/\` | Manage all products | Authenticated |
| \`/admin/u/products/addproduct/\` | Add a new product | Authenticated |
| \`/admin/u/products/editproduct/[id]/\` | Edit product details | Authenticated |
| \`/admin/u/listqueries/\` | Manage customer queries | Authenticated |
| \`/admin/u/listqueries/[id]/\` | View a specific query | Authenticated |
| \`/admin/u/settings/\` | User or system settings | Authenticated |
| \`/api/auth/signout\` | Session termination endpoint | Authenticated |

---

## 🤝 Contributing

Contributions are always welcome!  
If you find a bug or have an idea, feel free to open an issue or submit a pull request.

### Contribution Steps

1. Fork the repository  
2. Create a feature branch:  
   \`\`\`bash
   git checkout -b feature/AmazingFeature
   \`\`\`
3. Commit your changes:  
   \`\`\`bash
   git commit -m "Add some AmazingFeature"
   \`\`\`
4. Push the branch:  
   \`\`\`bash
   git push origin feature/AmazingFeature
   \`\`\`
5. Open a Pull Request  

---

## 📜 License

Distributed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for details.

---

## 🧑‍💻 Author

**Om Bhargav**  
- GitHub: [om-bhargav](https://github.com/om-bhargav)  
- LinkedIn: [om-bhargav-6a4495297](https://www.linkedin.com/in/om-bhargav-6a4495297/)
