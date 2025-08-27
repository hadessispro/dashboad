
export default function KhoSim(){
  const rows = [
    ['OGB dùng 3 tháng','14/3/25','09774431123','AX060589751E','14/5/25','M2','61','PVA','ĐÃ THAY',20],
    ['OGB dùng 3 tháng','14/3/25','09774431124','AX060589751F','14/5/25','M2','61','PVA','ĐÃ THAY',35],
    ['OGB dùng 3 tháng','14/3/25','09774431125','AX060589751G','14/5/25','M1','40','PVA','ĐANG DÙNG',29],
  ]
  const color = (revenue:number)=> revenue>=30?'bg-green-50': revenue>=20?'bg-amber-50':'bg-rose-50'
  return (<div className="space-y-3">
    <div className="flex flex-wrap gap-2">
      <button className="btn">chọn dữ liệu theo thời gian</button>
      <button className="btn">Nhập dữ liệu sim</button>
      <button className="btn">chọn dữ liệu theo quốc gia</button>
      <button className="btn btn-ghost">sim cần cắm vào hệ thống</button>
      <button className="btn btn-ghost">sim đạt 20 số</button>
      <button className="btn btn-ghost">sim đạt 25 số</button>
      <button className="btn btn-ghost">sim đạt 30 số</button>
    </div>
    <div className="card overflow-auto">
      <table className="table"><thead><tr><th>NGUỒN SIM</th><th>NGÀY ĐẶT HÀNG</th><th>SỐ SIM</th><th>ICCID</th><th>NGÀY KÍCH HOẠT</th><th>NGƯỜI DÙNG</th><th>MÁY DÙNG</th><th>COM</th><th>TÌNH TRẠNG</th><th>doanh thu</th></tr></thead>
      <tbody>{rows.map((r,i)=><tr key={i} className={color(Number(r[9]))}>{r.map((c,j)=><td key={j}>{c}</td>)}</tr>)}</tbody></table>
    </div>
  </div>)
}
