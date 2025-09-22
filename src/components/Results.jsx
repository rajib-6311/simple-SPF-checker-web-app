
export default function Results({ spfRecords, error, loading }) {
  if (loading) {
    return <p className="text-center text-gray-500">Checking...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center font-medium">{error}</p>;
  }

  if (spfRecords.length > 0) {
    return (
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">SPF Records:</h2>
        <ul className="space-y-2">
          {spfRecords.map((record, index) => (
            <li
              key={index}
              className="p-2 bg-gray-100 rounded border border-gray-300 text-sm break-words"
            >
              {record}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
}
