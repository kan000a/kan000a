

bgc_chgj();

function bgc_chgj(){
//現在の時刻の取得
  gtim0 = new Date();

  hr0 = gtim0.getHours(); //時
  mn0 = gtim0.getMinutes(); //分
  sc0 = gtim0.getSeconds(); //秒
  sc0 = Math.floor(Math.floor(sc0 % 6) / 6 * 60); //秒を6種類に分類

  bgc0 = 0;
  if (sc0 < 10) bgc0 = 0x6666ff;
  else { if (sc0 < 20) bgc0 = 0x9966ff;
  else { if (sc0 < 30) bgc0 = 0xcc66ff;
  else { if (sc0 < 40) bgc0 = 0xff66ff;
  else { if (sc0 < 50) bgc0 = 0xff99ff;
  else { if (sc0 < 60) bgc0 = 0xffccff;
  }}}}}
  document.frm1.dsp0.value = "#" + bgc0.toString(16);
  document.body.style.backgroundColor = bgc0;
  setTimeout("bgc_chgj()", 1000);
}