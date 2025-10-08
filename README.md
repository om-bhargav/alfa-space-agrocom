🚀 Alfa Space Agrocom | Admin Platform
The administrative hub for managing and featuring Rice, Pulses, Wheat, and Wheat Flour products, ensuring secure control over inventory and digital assets.

🧑‍💻 Maintainer
✨ Maintained by om-bhargav

🧭 Table of Contents
Alfa Space Agrocom?

Key Features

Technology Stack

Getting Started

Prerequisites

Installation

Environment Variables

Usage & Routes

Author

Contributing

License

💡 Alfa Space Agrocom?
This project provides a zero-compromise admin backend built on the Next.js App Router for managing your core product catalog. It ensures security and delivers a lightning-fast experience by:

Elevate Operational Security: Leveraging Role-Based Access Control (RBAC) via middleware, ensuring only authorized users access sensitive data endpoints.

Streamline Content Workflow: Direct integration with Cloudinary simplifies product image uploads and asset management for your inventory.

Future-Proof Development: Built using best-in-class TypeScript patterns, making the codebase scalable, maintainable, and easy to extend.

Used For Any Type Of Products Featuring Website: With little effort user can change it according to him can use for his own project.

✨ Key Features
This project leverages modern Next.js and Auth.js patterns to provide a robust and secure foundation for administrative operations:

🔒 Ironclad Authentication: Implemented with NextAuth.js (v5) Credentials Provider and military-grade password protection using secure bcryptjs hashing, ensuring maximum login security.

🖼️ Integrated Image Hosting: Seamless, scalable file uploads and management powered by a Cloudinary integration, optimized for product listings.

🛡️ Granular Access Control (RBAC): Custom Middleware dynamically restricts access to routes and data based on the user's assigned role (admin, user).

🚀 Zero-Trust Architecture: Utilizes Next.js Server Actions for all critical database and business logic, minimizing client-side code exposure and enhancing performance.

🧩 Mongoose ODM: Structured and efficient data modeling using MongoDB, providing reliable CRUD operations for product catalogs and customer queries.

🎨 Responsive UI: Built with Tailwind CSS for an adaptive, accessible, and modern user interface that looks great on any device.

🛠️ Technology Stack
| Category | Technology | Purpose |
| Framework | Next.js (App Router) | Full-stack React framework. |
| Styling | Tailwind CSS | Utility-first CSS framework. |
| Authentication | Auth.js (NextAuth v5) | Secure, modern authentication layer. |
| Database | Mongoose | MongoDB Object Data Modeling (ODM). |
| Media Hosting | Cloudinary | Cloud-based image and video management. |
| Security | bcryptjs | Password hashing and verification. |

📦 Getting Started
Follow these steps to set up and run the project locally.

Prerequisites
Ensure you have the following installed:

Node.js (v18 or higher)

npm or Yarn

A running MongoDB instance (local or Atlas cluster)

Installation
Clone the repository:

git clone [https://github.com/om-bhargav/alfa-space-agrocom.git](https://github.com/om-bhargav/alfa-space-agrocom.git)
cd alfa-space-agrocom




Install dependencies:

npm install
# or
yarn install




Run the development server:

npm run dev
# or
yarn dev




The application will be available at http://localhost:3000.

Environment Variables
Before running, create a file named .env.local in the root directory and add the following variables.

| Variable | Description | Example Value |
| MONGODB_URI | Connection string for your MongoDB Atlas cluster. | mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/dbname |
| AUTH_SECRET | Required for Auth.js session encryption. Must be a complex, long, random string. | your_long_random_and_secret_key_here |
| NEXTAUTH_SECRET | Alias for AUTH_SECRET. Recommended to set both. | (Same as AUTH_SECRET) |
| CLOUDINARY_CLOUD_NAME | Your Cloudinary cloud name. | your_cloud_name |
| CLOUDINARY_API_KEY | Your Cloudinary API Key. | 123456789012345 |
| CLOUDINARY_API_SECRET | Your Cloudinary API Secret. | A_secret_key_from_cloudinary_portal |
| CLOUDINARY_UPLOAD_PRESET | The unsigned upload preset for client-side uploads. | my_upload_preset |
| TYPE | Used to define the environment type. | production |

➡️ Usage & Routes
Initial Credentials (For Testing)
⚠️ SECURITY WARNING: These are development/testing credentials.

| Role | Email | Password |
| Admin | testmail2@testing.com | 123445678 |

Key Application Routes
| Route | Description | Access Type |
| / | Application landing page. | Public |
| /about/ | General information about the project or company. | Public |
| /contact/ | Contact information and customer inquiry form. | Public |
| /admin/ | Admin Login Page for credential authentication. | Public |
| /admin/u/dashboard/ | Main hub and overview for authenticated users. | Authenticated |
| /admin/u/products/ | View and manage the list of all products (Rice, Pulses, Wheat, Flour). | Authenticated |
| /admin/u/products/addproduct/ | Dedicated form for adding a new product listing. | Authenticated |
| /admin/u/products/editproduct/[id]/ | Edit details of a specific product via ID. | Authenticated |
| /admin/u/listqueries/ | View and manage incoming customer queries/inquiries. | Authenticated |
| /admin/u/listqueries/[id]/ | Detailed view and response handling for a specific query. | Authenticated |
| /admin/u/settings/ | User profile or system configuration settings. | Authenticated |
| /api/auth/signout | Auth.js endpoint for session termination. | Authenticated |

🤝 Contributing
We welcome contributions! Please feel free to open an issue or submit a pull request if you find a bug or have an improvement suggestion.

Fork the repository.

Create your feature branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.

📜 License
Distributed under the MIT License. See LICENSE for more information.

🧑‍💻 Author
Om Bhargav

GitHub: https://github.com/om-bhargav

LinkedIn: https://www.linkedin.com/in/om-bhargav-6a4495297/
