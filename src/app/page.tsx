// File: app/page.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">StackOverflow Appwrite</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/questions" className="hover:underline">Questions</Link>
              </li>
              <li>
                <Link href="/tags" className="hover:underline">Tags</Link>
              </li>
              <li>
                <Link href="/users" className="hover:underline">Users</Link>
              </li>
              <li>
                <Link href="/login" className="hover:underline">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to StackOverflow Appwrite</h2>
          <p className="text-lg mb-8 text-gray-600">
            A community-driven platform to ask, answer, and explore programming questions.
          </p>
          <Link
            href="/questions"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
          >
            Explore Questions
          </Link>
        </div>
      </section>

      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">Ask Questions</h3>
            <p className="text-gray-600">Post your programming queries and get answers from the community.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">Explore Tags</h3>
            <p className="text-gray-600">Browse through tags to find specific topics of interest.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">Join the Community</h3>
            <p className="text-gray-600">Connect with developers and enhance your programming knowledge.</p>
          </div>
        </div>
      </section>

      <footer className="bg-blue-600 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 StackOverflow Appwrite. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
