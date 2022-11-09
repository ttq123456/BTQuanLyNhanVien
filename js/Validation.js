function Validation(){
    //kiểm tra rỗng
    this.checkEmpty = function(valInp, msgErr, spanID){
        if (valInp.trim() == ""){
            document.getElementById(spanID).innerHTML = msgErr;
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        return true;
    }

    //kiểm tra tài khoản
    this.checkTK = function(valInp, msgErr, spanID){
        valInp = valInp.trim();
        console.log(valInp.length);
        if (valInp.length < 4 || valInp.length > 6){
            document.getElementById(spanID).innerHTML = msgErr;
            
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        return true;
    }

    //kiểm tra tên
    this.checkName = function(valInp, msgErr, spanID){
        var regex = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (valInp.match(regex)){
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }

    //kiểm tra email
    this.checkEmail = function(valInp, msgErr, spanID){
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (valInp.match(regex)){
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }

    this.checkPass = function(valInp, msgErr, spanID){
        var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if (valInp.match(regex)){
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }

    this.checkNgayLam = function(valInp, msgErr, spanID){
        var regex = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if (valInp.match(regex)){
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }

    this.checkLuong = function(valInp, msgErr, spanID){
        valInp = Number(valInp);
        if (valInp >= 1000000 && valInp <= 20000000){
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }

    this.checkChucVu = function(selectID, msgErr, spanID){
        var index = document.getElementById(selectID).selectedIndex;
        if (index == 0 ){
            document.getElementById(spanID).innerHTML = msgErr;
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
            return true;
    }

    this.checkGioLam = function(valInp, msgErr, spanID){
        valInp = Number(valInp);
        if (valInp >= 80 && valInp <= 200){
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }
}