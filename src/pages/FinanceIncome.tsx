
export default function FinanceIncome(){
  const rows = [
    ['1619682046','818082577291','Uber','SMS activation services','Activation','USD','+0.15','Successfully','24.08.2025 07:21'],
    ['1619681740','819052731460','Uber','SMS activation services','Activation','USD','+0.15','Successfully','24.08.2025 07:20'],
    ['1619675825','818015502400','Uber','SMS activation services','Activation','USD','+0.15','Successfully','24.08.2025 07:11'],
  ]
  return (<div className="space-y-3">
    <div className="flex items-center gap-2"><button className="btn">Income</button><button className="btn">Payments</button><button className="btn">Clear filters</button><div className="ml-auto text-sm">24 August, 2025</div></div>
    <div className="card overflow-hidden">
      <table className="table"><thead><tr><th>#</th><th>Phone</th><th>Service</th><th>Sale channel</th><th>Type</th><th>Currency</th><th>Income</th><th>Status</th><th>Date</th></tr></thead>
      <tbody>{rows.map((r,i)=><tr key={i}>{r.map((c,j)=><td key={j}>{c}</td>)}</tr>)}</tbody></table>
    </div>
    <button className="btn">⬇ Upload CSV table</button>
  </div>)
}
