/*var Man = {
    id: 0,
    ten: '',
    gioi_tinh: 0,
    bo: null,
    me: null,
    partner: [],
    con: [],
    nam_sinh: 0000,
    nam_mat: 0000,
    mieuta: ''
};*/

const chart = document.getElementById('chart');
const nguoi = document.getElementById('nguoi');

var human = [];

function Getdata(){
 //   console.log('Hello');
    $.ajax({
        url:"TreeFamily.php",
        method:"POST",
        data:{get_tree: 1},
        dataType:"text",
        success : function (result){
            var hu = [];
            hu = JSON.parse(result);
            if(hu.length > 0){
                human = hu;
            }
        //    console.log(human);
        }
    });
}

Getdata();

function ThemNguoi(id, name, gender, dad, mom, partner, child, ns, nm, desc){
    var Man = [id, name, gender, dad, mom, partner, child, ns, nm, desc];
    human.push(Man);
}

/*function HienThiHuman(list){
    chart.innerHTML = '';
    
    for (var i = 0; i < list.length; i++) {
        if(list[i] != null){
        var li = document.createElement('li');
        var span = document.createElement('span');
        span.id = 'Edit';
        span.setAttribute('name', list[i][0]);
        span.setAttribute('style', 'background: #eee; text-align: center;display: inline-block;height: 20px; width: 50px;')
        span.appendChild(document.createTextNode(list[i][1]));
        
        li.appendChild(span);
        chart.appendChild(li);
    }
    }
}*/

$(document).on('click', "#Chitiet", function () {
    if(human.length == 0){
        ThemNguoi(0, 'You', 0, null, null, [], [], '0000', '0000','');
    }
    
 //   console.log(human);
    HienThiHuman(human);
});

function ShowEdit(chiso){
    nguoi.innerHTML = '';
    
    var divv = document.createElement('div');
    divv.setAttribute('style', 'width: 100%;');
    var pp = document.createElement('h3');
    pp.appendChild(document.createTextNode(human[chiso][1]));
    divv.appendChild(pp);
    pp.setAttribute('style','font-size: 25px; text-align: center;');
    
    //ten
    var div1 = document.createElement('div');
    div1.setAttribute('style', 'width: 100%; margin-top: 10px; margin-left: 15px;');
    var pp1 = document.createElement('label');
    pp1.appendChild(document.createTextNode('Tên: '));
    div1.appendChild(pp1);
    pp1.setAttribute('style','font-size: 15px;');
    
    var ten = document.createElement('input');
    ten.setAttribute('type', 'text');
    ten.placeholder = 'name...';
    ten.setAttribute('value', human[chiso][1]);
    ten.id = 'ten';
    div1.appendChild(ten);
    ten.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee; margin-left: 5px;\n\
    width: 70%; height: 20px;');
    divv.appendChild(div1);
    
    //gioi tinh
    var div2 = document.createElement('div');
    div2.setAttribute('style', 'width: 100%; margin-top: 10px; margin-left: 15px;');
    var pp2 = document.createElement('label');
    pp2.appendChild(document.createTextNode('Giới tính: '));
    div2.appendChild(pp2);
    pp2.setAttribute('style','font-size: 15px;');
    
    var gioitinh = document.createElement('select');
    gioitinh.id = 'gioitinh';
    
    if(human[chiso][5].length > 0 || human[chiso][6].length > 0){
    if(human[chiso][2] == 0){
        var op = document.createElement('option');
        op.value = 0;
        op.setAttribute('selected', 'true');
        op.appendChild(document.createTextNode('Nam'));
        gioitinh.appendChild(op);
    } else{
        var op1 = document.createElement('option');
        op1.value = 1;
        op1.setAttribute('selected', 'true');
        op1.appendChild(document.createTextNode('Nữ'));
        gioitinh.appendChild(op1);
    }}
    else{
        var op = document.createElement('option');
        op.value = 0;
        op.appendChild(document.createTextNode('Nam'));
        var op1 = document.createElement('option');
        op1.value = 1;
        op1.appendChild(document.createTextNode('Nữ'));
        gioitinh.appendChild(op);
        gioitinh.appendChild(op1);
        for (var i = 0; i < gioitinh.options.length; i++) {
        if(gioitinh.options[i].value == human[chiso][2]){
            gioitinh.options[i].setAttribute('selected', 'true');
        }
        }   
    }
    div2.appendChild(gioitinh);
    gioitinh.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee; margin-left: 5px;\n\
    width: 60px; height: 20px;');
    divv.appendChild(div2);
    
    // nam sinh
    var div3 = document.createElement('div');
    div3.setAttribute('style', 'width: 100%; margin-top: 10px; margin-left: 15px;');
    var pp3 = document.createElement('label');
    pp3.appendChild(document.createTextNode('Năm sinh: '));
    div3.appendChild(pp3);
    pp3.setAttribute('style','font-size: 15px;');
    
    var ns = document.createElement('input');
    ns.setAttribute('type','text');
    ns.id = 'namsinh';
    ns.setAttribute('value', human[chiso][7]);
    div3.appendChild(ns);
    ns.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee; margin-left: 5px;\n\
    width: 50px; height: 20px;');
    divv.appendChild(div3);
    
    // nam mat
    var div4 = document.createElement('div');
    div4.setAttribute('style', 'width: 100%; margin-top: 10px; margin-left: 15px;');
    var pp4 = document.createElement('label');
    pp4.appendChild(document.createTextNode('Năm mất: '));
    div4.appendChild(pp4);
    pp4.setAttribute('style','font-size: 15px;');
    
    var nm = document.createElement('input');
    nm.setAttribute('type','text');
    nm.id = 'nammat';
    nm.setAttribute('value', human[chiso][8]);
    div4.appendChild(nm);
    nm.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee; margin-left: 5px;\n\
    width: 50px; height: 20px;');
    divv.appendChild(div4);
    
    // mieu ta
    var div5 = document.createElement('div');
    div5.setAttribute('style', 'width: 100%; margin-top: 10px; margin-left: 15px;');
    var pp5 = document.createElement('label');
    pp5.appendChild(document.createTextNode('Miêu tả: '));
    div5.appendChild(pp5);
    pp5.setAttribute('style','font-size: 15px;');
    
    var mt = document.createElement('textarea');
    mt.id = 'mieuta';
    mt.placeholder = 'Viết miêu tả...';
    mt.innerText = "" + human[chiso][9];
    div5.appendChild(mt);
    mt.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee; margin-left: 5px;\n\
    width: 60%; height: 50px;');
    divv.appendChild(div5);
    
    // button
    var btn = document.createElement('input');
    btn.setAttribute('type', 'button');
    btn.value = 'Luu';
    btn.name = chiso;
    btn.id = 'Save';
    divv.appendChild(btn);
    btn.setAttribute('style', 'background: blue;border-radius: 2px 2px 2px 2px;margin-top: 10px; \n\
margin-left: 10px;width: 50px; height: 30px; color: white;');
    
    var btn1 = document.createElement('input');
    btn1.setAttribute('type', 'button');
    btn1.value = 'Relation';
    btn1.id = 'Set_relation';
    btn1.name = chiso;
    divv.appendChild(btn1);
    btn1.setAttribute('style', 'background: blue;border-radius: 2px 2px 2px 2px;margin-top: 10px; \n\
margin-left: 5px;width: 80px; height: 30px; color: white;');
    
    var lq = 0;
    if((human[human[chiso][3]] != null || human[human[chiso][4]] != null) && human[chiso][6].length > 0){
        lq+=2;
    }
    if(human[chiso][6].length > 0){
     //   lq++;
        for (var i = 0; i < human[chiso][6].length; i++) {
            var vt = human[chiso][6][i];
            if(human[vt] != null){
            if(human[chiso][2] == 0){
                if(human[vt][4] == null && vt != 0){
                  //  lq+= 2;  
                }
            } else{
                if(human[vt][3] == null && vt != 0){
                //    lq+= 2;
                }
            }}
        }
    }
 //   console.log(human[chiso][1] + '-' + lq);
    if(lq < 2 && chiso != 0){
        divv.innerHTML += '  ';
        var btn2 = document.createElement('input');
        btn2.setAttribute('type', 'button');
        btn2.value = 'Xoa';
        btn2.id = 'Xoa';
        btn2.name = chiso;
        divv.appendChild(btn2);
        btn2.setAttribute('style', 'background: blue;border-radius: 2px 2px 2px 2px;margin-top: 10px; \n\
margin-left: 5px;width: 50px; height: 30px; color: white;');
    }
    
//    divv.innerHTML += '</br>  ';
    var btn3 = document.createElement('input');
    btn3.setAttribute('type', 'button');
    btn3.value = 'Huy';
    btn3.id = 'Cancel';
    divv.appendChild(btn3);
    btn3.setAttribute('style', 'background: blue;border-radius: 2px 2px 2px 2px;margin-top: 10px; \n\
margin-left: 10px;width: 50px; height: 30px; color: white;');
    
    nguoi.appendChild(divv);
}

