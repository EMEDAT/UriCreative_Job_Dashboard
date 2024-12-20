export default function Filters() {
    return (
      <div className="flex items-center space-x-4">
        <select className="p-2 border rounded">
          <option value="">Filter by Status</option>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
    );
  }
  