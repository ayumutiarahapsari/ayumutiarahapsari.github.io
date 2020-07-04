
function getPilihanComputer(){
    const comp = Math.random();
    
    if (comp < 0.2){
        return 'eiffel';
    }
    else if (comp >= 0.2 && comp < 0.4){
        return 'greatwall';
    }
    else if (comp >= 0.4 && comp < 0.6){
        return 'liberty';
    }
    else if (comp >= 0.6 && comp < 0.8){
        return 'pisa';
    }
    else {
        return 'pyramid';
    }

}

function getHasil(comp, player){
   
    if (player === comp) {
        return 'MENANG!'
    }
    else if (player !== comp) {
        return 'KALAH...' 
    };
}



var pilihan = document.getElementsByTagName('img');
var imgkecoa = document.getElementById('kecoa');

for (i = 1; i < pilihan.length; i++){
    //console.log(pilihan[i]);
    pilihan[i].addEventListener('click', function(){
        
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pilihan.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        document.getElementById(pilihanComputer).setAttribute('src', "./kecoa.png");
        const info = document.querySelector('.info');
        info.innerHTML = hasil;
    })
}