$(document).on('click', "#Edit", function () {
    var id = $(this).attr('name');
    ShowEdit(id);
});

$(document).on('click', "#Cancel", function () {
    nguoi.innerHTML = '';
});

$(document).on('click', "#Xoa", function () {
    var id = $(this).attr('name');
    
    if(human[human[id][3]] != null){
        var vt = human[id][3];
        human[vt][6].splice(human[vt][6].indexOf(id), 1);
    }
    if(human[human[id][4]] != null){
        var vt = human[id][4];
        human[vt][6].splice(human[vt][6].indexOf(id), 1);
    }
    if(human[id][5].length > 0){
        for (var i = 0; i < human[id][5].length; i++) {
            var vt = human[id][5][i];
            human[vt][5].splice(human[vt][5].indexOf(id), 1);
        }
    }
    if(human[id][6].length > 0){
        for (var i = 0; i < human[id][6].length; i++) {
            var vt = human[id][6][i];
            if(human[id][2] == 0){
                human[vt][3] = null;
            } else{
                human[vt][4] = null;
            }
        }
    }
    human[id] = null;
    $('#Chitiet').click();
    nguoi.innerHTML = '';
});

$(document).on('click', "#Save", function () {
    var id = $(this).attr('name');
    
    var ten = $('#ten').val();
    var gt = 0;
    var gioitinh = document.getElementById('gioitinh');
    for (var i = 0; i < gioitinh.options.length; i++) {
        if(gioitinh.options[i].selected == true){
            gt = parseInt(gioitinh.options[i].value);
        }
    }
    var ns = $('#namsinh').val();
    var nm = $('#nammat').val();
    var mt = $('#mieuta').val();
    
    human[id][1] = ten;
    human[id][2] = gt;
    human[id][7] = ns;
    human[id][8] = nm;
    human[id][9] = mt;
    
    nguoi.innerHTML = '';
    $('#Chitiet').click();
});

