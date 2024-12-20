export default function Filters() {
  return (
    <div className="flex items-center space-x-4">
      <select className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400">
        <option value="">Filter by Status</option>
        <option value="pending">Pending</option>
        <option value="accepted">Accepted</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
}
  