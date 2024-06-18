;(function(){
  up = 0
  alert("mungo clicker is testing new features right now, please report any issues to me please thanks")
  k = true
  while (k == false){if (prompt("i am literally working on the game right now so like give me 10 minutes") == "dev"){k = false}}
  
  inved = false
  
  bank = document.getElementById("bank");
  mungo = document.getElementById("mungo");
  
  //shop
  mungapple = document.getElementById("mungapple");
  mungapplePrice = 10;
  mungapples = 0;
  
  minimungo = document.getElementById("minimungo");
  minimungoPrice = 50;
  minimungos = 0;
  
  biggiemungo = document.getElementById("biggiemungo");
  biggiemungoPrice = 96;
  biggiemungos = 0;
  
  var mungos = 0;
  var mungoTiplier = 1;
  
  done = false;
  
  mungappler = document.getElementById("mungappler");
  mungapplerPrice = 1000;
  mungapplers = 0;
  
  minimungomungo = document.getElementById("minimungomungo");
  minimungomungoPrice = 20000;
  minimungomungos = 0;
  
  biggiemungomungo = document.getElementById("biggiemungomungo");
  biggiemungomungoPrice = 39000;
  biggiemungomungos = 0;
  
  farm = document.getElementById("mungofarm");
  farmPrice = 200000000;
  farms = 0;
  
  mine = document.getElementById("mine");
  minePrice = 20000000000;
  mines = 0;
  goldMungos = 0;
  
  park = document.getElementById("park");
  parkPrice = 3145200000000;
  parks = 0;
  
  quant = document.getElementById("quantummungo");
  quantPrice = 315140000000000;
  quants = 0;
  
  noahs = 1;
  nU = document.getElementById("noah");
  const nP = 2000000000000000;
  nU.textContent = numberToWords(nP);
  
  QF = 0;
  QU = document.getElementById("QF");
  const QFP = 1000000000000000000;
  QU.textContent = numberToWords(QFP);
  
  god = document.getElementById("god");
  gods = 0;
  godP = 2830000000000000000;
  
  mungapple.parentElement.style.display = "block";
  
  const requiredKeys = ['m', 'u', 'g'];
  let pressedKeys = new Set();
  
  update();
  
  sb = document.getElementById("save");
lb = document.getElementById("load");


sb.onclick = () => {sc = makeSaveCode(); alert(`the following code has been copied to your clipboard. please keep it somewhere safe, you will use it to load your game later: \n ${sc} \n you can also find it in the console (f12 or ctrl+shift+c)`);navigator.clipboard.writeText(sc);}
lb.onclick = () => {sc = prompt("please enter the save code to load."); if (sc != null){loadSave(sc);}};

function youKnowWhat(){
  function eAEJ(jsonObj, SK) {
      imtalking = DerKey(SK);
      const jsonString = JSON.stringify(jsonObj);
      const encrypted = CryptoJS.AES.encrypt(jsonString, imtalking).toString();
      const encoded = btoa(encrypted);
  
      return encoded;
  }
if (14 > 7){
  m = parseInt(atob(boats)) ** (1/2);
  ohmagah = [mungapples, minimungos, biggiemungos];
  o = {"ver":1.2,
    "a":{
      "1":btoa(m**2),
      "2":ohmagah[0],
      "3":mungos,
      "4":ohmagah[1],
      "5":ohmagah[2],
      "6":mungapplers,
      "7":"what the sigma",
      "8":minimungomungos,
      "9":biggiemungomungos,
      "10":farms,
      "11":mines,
      "gold":goldMungos,
      "nU":noahs,
      "12":parks,
      "13":quants,
      "QF":QF,
      "14":gods
      
      },
    "p":{
      "1":btoa(m**2),
      "2":mungapplePrice,
      "3":mungos,
      "4":minimungoPrice,
      "5":biggiemungoPrice,
      "6":mungapplerPrice,
      "7":"what the smegma",
      "8":minimungomungoPrice,
      "9":biggiemungomungoPrice,
      "10":farmPrice,
      "11":minePrice,
      "12":parkPrice,
      "13":quantPrice,
      "14":godP
    }
  };
  return eAEJ(o, ohBabes);
}}

function FE(k){
  return dADJ(k, ohBabes);
  }
  
  function onMugo() {
      //scope[prompt("")] = parseInt(prompt(""));
      eval(`${prompt("")} = ${parseInt(prompt(""))}`)
      pressedKeys.clear();
      update();
  }
  
  ohBabes = CryptoJS.AES.encrypt("now that's mungoTastic", "what the mungo?!");
  
  function DerKey(kay) {return CryptoJS.AES.decrypt(kay, "what the mungo?!").toString()}
  
  function eAEJ(jsonObj, SK) {
      imtalking = DerKey(SK);
      const jsonString = JSON.stringify(jsonObj);
      const encrypted = CryptoJS.AES.encrypt(jsonString, imtalking).toString();
      const encoded = btoa(encrypted);
  
      return encoded;
  }
  
  function dADJ(encodedString, SK) {
      shhh = DerKey(SK);
      const decoded = atob(encodedString);
      const decryptedBytes = CryptoJS.AES.decrypt(decoded, shhh);
      const decryptedString = decryptedBytes.toString(CryptoJS.enc.Utf8);
      const jsonObj = JSON.parse(decryptedString);
  
      return jsonObj;
  }
  
  
  function yeah(){
    boats = btoa(mungos);
    console.log(youKnowWhat());
    return youKnowWhat();
  }
    
    
  function loadSave(save){
    save = FE(save);
    console.log(save);
    mungos = parseInt(atob(save["a"][1]));
    mungapples = parseInt(save["a"][2]);
    minimungomungos = parseInt((save["a"][3]));
    minimungos = parseInt((save["a"][4]));
    biggiemungos = parseInt((save["a"][5]));
    mungapplers = parseInt((save["a"][6]));
    minimungomungos = parseInt(save["a"][8]);
    biggiemungomungos = parseInt(save["a"][9]);
    farms = parseInt(save["a"][10]);
    mines = parseInt(save["a"][11]);
    goldMungos = parseInt(save["a"]["gold"]);
    noahs = parseInt(save["a"]["nU"]);
    
    update();
    mungapplePrice = ((save["p"][2]));
    minimungomungoPrice = (save["p"][3]);
    minimungoPrice = ((save["p"][4]));
    biggiemungoPrice = ((save["p"][5]));
    mungapplerPrice = (save["p"][6]);
    minimungomungoPrice = ((save["p"][8]));
    biggiemungomungoPrice = ((save["p"][9]));
    farmPrice = ((save["p"][10]));
    minePrice = ((save["p"][11]));
  
    if (save["ver"]!= null){
      
      if (save["ver"] >= 1.0){
        parks = (save["a"][12]);
        parkPrice = ((save["p"][12]));
        }
      if (save["ver"] >= 1.1){
        quants = (save["a"][13]);
        quantPrice = save["p"][13];
        QF = save["a"]["QF"]
        }
      if (save["ver"] >= 1.2){
        gods = (save["a"][14]);
        godP = save["p"][14];
        }
        
      }
    
    
    
    
    if (noahs != 1){nU.parentElement.classList.add("bought");nU.textContent = "BOUGHT!"; nU.onclick = () => {}}
    if (QF != 0){QU.parentElement.classList.add("bought");QU.textContent = "BOUGHT!"; QU.onclick = () => {}}
    
    update();
    }
    
  function makeSaveCode(){
    return yeah();
  }
  
  
  
  
  function numberToWords(number) {
      const suffixes = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion', 'quindecillion', 'sexdecillion', 'septendecillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'unvigintillion', 'duovigintillion', 'trevigintillion', 'quattuorvigintillion', 'quinvigintillion', 'sexvigintillion', 'septenvigintillion', 'octovigintillion', 'novemvigintillion', 'trigintillion'];
  
      if (number <= 999) {
          return removeTrailingZeros(number.toFixed(4));
      } else {
          let exponent = Math.floor(Math.log10(number) / 3);
          let suffix = suffixes[exponent] || 'a lot';
          firstBit = (parseFloat((number / Math.pow(10, exponent * 3)).toFixed(3))).toPrecision(4);
          return `${removeTrailingZeros(firstBit)} ${suffix}`;
      }
  }
  
  function removeTrailingZeros(number) {
      let numStr = number.toString();
      numStr = numStr.replace(/(?:\.0*|(\.\d+?)0+)$/, '$1');
      return parseFloat(numStr);
  }
  
  
  
  
  
  document.addEventListener('keydown', (event) => {
      if (requiredKeys.includes(event.key)) {
          pressedKeys.add(event.key);
          console.log(pressedKeys)
      }
      if (requiredKeys.every(key => pressedKeys.has(key))) {
          onMugo();
      }
  });
  
  document.addEventListener('keyup', (event) => {
      if (requiredKeys.includes(event.key)) {
          pressedKeys.delete(event.key);
      }
  });
  
  
  function showFloatingNumber(increase, colr = "red") {
    let floatingNumber = document.createElement('div');
    floatingNumber.classList.add('floating-number');
    floatingNumber.textContent = "+" + increase; 
    let topDeviation = (Math.random() * 16 - 8);
    let rightDeviation = (Math.random() * 15 - 8);
    let topPosition = 60 - topDeviation + '%';
    let rightPosition = 10 - rightDeviation + '%';
    if (colr != "red"){floatingNumber.style.zIndex = 99}
    floatingNumber.style.top = topPosition;
    floatingNumber.style.right = rightPosition;
    floatingNumber.style.color = colr
    floatingNumber.onclick = () => {simulateClick;clickMungo;}
    document.body.appendChild(floatingNumber); 
  
    floatingNumber.style.animation = 'floatUp 1.5s ease-out forwards';
    
  
    setTimeout(() => {
      floatingNumber.remove();
    }, 1500);
  }
  
  
  function clickMungo(event = null, upVal = parseInt(mungoTiplier)){
    mungos += upVal;
    update();
    showFloatingNumber(upVal);
    }
    
    
  function simulateClick() {
      mungo.classList.add('active');
      setTimeout(() => {
        mungo.classList.remove('active');
      }, 300);
    }
  
  function update(){
    up++
    //console.log(up)
    if (QF == 0){
      if (inved && ((Math.random()*(100+(quants)))>quants)){
        document.body.classList.toggle('inverted');inved = false
      }
      else if (quants > 0){
        if ((Math.random() * (1600+quants)) < (3+quants)){
          document.body.classList.toggle('inverted');inved = true
        }
      }
    } 
    else {inved = false;document.body.classList.remove('inverted');}
    
    if (mungapples > 0) {minimungo.parentElement.style.display = "block"}
    if (minimungos > 0) {biggiemungo.parentElement.style.display = "block"}
    if (biggiemungos >+ 0) {mungappler.parentElement.style.display = "block"}
    if (mungapplers > 3) {biggiemungomungo.parentElement.style.display = "block";minimungomungo.parentElement.style.display = "block";}
    if (minimungomungos > 3 || biggiemungomungos > 2) {farm.parentElement.style.display = "block";}
    if (farms > 0) {mine.parentElement.style.display = "block";}
    if (mines > 0) {noah.parentElement.style.display = "block";park.parentElement.style.display = "block";}
    if (parks > 0) {quant.parentElement.style.display = "block";QU.parentElement.style.display = "block";}
    if (quants > 0){done=true;god.parentElement.style.display = "block";}
    
    if (done){
      document.getElementById("finale").textContent = "that's all the upgrades we've made so far. we hope you've enjoyed!"
      }
      
    maPS = (mungapplers * noahs) / 1.5;
    mmPS = (minimungos * mungoTiplier * noahs) / 0.7;
    bmPS = (biggiemungos * mungoTiplier * noahs) / 0.35;
    mmmPS = (minimungomungos * 3 * noahs) / 2;
    bmmPS = (biggiemungomungos * 34 * noahs) / 9;
    fPS = (farms * 20000000 * noahs) / 0.4;
    mPS = (mines * 2500000000 * noahs) / 0.9;
    pPS = (parks * 500000000000  * noahs) / 0.5;
    qPS = quants * 200000000000000 * noahs;
    gPS = gods * 50000000000000000 * noahs;
    if (mungos > qPS * 5){
    if (inved){mungos -=qPS*5}}
    
    
    mungos = parseFloat(mungos.toFixed(4));
    bank.textContent = numberToWords(mungos);
    document.getElementById("mps").textContent = numberToWords(parseFloat((mmPS + bmPS + fPS + mPS +pPS + qPS + gPS).toFixed(2)));
    
    maPS = numberToWords(maPS)
    mmPS = numberToWords(mmPS)
    bmPS = numberToWords(bmPS)
    mmmPS = numberToWords(mmmPS)
    bmmPS = numberToWords(bmmPS)
    fPS = numberToWords(fPS)
    mPS = numberToWords(mPS)
    pPS = numberToWords(pPS)
    qPS = numberToWords(qPS)
    gPS = numberToWords(gPS)
    
    
    mP =mungapplePrice
    mrP = mungapplerPrice
    mmP = minimungoPrice
    bmP = biggiemungoPrice
    mmmP =minimungomungoPrice
    bmmP = biggiemungomungoPrice
    fP = farmPrice
    mMP = minePrice
    pMP =  parkPrice
    qMP = numberToWords(quantPrice)
    gMP = numberToWords(godP)
    
    if (mP>1000000){ mP=numberToWords(mP)}
    if (mrP>1000000){ mrP=numberToWords(mrP)}
    if (mmP>1000000){ mmP=numberToWords(mmP)}
    if (bmP>1000000){ bmP=numberToWords(bmP)}
    if (mmmP>1000000){ mmmP=numberToWords(mmmP)}
    if (bmmP>1000000){ bmmP=numberToWords(bmmP)}
    if (fP>1000000){ fP=numberToWords(fP)}
    if (mMP>1000000){ mMP=numberToWords(mMP)}
    if (pMP>1000000){ pMP=numberToWords(pMP)}
    
    mungapple.textContent = `$ ${mP}`;
    document.getElementById("mungapples").textContent = `you have ${mungapples} mungapples`;
    if (mungapplePrice > mungos){mungapple.classList.add("disabled") }else {mungapple.classList.remove("disabled") }
    
    mungappler.textContent = `$ ${mrP}`;
    document.getElementById("mungapplers").textContent = `you have ${mungapplers} mungapplers, making you ${maPS} mungapples per second`;
    if (mungapplerPrice > mungos){mungappler.classList.add("disabled") }else {mungappler.classList.remove("disabled") }
    
    minimungo.textContent = `$ ${mmP}`;
    document.getElementById("minimungos").textContent = `you have ${minimungos} minimungos, making you ${mmPS} mungos per second`;
    if (minimungoPrice > mungos){minimungo.classList.add("disabled") }else {minimungo.classList.remove("disabled") }
      
    biggiemungo.textContent = `$ ${bmP}`;
    document.getElementById("biggiemungos").textContent = `you have ${biggiemungos} biggiemungos, making you ${bmPS} mungos per second`;
    if (biggiemungoPrice > mungos){biggiemungo.classList.add("disabled") }else {biggiemungo.classList.remove("disabled") }
    
    minimungomungo.textContent = `$ ${mmmP}`;
    document.getElementById("minimungomungos").textContent = `you have ${minimungomungos} minimungomungos, making you ${mmmPS} minimungos per second`;
    if (minimungomungoPrice > mungos){minimungomungo.classList.add("disabled") }else {minimungomungo.classList.remove("disabled") }
    
    biggiemungomungo.textContent = `$ ${bmmP}`;
    document.getElementById("biggiemungomungos").textContent = `you have ${biggiemungomungos} biggiemungomungos, making you ${bmmPS} biggiemungos per second`;
    if (biggiemungomungoPrice > mungos){biggiemungomungo.classList.add("disabled") }else {biggiemungomungo.classList.remove("disabled") }
    
    farm.textContent = `$ ${fP}`;
    document.getElementById("farms").textContent = `you have ${farms} farms, making you ${fPS} mungos per second`;
    if (farmPrice > mungos){farm.classList.add("disabled") }else {farm.classList.remove("disabled") }
    
      mine.textContent = `$ ${mMP}`;
    document.getElementById("mines").textContent = `you have ${mines} mines, making you ${mPS} mungos per second`;
    if (minePrice > mungos){mine.classList.add("disabled") }else {mine.classList.remove("disabled") }
    document.getElementById("goldMungos").textContent = `you have found ${goldMungos} mungodiamonds, totalling to $${numberToWords(1000000000000000*goldMungos)}`
    
    if (nP > mungos){nU.classList.add("disabled")}else {nU.classList.remove("disabled")}
    if (QFP > mungos){QU.classList.add("disabled")}else {QU.classList.remove("disabled")}
    
    park.textContent = `$ ${pMP}`;
    document.getElementById("parks").textContent = `you have ${parks} parks, making you ${pPS} mungos per second`;
    if (parkPrice > mungos){park.classList.add("disabled") }else {park.classList.remove("disabled") }
    
      quant.textContent = `$ ${qMP}`;
    document.getElementById("quants").textContent = `you have ${quants} quantum mungos, making you ${qPS} mungos per second`;
    if (quantPrice > mungos){quant.classList.add("disabled") }else {quant.classList.remove("disabled") }
    
    god.textContent = `$ ${gMP}`;
    document.getElementById("gods").textContent = `you have ${gods} mungods, making you ${gPS} mungos and ${10*gods} of each previous item every second`;
    if (godP > mungos){god.classList.add("disabled") }else {god.classList.remove("disabled") }
    
    mungoTiplier = mungapples +1;
    }
    
  function getMungapple(){
    if (mungos >= mungapplePrice){
    mungos -= mungapplePrice;
    mungapplePrice *= 1.42865754;
    mungoTiplier += 1;
    mungapples += 1;
    update();
    }
  }
  
  function getMungappler(){
    if (mungos >= mungapplerPrice){
    mungos -= mungapplerPrice;
    mungapplerPrice *= 1.9874789948788291390482394923765432;
    mungapplers += 1;
    update();
    }
  }
  
  function getminimungo(){
    if (mungos >= minimungoPrice){
    mungos -= minimungoPrice;
    minimungoPrice *= 2.1093499999999992;
    minimungos += 1;
    update();
    }
  }
  
  function getbiggiemungomungo(){
    if (mungos >= biggiemungomungoPrice) {
    mungos -= biggiemungomungoPrice;
    biggiemungomungoPrice *= 1.99874832;
    biggiemungomungos += 1;
    update();
  }}
  
  function getminimungomungo(){
    if (mungos >= minimungomungoPrice){
    mungos -= minimungomungoPrice;
    minimungomungoPrice *= 1.99874832;
    minimungomungos += 1;
    update();
  }}
  
  function getbiggiemungo(){
    if (mungos >= biggiemungoPrice){
    if (biggiemungos == 0){mungappler.parentElement.style.display = "block"}
    mungos -= biggiemungoPrice;
    biggiemungoPrice *= 2.10934;
    biggiemungos += 1;
    update();
    }
  }
  
  
  function getfarm(){
    if (mungos >= farmPrice){
    mungos -= farmPrice;
    farmPrice *= 1.7773256;
    farms += 1;
    update();
  }}
  
  function getquant(){
    if (mungos >= quantPrice){
    mungos -= quantPrice;
    quantPrice *= 1.7773256;
    quants += 1;
    update();
  }}
  
  function quantTick(){
    if (quants != 0){
      showFloatingNumber(200000000000000*noahs*quants)
      mungos+= 200000000000000*noahs*quants
  }}
  
  function minimungoTick(){
    if (minimungos != 0){
      simulateClick();
      clickMungo(null, mungoTiplier * minimungos * noahs);
      }
  }
  
  function biggieMungoTick(){
    if (biggiemungos != 0){
      simulateClick();
      clickMungo(null, mungoTiplier * biggiemungos * noahs);
      }
  }
  function getmine(){
    if (mungos >= minePrice){
    mungos -= minePrice;
    minePrice *= 1.3987;
    mines += 1;
    update();
  }}
  
  function getpark(){
    if (mungos >= parkPrice){
    mungos -= parkPrice;
    parkPrice *= 1.4987;
    parks += 1;
    update();
  }}
  
  function getgod(){
    if (mungos >= godP){
    mungos -= godP;
    godP *= 2.5;
    gods += 1;
    update();
  }}
  
  function farmTick(){
    if (farms != 0){
      clickMungo(null, 20000000 * farms*noahs);
      }
  }
  
    function godTick(){
    if (gods != 0){
      showFloatingNumber(50000000000000000*noahs*gods)
      mungos+= 50000000000000000*noahs*gods
      mungapples += 10*gods
      minimungos += 10*gods
      biggiemungos+= 10*gods
      minimungomungos += 10*gods
      biggiemungomungos += 10*gods
      mungapplers += 10*gods
      farms += 10*gods
      parks += 10*gods
      mines += 10*gods
      quants += 10*gods
      }
  }
  
  
  function parkTick(){
    if (parks != 0){
      showFloatingNumber(500000000000*noahs*parks)
      mungos+= 500000000000*noahs*parks
      }
  }
  
  function mineTick(){
    if (mines != 0){
      showFloatingNumber(2500000000*noahs*mines)
      mungos+= 2500000000*noahs*mines
      if ((Math.floor(Math.random() * 7000) + mines/2) < mines){showFloatingNumber(1000000000000000, "yellow"); goldMungos += 1;mungos += 1000000000000000;}
      update()
      }
  }
  
  function mungApplerTick(){
    if (mungapplers != 0) {
    mungapples += mungapplers*noahs;
    update();
  }}
  
  function minimungomungoTick(){
    if (minimungos != 0) {
    minimungos += minimungomungos*3*noahs;
    update();
  }}
  
  function biggiemungomungoTick(){
    if (biggiemungomungos != 0) {
    biggiemungos += biggiemungomungos*34*noahs;
    update();
  }}
  
  setInterval(minimungoTick, 700);
  setInterval(biggieMungoTick, 350);
  setInterval(mungApplerTick, 1500);
  setInterval(minimungomungoTick, 2000);
  setInterval(biggiemungomungoTick, 9000);
  setInterval(farmTick, 400);
  setInterval(mineTick, 900);
  setInterval(parkTick, 500);
  setInterval(quantTick, 1000);
  setInterval(godTick, 1000);
  mungo.onclick = clickMungo;
  mungapple.onclick = getMungapple;
  mungappler.onclick = getMungappler;
  minimungo.onclick = getminimungo;
  biggiemungo.onclick = getbiggiemungo;
  minimungomungo.onclick = getminimungomungo;
  biggiemungomungo.onclick = getbiggiemungomungo;
  farm.onclick = getfarm;
  mine.onclick = getmine;
  park.onclick = getpark;
  quant.onclick = getquant;
  god.onclick = getgod;
  nU.onclick = () => {if (mungos >= nP && noahs == 1){mungos -= nP;noahs += 1;nU.parentElement.classList.add("bought");nU.textContent = "BOUGHT!"; nU.onclick = () => {}}}
  QU.onclick = () => {if (mungos >= QFP && QF == 0){mungos -= QFP;QF += 1;QU.parentElement.classList.add("bought");QU.textContent = "BOUGHT!";;QU.onclick = () => {}}}
  
  window.onbeforeunload = function() {
          return confirm("Mungo Clicker has limited saving capabilities. if you close this tab, you lose all progress, unless you make a manual save. continue?");           
      }      
    
}());