function ShowRelation(chiso){
    nguoi.innerHTML = '';
    
    var divv = document.createElement('div');
    divv.setAttribute('style', 'width: 100%; max-height: 100%; overflow-y: scroll; overflow-x: hidden;');
    var pp = document.createElement('h3');
    pp.appendChild(document.createTextNode(human[chiso][1]));
    divv.appendChild(pp);
    pp.setAttribute('style','font-size: 25px; text-align: center;');
    
    //bo
    var div1 = document.createElement('div');
    div1.setAttribute('style', 'width: 100%; margin-top: 10px; margin-left: 15px;');
    var pp1 = document.createElement('label');
    pp1.appendChild(document.createTextNode('Bo: '));
    div1.appendChild(pp1);
    pp1.setAttribute('style','font-size: 15px;');
    
    var bo = document.createElement('input');
    bo.setAttribute('type', 'text');
    bo.disabled = true;
    if(human[human[chiso][3]] != null){
        bo.setAttribute('value', human[human[chiso][3]][1]);
    }
    div1.appendChild(bo);
    bo.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee; margin-left: 5px;\n\
    width: 30%; height: 20px;');
    divv.appendChild(div1);
    
    // me
    var pp2 = document.createElement('label');
    pp2.appendChild(document.createTextNode('Me: '));
    div1.appendChild(pp2);
    pp2.setAttribute('style','margin-left: 5px;font-size: 15px;');
    
    var me = document.createElement('input');
    me.setAttribute('type', 'text');
    me.disabled = true;
    if(human[human[chiso][4]] != null){
        me.setAttribute('value', human[human[chiso][4]][1]);
    }
    div1.appendChild(me);
    me.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee; margin-left: 5px;\n\
    width: 30%; height: 20px;');
    divv.appendChild(div1);
    
    // chong
    var div2 = document.createElement('div');
    div2.setAttribute('style', 'width: 100%; margin-top: 10px; margin-left: 15px;');
    var pp3 = document.createElement('label');
    pp3.appendChild(document.createTextNode('Chong: '));
    div2.appendChild(pp3);
    pp3.setAttribute('style','font-size: 15px;');
    
    var chong = document.createElement('input');
    chong.setAttribute('type', 'text');
    chong.disabled = true;
    var ch = '';
    for (var i = 0; i < human[chiso][5].length; i++) {
        if(human[human[chiso][5][i]][2] == 0){
            ch += human[human[chiso][5][i]][1] + ', ';
        }
    }
    chong.setAttribute('value', ch);
    div2.appendChild(chong);
    chong.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee; margin-left: 5px;\n\
    width: 60%; height: 20px;');
    divv.appendChild(div2);
    
    // vo
    var div3 = document.createElement('div');
    div3.setAttribute('style', 'width: 100%; margin-top: 10px; margin-left: 15px;');
    var pp4 = document.createElement('label');
    pp4.appendChild(document.createTextNode('Vo: '));
    div3.appendChild(pp4);
    pp4.setAttribute('style','font-size: 15px;');
    
    var vo = document.createElement('input');
    vo.setAttribute('type', 'text');
    vo.disabled = true;
    var voo = '';
    for (var i = 0; i < human[chiso][5].length; i++) {
        if(human[human[chiso][5][i]][2] == 1){
            voo += human[human[chiso][5][i]][1] + ', ';
        }
    }
    vo.setAttribute('value', voo);
    div3.appendChild(vo);
    vo.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee; margin-left: 5px;\n\
    width: 60%; height: 20px;');
    divv.appendChild(div3);
    
    // con
    var div4 = document.createElement('div');
    div4.setAttribute('style', 'width: 100%; margin-top: 10px; margin-left: 15px;');
    var pp5 = document.createElement('label');
    pp5.appendChild(document.createTextNode('Con: '));
    div4.appendChild(pp5);
    pp5.setAttribute('style','font-size: 15px;');
    
    var con = document.createElement('input');
    con.setAttribute('type', 'text');
    con.disabled = true;
    var cn = '';
    for (var i = 0; i < human[chiso][6].length; i++) {
        cn += human[human[chiso][6][i]][1] + ', ';
    }
    con.setAttribute('value', cn);
    div4.appendChild(con);
    con.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee; margin-left: 5px;\n\
    width: 60%; height: 20px;');
    divv.appendChild(div4);
    
    // button   

    var dacoR = 0;
    if(human[chiso][5].length > 0){
        for (var i = 0; i < human[chiso][5].length; i++) {
            var vtt = human[chiso][5][i];
            if(human[vtt] != null && human[vtt][3] != null && human[vtt][4] != null){
                dacoR = 1;
                break;
            }
        }
    }
    
    if(human[human[chiso][3]] == null){
        if(dacoR == 0){
        divv.innerHTML+='</br>';
        var Btn = document.createElement('input');
        Btn.setAttribute('type', 'button');
        Btn.value = 'Tao bo cho ' + human[chiso][1];
        Btn.id = 'tao_Bo';
        Btn.name = chiso;
        divv.appendChild(Btn);
        Btn.setAttribute('style', 'background: blue;border-radius: 2px 2px 2px 2px;margin-top: 10px; \n\
margin-left: 20px;width: 200px; height: 30px; color: white;');
        }
    } else{
        if(human[human[chiso][4]] == null){
        var vt = human[chiso][3];
        for (var i = 0; i < human[vt][5].length; i++) {
            var vtt = human[vt][5][i];
            if(human[vtt][2] == 1){
                divv.innerHTML+='</br>';
                var Btn = document.createElement('input');
                Btn.setAttribute('type', 'button');
                var bm = human[vtt][1];
                Btn.value = 'Set "' + bm + '" lam me cua "' + human[chiso][1] + '"';
                Btn.id = 'set_Parents';
                Btn.name = chiso;
                Btn.setAttribute('class', vtt);
                divv.appendChild(Btn);
                Btn.setAttribute('style', 'background: blue;border-radius: 2px 2px 2px 2px;margin-top: 10px; \n\
margin-left: 20px;width: 200px; height: 30px; color: white;');
            }
        }}
    }
    
    if(human[human[chiso][4]] == null){
        if(dacoR == 0){
        divv.innerHTML+='</br>';
        var Btn = document.createElement('input');
        Btn.setAttribute('type', 'button');
        Btn.value = 'Tao me cho ' + human[chiso][1];
        Btn.id = 'tao_Me';
        Btn.name = chiso;
        divv.appendChild(Btn);
        Btn.setAttribute('style', 'background: blue;border-radius: 2px 2px 2px 2px;margin-top: 10px; \n\
margin-left: 20px;width: 200px; height: 30px; color: white;');
        }
    } else{
        if(human[human[chiso][3]] == null){
        var vt = human[chiso][4];
        for (var i = 0; i < human[vt][5].length; i++) {
            var vtt = human[vt][5][i];
            if(human[vtt][2] == 0){
                divv.innerHTML+='</br>';
                var Btn = document.createElement('input');
                Btn.setAttribute('type', 'button');
                var bm = human[vtt][1];
                Btn.value = 'Set "' + bm + '" lam bo cua "' + human[chiso][1] + '"';
                Btn.id = 'set_Parents';
                Btn.name = chiso;
                Btn.setAttribute('class', vtt);
                divv.appendChild(Btn);
                Btn.setAttribute('style', 'background: blue;border-radius: 2px 2px 2px 2px;margin-top: 10px; \n\
margin-left: 20px;width: 200px; height: 30px; color: white;');
            }
        }}
    }
    
    
    if(human[chiso][2] == 1 && dacoR == 0){
        divv.innerHTML+='</br>';
    var ChongBtn = document.createElement('input');
    ChongBtn.setAttribute('type', 'button');
    ChongBtn.value = 'Tao chong cho ' + human[chiso][1];
    ChongBtn.id = 'tao_Chong';
    ChongBtn.name = chiso;
    divv.appendChild(ChongBtn);
    ChongBtn.setAttribute('style', 'background: blue;border-radius: 2px 2px 2px 2px;margin-top: 10px; \n\
margin-left: 20px;width: 200px; height: 30px; color: white;');
    }
    
    if(human[chiso][2] == 0 && dacoR == 0){
        divv.innerHTML+='</br>';
    var VoBtn = document.createElement('input');
    VoBtn.setAttribute('type', 'button');
    VoBtn.value = 'Tao vo cho ' + human[chiso][1];
    VoBtn.id = 'tao_Vo';
    VoBtn.name = chiso;
    divv.appendChild(VoBtn);
    VoBtn.setAttribute('style', 'background: blue;border-radius: 2px 2px 2px 2px;margin-top: 10px; \n\
margin-left: 20px;width: 200px; height: 30px; color: white;');
    }
    
    var taoCon = 1;
    if(human[chiso][2] == 1 && dacoR == 1){
        taoCon = 0;
    }
    
    if(taoCon == 1){
    divv.innerHTML+='</br>';
    var ConBtn = document.createElement('input');
    ConBtn.setAttribute('type', 'button');
    ConBtn.value = 'Tao con cho ' + human[chiso][1];
    ConBtn.id = 'tao_Con';
    ConBtn.name = chiso;
    divv.appendChild(ConBtn);
    ConBtn.setAttribute('style', 'background: blue;border-radius: 2px 2px 2px 2px;margin-top: 10px; \n\
margin-left: 20px;width: 200px; height: 30px; color: white;');
    }
     
    divv.innerHTML += '</br>';
    var btn3 = document.createElement('input');
    btn3.setAttribute('type', 'button');
    btn3.value = 'Huy';
    btn3.id = 'Cancel';
    divv.appendChild(btn3);
    btn3.setAttribute('style', 'background: blue;border-radius: 2px 2px 2px 2px;margin-top: 10px; \n\
margin-left: 40%;width: 50px; height: 30px; color: white;');
    
    // Xem moi quan he
    divv.innerHTML+='</br>';
    var mqh = document.createElement('input');
    mqh.setAttribute('type', 'button');
    mqh.value = 'Xem moi quan he voi ';
    mqh.id = 'Xem_QH';
    mqh.name = chiso;
    divv.appendChild(mqh);
    mqh.setAttribute('style', 'background: blue;border-radius: 2px 2px 2px 2px;margin-top: 10px; \n\
margin-left: 10px; height: 30px; color: white;');
    
    var nguoiQH = document.createElement('select');
    nguoiQH.id = 'mqh';
    
    for (var i = 0; i < human.length; i++) {
        if(human[i] != null && human[i][0] != chiso){
            var op = document.createElement('option');
            op.value = human[i][0];
            // op.setAttribute('selected', 'true');
            op.appendChild(document.createTextNode(human[i][1]));
            nguoiQH.appendChild(op);
        }
    }
    divv.appendChild(nguoiQH);
    nguoiQH.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee; margin-left: 5px;\n\
    width: 100px; height: 20px;');
    
    nguoi.appendChild(divv);
}

