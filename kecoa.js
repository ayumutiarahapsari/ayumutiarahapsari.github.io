
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
   
    if (player === comp) return 'MENANG!';
    else return 'KALAH...';
}

const pilihan = document.querySelectorAll('img');

console.log(pilihan);
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = gethasil(pilihanComputer, pilihanPlayer);
        // var kecoaimg = document.getElementById("kecoa").src = "./kecoa.png";
        document.getElementById("kecoa").setAttribute('src', "./kecoa.png");
        console.log('test')



    })
    
}
)
