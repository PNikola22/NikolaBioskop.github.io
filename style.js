window.addEventListener("load", (event) => {
  asd(document.querySelector(".postotak"),niz);
  prikazSlika();
  });

  let niz = ['RECENZIJA','POSEĆENOST','KVALITET'];
  let slike = ['g1.jpg','g2.jpg','g3.jpg','g4.jpg','g5.jfif'];

  function prikazSlika(){
    let html =document.querySelector("#katalog");
    for(let i=1;i<slike.length;i++){
        html.innerHTML+=` <div   class="col-lg-3 col-sm-12">
        <img  src="slike/${slike[i]}" style="width: 300px; height: 300px; margin-top: 150px;">
        </div>`;  
    }
}

function uvecajCard(x){
    x.style.transform='rotate(7deg)';
    x.style.transitionDuration = "0.7s";
}
function smanjiCard(x){
    x.style.transform='rotate(0deg)';
    x.style.transitionDuration = "0.7s";
}


function asd(el,niz){
  for(let i=0;i<niz.length;i++){
    let a = getRndInteger(85,100);
     el.innerHTML+=`
     <div class="col-4 divoviBorder">
     <h3 class="text-center">${a} %</h3>
     <h5 class="text-center" style="color:white;">${niz[i]}</h5>
     </div>
     `;
  }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
function validacijaForme(){

    let ime = document.querySelector(".ime");
    let prezime = document.querySelector(".prezime");
    let email = document.querySelector(".email");
    let poruka = document.getElementById("poruka");
    let a = email.value.split("@");    

    if(ime.value.length ==0 || prezime.value.length ==0 || email.value.length ==0 ||  poruka.value.length ==0){
        alert('Sva polja su obavezna');
        return false;
    }
    else if (ime.value.length < 3 || prezime.value.length < 3 || email.value.length < 3 || poruka.value.length < 3){
        alert('Morate uneti minimum 3 karaktera!');
        return false;
    }
    if(a.length ==1){
        alert('Email mora da sadrzi @');
        return false;
    }
    if(a[0].length < 3){
        alert('Ispred znaka @ mora biti vise od 3 karaktera');
        return false;
    }
    else{
        alert("Uspešno ste poslali Vašu poruku!");
        return true;
    }
    
}