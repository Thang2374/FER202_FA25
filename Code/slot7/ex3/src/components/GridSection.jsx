export default function GridSection() {
  return (
    <div className="container my-4">
      {/* Hàng 1 */}
      <div className="row mb-0">
        <div className="col bg-secondary bg-opacity-25 border p-3">First col</div>
        <div className="col bg-secondary bg-opacity-25 border p-3">Second col</div>
      </div>

      {/* Hàng 2 */}
      <div className="row mb-0">
        <div className="col bg-secondary bg-opacity-25 border p-3">col</div>
        <div className="col bg-secondary bg-opacity-25 border p-3">col</div>
        <div className="col bg-secondary bg-opacity-25 border p-3">col</div>
      </div>

      {/* Hàng 3 */}
      <div className="row mb-0">
        <div className="col bg-secondary bg-opacity-25 border p-3">col</div>
        <div className="col bg-secondary bg-opacity-25 border p-3">col</div>
        <div className="col bg-secondary bg-opacity-25 border p-3">col</div>
      </div>
    </div>
  );
}