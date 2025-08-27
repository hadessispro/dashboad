
export default function Transactions(){
  const rows = [
    {id:'TRX-001', time:'24.08.2025 07:21', type:'Income', amount:'+0.15 USD', channel:'SMS activation services', status:'Success'},
    {id:'TRX-002', time:'24.08.2025 07:20', type:'Income', amount:'+7.1608 USD', channel:'Telegram', status:'Success'},
  ]
  return (<div className="space-y-3">
    <div className="text-xl font-semibold">Giao dịch - ví tiền</div>
    <div className="card overflow-hidden">
      <table className="table"><thead><tr><th>ID</th><th>Time</th><th>Type</th><th>Amount</th><th>Channel</th><th>Status</th></tr></thead>
      <tbody>{rows.map((r,i)=><tr key={i}><td>{r.id}</td><td>{r.time}</td><td>{r.type}</td><td className="text-emerald-600">{r.amount}</td><td>{r.channel}</td><td>{r.status}</td></tr>)}</tbody></table>
    </div>
  </div>)
}
