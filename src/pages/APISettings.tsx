
export default function APISettings(){
  const rows = [['NPP cấp 1','25 %','nạp tiền sau'],['npp cấp 3','20','nạp tiền trước'],['npp cấp 3','15','nạp tiền trước'],['ctv','10','nạp tiền trước']]
  return (<div className="space-y-3">
    <div className="flex gap-2"><button className="btn">chọn dữ liệu theo thời gian</button><button className="btn">quốc gia</button></div>
    <div className="card overflow-hidden">
      <table className="table"><thead><tr><th>Loại đối tác</th><th>mức triết khấu %</th><th>nạp tiền</th><th>Link API</th></tr></thead>
      <tbody>{rows.map((r,i)=><tr key={i}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td><button className="btn">copy</button></td></tr>)}</tbody></table>
    </div>
  </div>)
}