$(document).on('click', "#Xem_QH", function () {
    var id = parseInt($(this).attr('name'));
    
    var nqh = 0;
    var mqh = document.getElementById('mqh');
    for (var i = 0; i < mqh.options.length; i++) {
        if(mqh.options[i].selected == true){
            nqh = parseInt(mqh.options[i].value);
        }
    }
    
/*    console.log(human[id]);
    console.log(human[nqh]);*/
    
    var qhh = '';
    checkRoot = 0;
    
    parent1 = [];
    parent = [];
    doiThu = 0;
    ChuoiMan1(id);
    for (var i = 0; i < parent.length; i++) {
        parent1.push(parent[i]);
    }
    var doi1Thu = doiThu;
    console.log(parent1);
    console.log(doi1Thu);
    
    parent = [];
    doiThu = 0;
    ChuoiMan1(nqh);
    console.log(parent);
    console.log(doiThu);
    
    root = doiThu - root + 1;
    console.log(root);
    
    var Cuoi = 'khong the ket hon voi nhau';
    if(doi1Thu - root >= 3 && doiThu - root >= 3){
        Cuoi = 'co the ket hon voi nhau';
    }
    
    if(human[nqh][3] == id){
        qhh = 'Bo';
        XemQH(id, nqh, qhh, Cuoi);
    } else if(human[nqh][4] == id){
        qhh = 'Me';
        XemQH(id, nqh, qhh, Cuoi);
    } else if(human[nqh][5].includes(id)){
        if(human[nqh][2] == 0){
            qhh = 'Vo';
            XemQH(id, nqh, qhh, Cuoi);
        } else{
            qhh = 'Chong';
            XemQH(id, nqh, qhh, Cuoi);
        }
    } else if(human[nqh][6].includes(id)){
        qhh = 'Con';
        XemQH(id, nqh, qhh, Cuoi);
    } else{
        if(doi1Thu == doiThu){
            qhh = 'Anh, chi, em';
            if(human[id][3] == human[nqh][3] || human[id][3] == human[nqh][3]){
                qhh += ' ruot';
            }
            XemQH(id, nqh, qhh, Cuoi);
        } else if(doi1Thu != doiThu){
            var kc = Math.abs(doi1Thu - doiThu);
            if(kc == 1){
                if(human[id][2] == 0){
                    qhh = 'Chu (Bac trai)';
                    if(doi1Thu < doiThu){
                        XemQH(id, nqh, qhh, Cuoi);
                    } else{
                        XemQH(nqh, id, qhh, Cuoi);
                    }
                } else{
                    qhh = 'Co (Di, Bac gai)';
                    if(doi1Thu < doiThu){
                        XemQH(id, nqh, qhh, Cuoi);
                    } else{
                        XemQH(nqh, id, qhh, Cuoi);
                    }
                }
            } else if(kc == 2){
                if(human[id][2] == 0){
                    qhh = 'Ong';
                    if(doi1Thu < doiThu){
                        XemQH(id, nqh, qhh, Cuoi);
                    } else{
                        XemQH(nqh, id, qhh, Cuoi);
                    }
                } else{
                    qhh = 'Ba';
                    if(doi1Thu < doiThu){
                        XemQH(id, nqh, qhh, Cuoi);
                    } else{
                        XemQH(nqh, id, qhh, Cuoi);
                    }
                }
            } else if(kc >= 3){
                if(human[id][2] == 0){
                    qhh = 'Cu ong';
                    if(doi1Thu < doiThu){
                        XemQH(id, nqh, qhh, Cuoi);
                    } else{
                        XemQH(nqh, id, qhh, Cuoi);
                    }
                } else{
                    qhh = 'Cu ba';
                    if(doi1Thu < doiThu){
                        XemQH(id, nqh, qhh, Cuoi);
                    } else{
                        XemQH(nqh, id, qhh, Cuoi);
                    }
                }
            }
        }
    }
    
//    XemQH(id, nqh, 'Bo');
});

