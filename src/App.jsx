import { useState } from "react";
import DomainForm from "./components/DomainForm";
import Results from "./components/Results";

export default function App() {
  const [domain, setDomain] = useState("");
  const [spfRecords, setSpfRecords] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const checkSpf = async (domainName) => {
    setError("");
    setSpfRecords([]);
    setLoading(true);

    try {
      const res = await fetch(
        `https://cloudflare-dns.com/dns-query?name=${domainName}&type=TXT`,
        {
          headers: { accept: "application/dns-json" },
        }
      );

      if (!res.ok) throw new Error("Failed to fetch DNS records.");

      const data = await res.json();

      if (!data.Answer) {
        setError("No SPF records found.");
        setLoading(false);
        return;
      }

      const txtRecords = data.Answer.map((ans) =>
        ans.data.replace(/"/g, "")
      );

      const spf = txtRecords.filter((txt) => txt.startsWith("v=spf1"));

      if (spf.length === 0) {
        setError("No SPF record found.");
      } else {
        setSpfRecords(spf);
      }
    } catch (err) {
      setError("Error fetching SPF records.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          SPF Record Checker
        </h1>

        <DomainForm onCheck={checkSpf} domain={domain} setDomain={setDomain} />

        <Results spfRecords={spfRecords} error={error} loading={loading} />
      </div>
    </div>
  );
}
