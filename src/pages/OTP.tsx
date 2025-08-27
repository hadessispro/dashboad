
const rows = [
  { user:'M', type:'OTP', status:'Pending', phone:'070471334667', code:'SIGNAL', cost:'2.25 (25%)', created:'2025-08-14 12:57', expired:'2025-08-25 13:12' },
  { user:'GogetSMS API', type:'OTP', status:'Pending', phone:'090325356661', code:'OTHER (Rambler)', cost:'0.0225', created:'2025-08-14 12:57', expired:'2025-08-25 13:12' },
]
export default function OTP(){
  return (<div className="space-y-3">
    <div className="flex flex-wrap items-center gap-2"><button className="btn">chọn dữ liệu theo thời gian</button><button className="btn">chọn dữ liệu theo tên đại lý</button><button className="btn">chọn dữ liệu theo quốc gia</button></div>
    <div className="card overflow-hidden">
      <table className="table"><thead><tr><th>USER NAME</th><th>TYPE / STATUS</th><th>PHONE NUMBER</th><th>SERVICE CODE</th><th>COST</th><th>CREATED AT</th><th>EXPIRED AT</th><th></th></tr></thead>
      <tbody>{rows.map((r,i)=><tr key={i}><td>{r.user}</td><td>{r.type} / <b>{r.status}</b></td><td className="font-mono">{r.phone}</td><td>{r.code}</td><td>${r.cost}</td><td>{r.created}</td><td>{r.expired}</td><td>›</td></tr>)}</tbody></table>
    </div>
  </div>)
}