function XemQH(man1, man2, qh, cuoiK){
    nguoi.innerHTML = '';
    
    var divv = document.createElement('div');
    divv.setAttribute('style', 'width: 100%; max-height: 100%; overflow-y: scroll; overflow-x: hidden;');
    
    var pp = document.createElement('h3');
    pp.appendChild(document.createTextNode('Xet quan he'));
    divv.appendChild(pp);
    pp.setAttribute('style','font-size: 25px; text-align: center;');
    
    var span = document.createElement('span');
    span.appendChild(document.createTextNode('"' + human[man1][1] + '" la "'+ qh+'" cua "' + human[man2][1] + '"'));
    divv.appendChild(span);
    span.setAttribute('style','padding: 5px;background: #eee;margin: 20px 25px\n\
;display: inline-block;font-size: 12px; width: 200px; text-align: center;');
    
    divv.innerHTML += '</br>';
    var span1 = document.createElement('span');
    span1.appendChild(document.createTextNode('"' + human[man1][1] + '" va "' + human[man2][1] + '" '
    + cuoiK));
    divv.appendChild(span1);
    span1.setAttribute('style','padding: 5px;background: #eee;margin: 20px 25px\n\
;display: inline-block;font-size: 12px; width: 200px; text-align: center;');
    
    divv.innerHTML += '</br>';
    var btn3 = document.createElement('input');
    btn3.setAttribute('type', 'button');
    btn3.value = 'Huy';
    btn3.id = 'Cancel';
    divv.appendChild(btn3);
    btn3.setAttribute('style', 'background: blue;border-radius: 2px 2px 2px 2px;margin-top: 10px; \n\
margin-left: 40%;width: 50px; height: 30px; color: white;');
    divv.innerHTML += '</br>';
    
    nguoi.appendChild(divv);
}
var parent1 = [];
var root = 1;
var checkRoot = 0;

var parent = [];
var doiThu = 0;
function ChuoiMan1(man1){
    doiThu++;
    parent.push(man1);
    
    if(checkRoot == 0){
        if(parent1.includes(man1)){
            root = doiThu;
            checkRoot = 1;
        }
    }
    
    if(human[human[man1][4]] != null){
        if(human[human[human[man1][4]][3]] != null || human[human[human[man1][4]][4]] != null){
            ChuoiMan1(human[man1][4]);
        } else{
            if(human[human[man1][3]] != null){
                ChuoiMan1(human[man1][3]);
            } else{
                ChuoiMan1(human[man1][4]);
            }
        }
    } else if(human[human[man1][3]] != null){
        ChuoiMan1(human[man1][3]);
    } else{
        if(human[man1][5].length > 0){
            for (var i = 0; i < human[man1][5].length; i++) {
                var vt = human[man1][5][i];
                if(human[human[vt][3]] != null || human[human[vt][4]] != null){
                    doiThu--;
                    ChuoiMan1(vt);
                    break;
                }
            }
        }
    }
}

$(document).on('click', "#Set_relation", function () {
    var id = $(this).attr('name');
    ShowRelation(id);
});

