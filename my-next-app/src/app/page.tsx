export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">환영합니다!</h1>
      <p className="text-xl text-gray-600">이것은 Next.js로 만든 간단한 웹사이트입니다.</p>
      <button onClick={() => alert('바보')} className="mt-8 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">클릭하세요</button>
    </div>
  );
}