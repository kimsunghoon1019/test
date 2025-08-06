export default function ListPage() {
  const items = ["항목 1", "항목 2", "항목 3", "항목 4", "항목 5"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">목록 페이지</h1>
      <ul className="list-disc list-inside text-xl text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
    </div>
  );
}
