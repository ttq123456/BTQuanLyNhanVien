dsnv = new DanhSachNhanVien();
var validation = new Validation();

function getELE(id){
    return document.getElementById(id);
}

function setLocalStorage(){
    localStorage.setItem("DSNV",JSON.stringify(dsnv.mangNV));
}

function getLocalStorage(){
    if (localStorage.getItem("DSNV") != null){
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
    }
    hienThiNV(dsnv.mangNV);
}

getLocalStorage();

//thêm nhân viên
function themNV(){
    getELE("btnThemNV").disabled = false;
    var taiKhoan = getELE("tknv").value;
  //  getELE("tknv").disabled = false;
    var hoTen = getELE("name").value;
    var email = getELE("email").value;
    var matKhau = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCoBan = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

//kiểm tra validation   
    var isValid = true;
   
    taiKhoan = taiKhoan.replace(/\s/g,"");
   
    isValid &= validation.checkEmpty(taiKhoan,"Tài khoản không được để trống","tbTKNV") && validation.checkTK(taiKhoan,"Tài khoản phải từ 4-6 kí tự","tbTKNV");

    isValid &= validation.checkEmpty(hoTen, "Họ tên không được để trống","tbTen") && validation.checkName(hoTen, "Họ tên chưa đúng định dạng","tbTen");

    isValid &= validation.checkEmpty(email, "Email không được để trống","tbEmail") && validation.checkEmail(email, "Email chưa đúng định dạng","tbEmail");

    isValid &= validation.checkEmpty(matKhau, "Mật khẩu không được để trống","tbMatKhau") && validation.checkPass(matKhau, "Mật khẩu phải từ 6-10 ký tự, chứa ít nhất 1 chữ in hoa, 1 số và 1 kí tự đặc biệt","tbMatKhau");

    isValid &= validation.checkEmpty(ngayLam, "Ngày làm không được để trống","tbNgay") && validation.checkNgayLam(ngayLam, "Ngày làm chưa đúng định dạng","tbNgay");

    isValid &= validation.checkChucVu("chucvu","Chức vụ không được để trống","tbChucVu");

    isValid &= validation.checkEmpty(luongCoBan,"Lương cơ bản không được để trống","tbLuongCB") && validation.checkLuong(luongCoBan,"Lương cơ bản từ 1.000.000 - 20.000.000","tbLuongCB");

    isValid &= validation.checkEmpty(gioLam, "Giờ làm không được để trống","tbGiolam") && validation.checkGioLam(gioLam, "Giờ làm phải từ 80 - 200 giờ","tbGiolam")

    console.log(isValid);

    if (isValid){
        var nv = new NhanVien(taiKhoan,hoTen,email,matKhau,ngayLam,Number(luongCoBan),chucVu,Number(gioLam));
        nv.tinhLuong();
        nv.xepLoai();
        console.log(nv);
    
        dsnv.mangNV.push(nv);
        hienThiNV(dsnv.mangNV);
        setLocalStorage();
    }
    
}

//hiển thị nhân viên
function hienThiNV(mang){
    content = "";

    mang.map(function(nv,index){
        content += `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.loaiNV}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')">Xoá</button>
                    <button class="btn btn-success" onclick="xemNhanVien('${nv.taiKhoan}')" data-toggle="modal" data-target="#myModal">Xem</button>
                </td>
            </tr>    
        `;
    })

    getELE("tableDanhSach").innerHTML = content;

}

function xoaNhanVien(maNVXoa){
    dsnv.xoaNV(maNVXoa);
    console.log(maNVXoa);
    setLocalStorage();
    getLocalStorage();
}

function xemNhanVien(maNV){
    getELE("btnThemNV").disabled = true;

    var viTri = dsnv.timViTri(maNV);
   // console.log(dsnv.mangNV[viTri]);
    if (viTri > -1){
        getELE("tknv").value = dsnv.mangNV[viTri].taiKhoan;
        getELE("tknv").disabled = true;
        getELE("name").value = dsnv.mangNV[viTri].hoTen;
        getELE("email").value = dsnv.mangNV[viTri].email;
        getELE("password").value = dsnv.mangNV[viTri].matKhau;
        getELE("datepicker").value =  dsnv.mangNV[viTri].ngayLam;
        getELE("luongCB").value =  dsnv.mangNV[viTri].luongCoBan;
        getELE("chucvu").value = dsnv.mangNV[viTri].chucVu;
        getELE("gioLam").value = dsnv.mangNV[viTri].gioLam;
    }
}

//cập nhật nhân viên
function capNhatNV(){
   
    var taiKhoan = getELE("tknv").value;
    getELE("tknv").disabled = false;
    var hoTen = getELE("name").value;
    var email = getELE("email").value;
    var matKhau = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCoBan = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    //kiểm tra validation lại
    var isValid = true;
   
    taiKhoan = taiKhoan.replace(/\s/g,"");
   
    isValid &= validation.checkEmpty(taiKhoan,"Tài khoản không được để trống","tbTKNV") && validation.checkTK(taiKhoan,"Tài khoản phải từ 4-6 kí tự","tbTKNV");

    isValid &= validation.checkEmpty(hoTen, "Họ tên không được để trống","tbTen") && validation.checkName(hoTen, "Họ tên chưa đúng định dạng","tbTen");

    isValid &= validation.checkEmpty(email, "Email không được để trống","tbEmail") && validation.checkEmail(email, "Email chưa đúng định dạng","tbEmail");

    isValid &= validation.checkEmpty(matKhau, "Mật khẩu không được để trống","tbMatKhau") && validation.checkPass(matKhau, "Mật khẩu phải từ 6-10 ký tự, chứa ít nhất 1 chữ in hoa, 1 số và 1 kí tự đặc biệt","tbMatKhau");

    isValid &= validation.checkEmpty(ngayLam, "Ngày làm không được để trống","tbNgay") && validation.checkNgayLam(ngayLam, "Ngày làm chưa đúng định dạng","tbNgay");

    isValid &= validation.checkChucVu("chucvu","Chức vụ không được để trống","tbChucVu");

    isValid &= validation.checkEmpty(luongCoBan,"Lương cơ bản không được để trống","tbLuongCB") && validation.checkLuong(luongCoBan,"Lương cơ bản từ 1.000.000 - 20.000.000","tbLuongCB");

    isValid &= validation.checkEmpty(gioLam, "Giờ làm không được để trống","tbGiolam") && validation.checkGioLam(gioLam, "Giờ làm phải từ 80 - 200 giờ","tbGiolam")

    console.log(isValid);

    if (isValid){
        var nvCapNhat = new NhanVien(taiKhoan,hoTen,email,matKhau,ngayLam,Number(luongCoBan),chucVu,Number(gioLam));
        nvCapNhat.tinhLuong();
        nvCapNhat.xepLoai();
        console.log(nvCapNhat);
    
        dsnv.capNhatNV(nvCapNhat);
        hienThiNV(dsnv.mangNV);
        setLocalStorage();
        getLocalStorage();
    }
}

getELE("btnCapNhat").onclick = capNhatNV;

function timKiemNV(){
    var loai = getELE("searchName").value;
    if (loai == "") getLocalStorage();
    else {
        var mangKQ = dsnv.timNhanVien(loai);
        hienThiNV(mangKQ);
    }
}

getELE("btnTimNV").onclick = timKiemNV;
