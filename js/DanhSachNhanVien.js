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

    this.capNhatNV = function(nvCapNhat){
        var viTri = this.timViTri(nvCapNhat.taiKhoan);
        if (viTri != -1){
            this.mangNV[viTri] = nvCapNhat;
        }
    }

    this.timNhanVien = function(loai){
        var mangKQ = [];
        loai = loai.toLowerCase().replace(/\s/g,"");
        this.mangNV.map(function(nv){
            var loaiNVien = nv.loaiNV.toLowerCase().replace(/\s/g,"");
            if (loai == loaiNVien) {
                mangKQ.push(nv);
            }
        });

        return mangKQ;
    }
}