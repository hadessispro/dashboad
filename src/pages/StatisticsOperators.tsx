
const rows = [{ country:'Japan', operator:'docomo', operations:23, success:26.09, avg:34.21, banned:0, income:7.9108 }]
export default function StatisticsOperators(){
  return (<div className="space-y-4">
    <div className="flex gap-2 items-center">
      <div className="text-xl font-semibold">Statistics / Operators</div>
      <input placeholder="Search by operators" className="ml-auto px-3 py-2 rounded-lg border border-gray-200"/>
    </div>
    <div className="card overflow-hidden">
      <table className="table"><thead><tr><th>Country</th><th>Operator</th><th>Operations</th><th>Success</th><th>AVG</th><th>Banned</th><th>Income</th></tr></thead>
      <tbody>{rows.map((r,i)=>(<tr key={i}><td>{r.country}</td><td>{r.operator}</td><td>{r.operations}</td><td>{r.success}%</td><td>{r.avg}%</td><td>{r.banned}</td><td>${r.income}</td></tr>))}</tbody></table>
    </div>
  </div>)
}
