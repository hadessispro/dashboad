
export default function Workers(){
  const rows = [
    {id:35056, email:'vuanhhuy0091@gmail.com', ports:0, program:0, status:'Working'},
    {id:35301, email:'daipham.pcd@gmail.com', ports:94, program:145, status:'Working'},
    {id:36045, email:'posedon891@icloud.com', ports:0, program:145, status:'Disabled'},
  ]
  return (<div className="space-y-3">
    <div className="flex justify-between">
      <div className="text-xl font-semibold">Workers</div>
      <div className="flex gap-2"><button className="btn">Instruction</button><button className="btn btn-primary">+ Add worker</button></div>
    </div>
    <div className="card overflow-hidden">
      <table className="table"><thead><tr><th>#</th><th>ID</th><th>Worker</th><th>Ports</th><th>Program</th><th>Status</th><th></th></tr></thead>
      <tbody>{rows.map((r,i)=>(<tr key={r.id}><td>{i+1}</td><td>{r.id}</td><td>{r.email}</td><td>{r.ports}</td><td>{r.program}</td><td>{r.status}</td><td>›</td></tr>))}</tbody></table>
    </div>
  </div>)
}
