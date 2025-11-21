import { useState } from "react";
import { useLocation } from "wouter";

export default function Terms() {
  const [accepted, setAccepted] = useState(false);
  const [, setLocation] = useLocation();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (accepted) {
      setLocation("/home");
    } else {
      alert("Please accept the terms and conditions to proceed.");
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        Please read these terms and conditions carefully before using WebStitch.
        By accessing or using our services, you agree to be bound by these
        terms.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Use of our services is at your own risk.</li>
        <li>
          Do not misuse our services or attempt to access them in unauthorized
          ways.
        </li>
        <li>
          We reserve the right to modify or terminate our services at any time.
        </li>
        <li>
          All content and intellectual property belong to WebStitch unless
          otherwise stated.
        </li>
      </ul>
      <form onSubmit={handleSubmit} className="mt-8">
        <label className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="accent-indigo-500 w-4 h-4"
          />
          <span>Do you accept these terms and conditions?</span>
        </label>
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-4 py-2 rounded-md font-semibold shadow"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
