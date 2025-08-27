
const rows = [
  { id: 590, country: 'Japan', service: 'Line msg', type:'Private', quantity:'0 / 480', income:'$8.5714 / $9', earned:'$0', status:'i', token:true },
  { id: 589, country: 'Japan', service: 'KakaoTalk', type:'Private', quantity:'0 / 1000', income:'$2.8571 / $3', earned:'$0', status:'i', token:false },
  { id: 588, country: 'Japan', service: 'WeChat', type:'Private', quantity:'0 / 1000', income:'$3.3333 / $3.5', earned:'$0', status:'i', token:true },
]
export default function P2POrders(){
  return (<div className="space-y-4">
    <div className="flex items-center gap-2">
      <button className="btn btn-primary">Creating a deal</button>
      <button className="btn">How does it work?</button>
      <button className="btn">Client instructions ▾</button>
      <button className="btn">Country</button>
      <button className="btn">Service</button>
      <button className="btn">Clear filters</button>
      <input className="ml-auto px-3 py-2 rounded-lg border border-gray-200" placeholder="Search"/>
    </div>
    <div className="card overflow-hidden">
      <table className="table"><thead><tr><th></th><th>ID</th><th>Country</th><th>Service</th><th>Type</th><th>Quantity</th><th>Your income / Client price</th><th>Earned</th><th>Status</th><th>Token</th><th></th></tr></thead>
      <tbody>{rows.map(r=><tr key={r.id}><td>⋮⋮</td><td>{r.id}</td><td>{r.country}</td><td>{r.service}</td><td>{r.type}</td><td>{r.quantity}</td><td>{r.income}</td><td className="text-emerald-600">+{r.earned}</td><td><span className="pill pill-green">i</span></td><td><input type="checkbox" defaultChecked={r.token}/></td><td>›</td></tr>)}</tbody></table>
    </div>
  </div>)
}
