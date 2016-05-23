import {toTenji, fromTenji} from 'tenji';

(()=>{
    const tob = document.getElementById('to-button') as HTMLInputElement;
    const fob = document.getElementById('from-button') as HTMLInputElement;
    const jpt = document.getElementById('jp-text') as HTMLTextAreaElement;
    const tjt = document.getElementById('tenji-text') as HTMLTextAreaElement;
    const kjf = document.getElementById('kantenji-flag') as HTMLInputElement;

    tob.addEventListener('click',(e)=>{
        tjt.value = toTenji(jpt.value,{
            kanji: kjf.checked,
        });
    });
    fob.addEventListener('click',(e)=>{
        jpt.value = fromTenji(tjt.value,{
            kanji: kjf.checked,
        });
    });
})();
