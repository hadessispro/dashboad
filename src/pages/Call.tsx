
export default function Call(){
  return (<div className="space-y-4">
    <div className="flex gap-2"><button className="btn">chọn dữ liệu theo thời gian</button><button className="btn">chọn dữ liệu theo tên đại lý</button></div>
    <div className="card p-6">
      <div className="flex flex-wrap gap-2">
        <button className="btn">ADD TÊN ỨNG DỤNG</button>
        <button className="btn">ADD SỐ TỔNG ĐÀI</button>
        <button className="btn">ADD GIÁ</button>
        <button className="btn">ADD SỐ PHÚT</button>
        <button className="btn">CÓ GHI ÂM OTP</button>
        <button className="btn">0 GHI ÂM OTP</button>
        <button className="btn btn-primary">ADD</button>
      </div>
      <div className="mt-6 p-6 rounded-xl bg-emerald-50 text-emerald-800 text-lg">Danh sách ứng dụng sẽ hiển thị tại đây. Nếu chưa có, khách hàng có thể tự thêm.</div>
    </div>
  </div>)
}
