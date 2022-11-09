function NhanVien(taiKhoan,hoTen,email,matKhau,ngayLam,luongCoBan,chucVu,gioLam,tongLuong,loaiNV){
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCoBan = luongCoBan;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = tongLuong;
    this.loaiNV = loaiNV;

    this.tinhLuong = function(){
        if (this.chucVu == "Sếp" ) {
            this.tongLuong = this.luongCoBan * 3;
        }
        else if (this.chucVu == "Trưởng phòng") {
            this.tongLuong = this.luongCoBan * 2;
        }
        else  this.tongLuong = this.luongCoBan;
    }

    this.xepLoai = function(){
        if (this.gioLam >= 192) {
            this.loaiNV = "Xuất sắc";
        }
        else if (this.gioLam >= 176){
            this.loaiNV = "Giỏi";
        } 
        else if (this.gioLam >= 160) {
            this.loaiNV = "Khá";
        }
        else this.loaiNV = "Trung Bình";
    }
}