function ThemMan(chiso, tt){
    nguoi.innerHTML = '';
    t = tt;
    // tt = 0 = bo, tt = 1 = me, tt = 2 = chong, tt = 3 = vo, tt = 4 = con
    var divv = document.createElement('div');
    divv.setAttribute('style', 'width: 100%;');
    // relation   
    var pp = document.createElement('label');
    pp.appendChild(document.createTextNode('Tao '));
    divv.appendChild(pp);
    pp.setAttribute('style','font-size: 20px; margin-left: 20%; margin-top: 20px;');
    
    var re = document.createElement('span');
    re.setAttribute('style', 'background: #eee; text-align: center;display: inline-block;height: 20px; width: 50px;');
    var rel = '';
    switch (tt) {
        case 0:
           rel = 'Bo' 
        break;
        case 1:
           rel = 'Me' 
        break;
        case 2:
           rel = 'Chong' 
        break;
        case 3:
           rel = 'Vo' 
        break;
        case 4:
           rel = 'Con' 
        break;
            
        default:
            
            break;
    }
    re.appendChild(document.createTextNode(rel));
    divv.appendChild(re);
    
    var ppp = document.createElement('label');
    ppp.appendChild(document.createTextNode(' cho ' + human[chiso][1]));
    divv.appendChild(ppp);
    ppp.setAttribute('style','font-size: 20px;');
    divv.innerHTML += '</br>';
    
    //ten
    var div1 = document.createElement('div');
    div1.setAttribute('style', 'width: 100%; margin-top: 10px; margin-left: 15px;');
    var pp1 = document.createElement('label');
    pp1.appendChild(document.createTextNode('Ten: '));
    div1.appendChild(pp1);
    pp1.setAttribute('style','font-size: 15px;');
    
    var ten = document.createElement('input');
    ten.setAttribute('type', 'text');
    ten.placeholder = 'name...';
    ten.id = 'ten';
    div1.appendChild(ten);
    ten.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee; margin-left: 5px;\n\
    width: 70%; height: 20px;');
    divv.appendChild(div1);
    
    // gioi tinh
    var div2 = document.createElement('div');
    div2.setAttribute('style', 'width: 100%; margin-top: 10px; margin-left: 15px;');
    var pp2 = document.createElement('label');
    pp2.appendChild(document.createTextNode('Gioi tinh: '));
    div2.appendChild(pp2);
    pp2.setAttribute('style','font-size: 15px;');
    
    var gioitinh = document.createElement('select');
    gioitinh.id = 'gioitinh';
    if(tt == 0 || tt == 2){
        var op = document.createElement('option');
        op.value = 0;
        op.setAttribute('selected', 'true');
        op.appendChild(document.createTextNode('Nam'));
        gioitinh.appendChild(op);
    } else if(tt == 1 || tt == 3){
        var op1 = document.createElement('option');
        op1.value = 1;
        op1.setAttribute('selected', 'true');
        op1.appendChild(document.createTextNode('Nu'));
        gioitinh.appendChild(op1);
    } else{
        var op = document.createElement('option');
        op.value = 0;
        op.setAttribute('selected', 'true');
        op.appendChild(document.createTextNode('Nam'));
        var op1 = document.createElement('option');
        op1.value = 1;
        op1.appendChild(document.createTextNode('Nu'));
        gioitinh.appendChild(op);
        gioitinh.appendChild(op1);
    }
    div2.appendChild(gioitinh);
    gioitinh.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee; margin-left: 5px;\n\
    width: 60px; height: 20px;');
    divv.appendChild(div2);
    
     // nam sinh
    var div3 = document.createElement('div');
    div3.setAttribute('style', 'width: 100%; margin-top: 10px; margin-left: 15px;');
    var pp3 = document.createElement('label');
    pp3.appendChild(document.createTextNode('Nam sinh: '));
    div3.appendChild(pp3);
    pp3.setAttribute('style','font-size: 15px;');
    
    var ns = document.createElement('input');
    ns.setAttribute('type','text');
    ns.id = 'namsinh';
    ns.setAttribute('value', '0000');
    div3.appendChild(ns);
    ns.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee; margin-left: 5px;\n\
    width: 50px; height: 20px;');
    divv.appendChild(div3);
    
    // nam mat
    var div4 = document.createElement('div');
    div4.setAttribute('style', 'width: 100%; margin-top: 10px; margin-left: 15px;');
    var pp4 = document.createElement('label');
    pp4.appendChild(document.createTextNode('Nam mat: '));
    div4.appendChild(pp4);
    pp4.setAttribute('style','font-size: 15px;');
    
    var nm = document.createElement('input');
    nm.setAttribute('type','text');
    nm.id = 'nammat';
    nm.setAttribute('value', '0000');
    div4.appendChild(nm);
    nm.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee; margin-left: 5px;\n\
    width: 50px; height: 20px;');
    divv.appendChild(div4);
    
    // mieu ta
    var div5 = document.createElement('div');
    div5.setAttribute('style', 'width: 100%; margin-top: 10px; margin-left: 15px;');
    var pp5 = document.createElement('label');
    pp5.appendChild(document.createTextNode('Mieu ta: '));
    div5.appendChild(pp5);
    pp5.setAttribute('style','font-size: 15px;');
    
    var mt = document.createElement('textarea');
    mt.id = 'mieuta';
    mt.placeholder = 'Viet mieu ta...';
    mt.setAttribute('text', human[chiso][9]);
    div5.appendChild(mt);
    mt.setAttribute('style', 'background: #fafafa;border: 1px solid #eeeeee; margin-left: 5px;\n\
    width: 60%; height: 50px;');
    divv.appendChild(div5);
    
    // button
    divv.innerHTML += '</br>';
    var btn = document.createElement('input');
    btn.setAttribute('type', 'button');
    btn.value = 'Luu';
    btn.name = chiso;
    btn.id = 'SaveMoi';
    divv.appendChild(btn);
    btn.setAttribute('style', 'background: blue;border-radius: 2px 2px 2px 2px;margin-top: 10px; \n\
margin-left: 10px;width: 50px; height: 30px; color: white;');
    
    divv.innerHTML += '  ';
    var btn2 = document.createElement('input');
    btn2.setAttribute('type', 'button');
    btn2.value = 'Huy';
    btn2.id = 'Cancel';
    divv.appendChild(btn2);
    btn2.setAttribute('style', 'background: blue;border-radius: 2px 2px 2px 2px;margin-top: 10px; \n\
margin-left: 10px;width: 50px; height: 30px; color: white;');
    
    nguoi.appendChild(divv);
}

$(document).on('click', "#tao_Bo", function () {
    var id = $(this).attr('name');
    ThemMan(id, 0);
});
$(document).on('click', "#tao_Me", function () {
    var id = $(this).attr('name');
    ThemMan(id, 1);
});
$(document).on('click', "#tao_Chong", function () {
    var id = $(this).attr('name');
    ThemMan(id, 2);
});
$(document).on('click', "#tao_Vo", function () {
    var id = $(this).attr('name');
    ThemMan(id, 3);
});
$(document).on('click', "#tao_Con", function () {
    var id = $(this).attr('name');
    ThemMan(id, 4);
});

var t = 0;
$(document).on('click', "#SaveMoi", function () {
    var idC = parseInt($(this).attr('name'));
    var id = parseInt(human.length);
    
    var ten = $('#ten').val();
    var gt = 0;
    var gioitinh = document.getElementById('gioitinh');
    for (var i = 0; i < gioitinh.options.length; i++) {
        if(gioitinh.options[i].selected == true){
            gt = parseInt(gioitinh.options[i].value);
        }
    }
    var ns = $('#namsinh').val();
    var nm = $('#nammat').val();
    var mt = $('#mieuta').val();
    
    ThemNguoi(id, ten, gt, null, null, [], [], ns, nm, mt);
    
    if(t == 0){
        human[idC][3] = id;
        if(human[human[idC][4]] != null){
            if(!human[human[idC][4]][5].includes(id)){
               human[human[idC][4]][5].push(id);
            }
            if(!human[id][5].includes(human[idC][4])){   
               human[id][5].push(human[idC][4]);
            }
        }
        human[id][6].push(idC);
    } else if (t == 1) {
        human[idC][4] = id;
        if(human[human[idC][3]] != null){
            if(!human[human[idC][3]][5].includes(id)){   
               human[human[idC][3]][5].push(id);
            }
            if(!human[id][5].includes(human[idC][3])){   
               human[id][5].push(human[idC][3]);
            }
        }
        human[id][6].push(idC);
       
    } else if (t == 2) {
        human[idC][5].push(id);
        human[id][5].push(idC);
    } else if (t == 3) {
        human[idC][5].push(id);
        human[id][5].push(idC);
    } else{
        human[idC][6].push(id);
        if(human[idC][2] == 0){
            human[id][3] = idC;
        } else{
            human[id][4] = idC;
        }  
    }
    
    nguoi.innerHTML = '';
    $('#Chitiet').click();
});

