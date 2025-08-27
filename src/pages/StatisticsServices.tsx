
const rows = [
  { service:'Telegram', operations:3, success:33.33, avg:33.33, banned:0, income:7.1608 },
  { service:'Uber', operations:5, success:80.00, avg:80.00, banned:0, income:0.6 },
  { service:'Netflix', operations:1, success:100.00, avg:100.00, banned:0, income:0.15 },
]
export default function StatisticsServices(){
  return (<div className="space-y-4">
    <div className="flex gap-2 items-center">
      <div className="text-xl font-semibold">Statistics / Services</div>
      <input placeholder="Search by services" className="ml-auto px-3 py-2 rounded-lg border border-gray-200"/>
    </div>
    <div className="card overflow-hidden">
      <table className="table"><thead><tr><th>Service</th><th>Operations</th><th>Success</th><th>AVG</th><th>Banned</th><th>Income</th></tr></thead>
      <tbody>{rows.map((r,i)=>(<tr key={i}><td className="font-medium">{r.service}</td><td>{r.operations}</td><td>{r.success}%</td><td>{r.avg}%</td><td>{r.banned}</td><td>${r.income}</td></tr>))}</tbody></table>
    </div>
  </div>)
}
