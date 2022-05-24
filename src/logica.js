window.onload = function () {

    
    const secondElement = document.getElementById('second');

    const minuteElement = document.getElementById('minute');

    const hourElement = document.getElementById('hour');

    const buttonStart = document.getElementById('button-start');

    const buttonStop = document.getElementById('button-stop');

    const buttonReset = document.getElementById('button-reset');

    let stoped = false;

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    buttonStart.onclick = async function () {
        stoped = false;
        buttonStart.disabled = true;

        const secAtual = secondElement.innerHTML;
        const minAtual = minuteElement.innerHTML;
        const hourAtual = hourElement.innerHTML;

        for(x = hourAtual; x < 8760; x++){
            for(j = minAtual; j < 60; j++){
                for(i = secAtual; i < 60; i++){
 
                    await sleep(1000);

                    if(stoped){
                        break;
                    }

                    if(i == 0){
                        i ++;
                    }

                    if(i < 10){
                        secondElement.innerHTML = "0" + i;

                    } else{
                        secondElement.innerHTML = i;

                    }

                }

                await sleep(1000);

                if(stoped){
                    break;
                }

                secondElement.innerHTML = '00';

                if(j == 0){
                    j ++;
                }

                if(j < 10){
                    minuteElement.innerHTML = "0" + j;

                } else{
                    minuteElement.innerHTML = j;

                }

            }

            
            await sleep(1000);
            
            if(stoped){
                break;
            }
            
            minuteElement.innerHTML = '00';

            if(x == 0){
                x ++;
            }

            if(x < 10){
                hourElement.innerHTML = "0" + x;

            } else{
                hourElement.innerHTML = x;

            }
        }

        buttonStart.disabled = false;

    }

    const stop = async function (){
        if(!stoped){
            buttonStart.disabled = true;
            stoped = true;
        }
    }

    buttonStop.onclick = stop;

    buttonReset.onclick = async function () {
        if(!stoped){
            buttonStart.disabled = true;
            stoped = true;
        }
        secondElement.innerHTML = '00';
        minuteElement.innerHTML = '00';
        hourElement.innerHTML = '00';
        
    }

}