$(document).on('click', "#set_Parents", function () {
    var id = parseInt($(this).attr('name')); 
    var idC = parseInt($(this).attr('class'));// bo, me
    
 //   console.log(idC + '-' + id);
    
    var to = parseInt(human[idC][2]);
    
    if(to == 0){
        human[id][3] = idC;
        if(!human[idC][6].includes(id)){
            human[idC][6].push(id);
        }
    } else{
        human[id][4] = idC;
        if(!human[idC][6].includes(id)){
            human[idC][6].push(id);
        }
    }
    nguoi.innerHTML = '';
    $('#Chitiet').click();
});

var DaXet = [];
var dacoBo = [];

function DeQuy(tu, list){
    DaXet.push(tu);
    
    var ConKoBo = 0;
    if (list[tu][2] == 1 && list[tu][5].length > 0 && list[tu][6].length > 0) {
        for (var i = 0; i < list[tu][6].length; i++) {
            var vt = list[tu][6][i];
            if(list[vt] != null){
            if(list[list[vt][3]] == null){
                ConKoBo = 1;
                break;
            }}
        }
    }

    if(list[tu][2] == 0 || (list[tu][2] == 1 && list[tu][5].length == 0) || ConKoBo == 1){
    var li = document.createElement('li');
    li.id = list[tu][0];
    li.setAttribute('style','float:left; align-items: center; text-align:center; list-style-type: none; position:relative;\n\
    margin-left: 30px; margin-top: 50px; display: inline-block;z-index: 0;');
    
    var div = document.createElement('div');
    div.setAttribute('style', 'display: flex; justify-content: center;');
    
    var span = document.createElement('span');
    span.id = 'Edit';
    span.setAttribute('name', list[tu][0]);
    var mau = 'blue';
    if(list[tu][2] != 0){
        mau = 'red';
    }
    span.setAttribute('style', 'background: '+ mau +'; align-items: center; text-align: center;\n\
display: inline-block;height: 100px; width: 90px;color:white;');
    
    var ava = document.createElement('img');
    if(list[tu][2] == 0){
       ava.setAttribute('src', 'image/Nam.png');
    } else{
       ava.setAttribute('src', 'image/Nu.png');
    }
    ava.setAttribute('style', 'width: 60px; height:60px;');
    span.appendChild(ava);
    span.innerHTML +='</br>';
    
    span.appendChild(document.createTextNode(list[tu][1]));
    
    div.appendChild(span);
    li.appendChild(div);
    
    var ul = document.createElement('ul');
    ul.setAttribute('style', 'display: flex;');
 /*   var partner = [];
    partner.push(parseInt(list[tu][0]));*/
    
    li.appendChild(ul);
    chart.appendChild(li);
    
    if(list[tu][2] == 0){
    if(list[tu][5].length > 0){
        for (var i = 0; i < list[tu][5].length; i++) {
            var vt = list[tu][5][i];
            var spann = document.createElement('span');
            spann.id = 'Edit';
            spann.setAttribute('name', list[vt][0]);
            spann.setAttribute('style', 'background: red; margin-left: 5px; align-items: center; text-align: center;\n\
display: inline-block;height: 100px; width: 90px;color:white;');
            
            var ava2 = document.createElement('img');
            ava2.setAttribute('src', 'image/Nu.png');
            ava2.setAttribute('style', 'width: 60px; height:60px;');
            spann.appendChild(ava2);
            spann.innerHTML +='</br>';
            
            spann.appendChild(document.createTextNode(list[vt][1]));
            div.appendChild(spann);
         //   partner.push(vt);
        }
    }}
 //   ul.id = JSON.stringify(partner);
    }

    if(ConKoBo == 1){
        for (var i = 0; i < list[tu][6].length; i++) {
            var vt = list[tu][6][i];
            if(list[list[vt][3]] == null){
                if(DaXet.includes(parseInt(vt))){
                    var licon = document.getElementById(vt);
                    ul.appendChild(licon);
                    
                    if(list[vt][2] == 1 && list[vt][5].length > 0){
                        for (var j = 0; j < list[vt][5].length; j++) {
                            var vtt = list[vt][5][j];
                                console.log(vtt);
                            if(list[vtt][3] == null && list[vtt][4] == null){
                                var licon2 = document.getElementById(vtt);
                                if(licon2 != null){
                                    ul.appendChild(licon2);
                                }
                                 //   break;
                            }
                        }
                    }
                }
            }
        }
    }
    
    if(list[tu][2] == 0 || (list[tu][2] == 1 && list[tu][5].length == 0)){
    if(list[tu][6].length > 0){
        for (var i = 0; i < list[tu][6].length; i++) {
            var vt = list[tu][6][i];
            
            if(!DaXet.includes(parseInt(vt))){
                if(list[vt] != null){
                    DeQuy(vt, list);
                }
            } else{
                if(!dacoBo.includes(parseInt(vt))){
                    var ConKoBo2 = 0;
                     if (list[vt][2] == 1 && list[vt][5].length > 0 && list[vt][6].length > 0) {
                           for (var ii = 0; ii < list[vt][6].length; ii++) {
                               var vv = list[vt][6][ii];
                                if(list[list[vv][3]] == null){
                                  ConKoBo2 = 1;
                                  break;
                             }
                          }
                       }
                    if(list[vt][2] == 0 || (list[vt][2] == 1 && list[vt][5].length == 0) || ConKoBo2 == 1){
                        var licon = document.getElementById(vt);
                        ul.appendChild(licon);
                    } 
                    
                    if(list[vt][2] == 1 && list[vt][5].length > 0){
                        for (var j = 0; j < list[vt][5].length; j++) {
                            var vtt = list[vt][5][j];
                                console.log(vtt);
                            if(list[vtt][3] == null && list[vtt][4] == null){
                                var licon = document.getElementById(vtt);
                                if(licon != null){
                                    ul.appendChild(licon);
                                }
                                 //   break;
                            }
                        }
                    }
                }
            }
        }
    }}

    if(list[tu][2] == 0 || (list[tu][2] == 1 && list[tu][5].length == 0) || ConKoBo == 1){
    if(list[list[tu][3]] != null){
        var liBo = document.getElementById(list[tu][3]);
        if(liBo != null){
            liBo.getElementsByTagName('ul')[0].appendChild(li);
            dacoBo.push(list[tu][0]);
        } else{
            chart.appendChild(li);
        }
    } else if (list[list[tu][4]] != null) {
        var liMe = document.getElementById(list[tu][4]);
        if(liMe != null){
            liMe.getElementsByTagName('ul')[0].appendChild(li);
            dacoBo.push(list[tu][0]);
        } else{
            
            chart.appendChild(li);
        }
    } else{
        if(list[tu][2] == 0 && list[tu][5].length > 0){
        for (var i = 0; i < list[tu][5].length; i++) {
            var vt = list[tu][5][i];
            
            if(list[list[vt][3]] != null){
                var liBo = document.getElementById(list[vt][3]);
                if(liBo != null){
                    liBo.getElementsByTagName('ul')[0].appendChild(li);
                    dacoBo.push(list[vt][0]);
                } else{
                    chart.appendChild(li);
                }
             //   break;
            } else if (list[list[vt][4]] != null) {
                var liMe = document.getElementById(list[vt][4]);
                if(liMe != null){
                    liMe.getElementsByTagName('ul')[0].appendChild(li);
                    dacoBo.push(list[vt][0]);
                } else{
                    chart.appendChild(li);
                }
             //   break;
                
            }
    }
    }
    }
    }
}

