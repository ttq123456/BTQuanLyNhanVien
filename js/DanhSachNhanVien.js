function DanhSachNhanVien(){
    this.mangNV = [];

    this.themNV = function(nv){
        this.mangNV.push(nv);
    }

    this.timViTri = function(maNVXoa){
        var viTri = -1;
        viTri = this.mangNV.findIndex(function(nv){
            return maNVXoa == nv.taiKhoan;
        })
        return viTri;
    }

    this.xoaNV = function(maNVXoa) {
        var viTri = this.timNV(maNVXoa);
        if (viTri != -1) {
            this.mangNV.splice(viTri,1);
        }
    }
}