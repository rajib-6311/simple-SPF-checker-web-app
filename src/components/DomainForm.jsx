
export default function DomainForm({ onCheck, domain, setDomain }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (domain.trim()) {
      onCheck(domain);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        placeholder="Enter domain (e.g., google.com)"
        className="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition cursor-pointer"
      >
        Check SPF
      </button>
    </form>
  );
}