function HienThiHuman(list){
    chart.innerHTML = '';
    var tenCC = document.getElementById("familyHead").textContent;
    
    var hh = document.createElement('h3');
    hh.appendChild(document.createTextNode('[' + tenCC + ']'));
    chart.appendChild(hh);
    
    for (var i = 0; i < list.length; i++) {
        if(list[i] != null && !DaXet.includes(parseInt(i))){
            DeQuy(i, list);
        }
    }
    
    var allDiv = chart.getElementsByTagName('div');
    for (var i = 0; i < allDiv.length; i++) {
        var chieudai = allDiv[i].offsetWidth;
        
        var allSpan = allDiv[i].getElementsByTagName('span');
        for (var j = 0; j < allSpan.length; j++) {
            if(j < allSpan.length - 1){
                var div1 = document.createElement('hr');
                var kk = (chieudai - 90 - (90+5)*(allSpan.length - 1))/2 + 45 + (90 + 5)*j;
                
        div1.setAttribute('style', 'content:""; position:absolute; top:20px; left:'+ kk +'px;\n\
 border-top: 2px solid #000000; width: 95px; z-index: -1;');
        allSpan[j].append(div1);
            }
            
            var id = parseInt(allSpan[j].getAttribute('name'));

        if(list[id][3] != null || list[id][4] != null){
            
            var div = document.createElement('hr');
            allSpan[j].append(div);
            var kc = (chieudai - 90 - (90+5)*(allSpan.length - 1))/2 + 45 + (90 + 5)*j;
            var cd = allDiv[i].parentElement.parentElement.offsetWidth/2 - kc - 30;
            var ofse = allSpan[j].offsetLeft + allSpan[j].parentElement.parentElement.offsetLeft + 30;
         //   console.log(allSpan[j]);
            
            var lef = 'left';
            var righ = 'right';
            if(ofse >= allDiv[i].parentElement.parentElement.offsetWidth/2){
                lef = 'right';
                righ = 'left';
                cd = ofse - allDiv[i].parentElement.parentElement.offsetWidth/2 + 15;
                kc = kc - cd; 
                
            } 
            div.setAttribute('style', 'content:""; position:absolute; top:-40px; left:'+kc+'px;\n\
 border-'+lef+': 2px solid #000000; height: 40px; z-index: -1;\n\
 border-top: 2px solid #000000; width: '+ cd +'px;\n\
border-'+righ+': 0px;');
        /*    console.log('' + cd + '-' +allDiv[i].parentElement.parentElement.offsetWidth/2 + '-'+kc 
            + '-' + ofse); */
        }
        }
    }
    
    var allUl = chart.getElementsByTagName('ul');
    for (var i = 0; i < allUl.length; i++) {
       
        if(allUl[i].children.length>0){
        
        var div1 = document.createElement('hr');
        div1.setAttribute('style', 'content:""; position:absolute; top:20px; left:50%;\n\
 border-left: 2px solid #000000; height: 90px; z-index: -1;');
        allUl[i].append(div1);
        }
    }
    
    DaXet = [];
    dacoBo = [];
}

$('#Luu_cay').on('click', function() {
    var data = '';
    data = JSON.stringify(human);
    console.log(data);
    
    $.ajax({
        url:"TreeFamily.php",
        method:"POST",
        data:{tree_data: data},
    //    dataType:"JSON",
        success : function (result){
            alert(result);
        }
    });
});

$('#veHome').on('click', function (){
   window.location = "home.php"; 
});

var scaleChart = 1;
$('#zoomOut').on('click', function(){
    if(scaleChart > 0.2){
        $('#chart').animate({ 'zoom': scaleChart-0.2 }, 400);
        scaleChart -= 0.2;
    }
});

$('#zoomIn').on('click', function(){
    if(scaleChart < 1.5){
        $('#chart').animate({ 'zoom': scaleChart+0.2 }, 400);
        scaleChart += 0.2;
    }
});

function DoCapture(){
    var elm = $('#Bigchart').get(0);
 
    var tenCC = document.getElementById("familyHead").textContent;
    tenCC = tenCC.replace(/\s/g, '');
    var filename = tenCC+ ".png";
    
    html2canvas(elm).then(function (canvas){
        var canWidth = canvas.width;
        var canHeight = canvas.height;
        
        Canvas2Image.saveAsPNG(canvas);
    }); 
};

$('#ConvertImage').on('click', function(){
    DoCapture(); 
});
  


 