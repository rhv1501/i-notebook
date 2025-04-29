import { useEffect } from "react";
import Navbar from "./Navbar";

const About = () => {
  useEffect(() => {
    document.title = "About - iNotebook";
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-12 text-white">
        <h1 className="text-4xl font-bold mb-6 text-indigo-400">
          About iNotebook
        </h1>

        <p className="mb-4 text-lg leading-7">
          <span className="font-semibold text-indigo-300">iNotebook</span> is
          your personal cloud-based note-taking assistant designed to help you
          stay organized, focused, and efficient. Whether you&apos;re a student,
          developer, or professional, iNotebook ensures your notes are always
          with you—anytime, anywhere.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-indigo-300">
          Why iNotebook?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>
            <strong className="text-indigo-200">Secure & Private:</strong> All
            notes are tied to your account—only you can view, edit, or delete
            them.
          </li>
          <li>
            <strong className="text-indigo-200">Simple & Fast:</strong> Clean
            UI, quick access, and minimal distractions for focused productivity.
          </li>
          <li>
            <strong className="text-indigo-200">Access Anywhere:</strong> Works
            on desktop or mobile with your login credentials.
          </li>
          <li>
            <strong className="text-indigo-200">Organized Experience:</strong>{" "}
            Quickly search, create, and manage your thoughts and to-dos.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-indigo-300">
          How it works
        </h2>
        <p className="text-base mb-4">
          Just sign up for free, log in, and start writing! Your notes are
          securely stored and can be accessed across devices. No clutter, no
          ads—just pure productivity.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-indigo-300">
          Privacy First
        </h2>
        <p className="text-base">
          We respect your privacy. Your notes are never shared or exposed, and
          we do not track your activity. Your data is yours—always.
        </p>
      </div>
    </>
  );
};

export default About;
