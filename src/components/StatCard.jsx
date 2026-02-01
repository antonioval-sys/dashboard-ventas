export default function StatCard({ titulo, valor }) {
  return (
    <div className="bg-white p-4 roudded shadow">
      <h3 className="text-gray-400">{titulo}</h3>
      <p className="text-2xl font-bold">{valor}</p>
    </div>
  )
}

