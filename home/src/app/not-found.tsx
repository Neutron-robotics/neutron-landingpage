"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <html>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
                />
                <style>{`
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    }
                    .container {
                        max-width: 600px;
                        padding: 0 20px;
                        margin: 0 auto;
                        text-align: center;
                    }
                    h1 {
                        font-size: 3rem;
                        margin-bottom: 20px;
                        color: #333;
                    }
                    p {
                        font-size: 1.2rem;
                        margin-bottom: 15px;
                        color: #666;
                    }
                    a {
                        color: #1e88e5;
                        text-decoration: underline;
                    }
                `}</style>
            </head>
            <body className="flex items-center justify-center h-screen bg-gray-200">
                <div className="container">
                    <h1>404 - Page Not Found</h1>
                    <p>The page you're looking for does not exist.</p>
                    <p>
                        You can go back to the{' '}
                        <Link href="/">
                            homepage
                        </Link>{' '}
                        or navigate to other pages using the menu.
                    </p>
                </div>
            </body>
        </html>
    );
}