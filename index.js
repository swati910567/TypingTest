const setOfWords=["India is a great country where people speak different languages but the national language is Hindi" , "India is full of different castes, creeds, religion, and cultures but they live together",  "That’s the reasons India is famous for the common saying of unity in diversity. India is the seventh-largest country in the whole world" ,"The first color that is uppermost color in the flag which is the saffron color, stands for purity. The second color i.e. the middle color in the flag is the white color and it stands for peace", " The third color that is the lowest color in the flag is the green color and it stands for fertility. The white color has an Ashoka Chakra of blue color on it" , "Ashoka Chakra contains twenty-four spokes which are equally divided. India has 29 states and 7 union territories."];


 const msg=document.getElementById('msg');
 const typeWords=document.getElementById('myword');
 const btn=document.getElementById('btn');
 let startTime, endTime;

const playGame=()=>{
let randomNumber=Math.floor(Math.random()*setOfWords.length);
msg.innerText=setOfWords[randomNumber];
let date=new Date();
startTime=date.getTime();
btn.innerText="Done";
}

const endPlay=()=>{
    let date=new Date();
    endTime=date.getTime();
    let totalTime=((endTime-startTime)/1000);
    let totalString=typeWords.value;
    let wordCount=wordCounter(totalString);
    let speed=Math.round((wordCount/totalTime)*60);
    let finalMsg="You typed a total at "+speed+ " words per minutes. ";
    finalMsg+=compareWords(msg.innerText,totalString);
    msg.innerText=finalMsg;
}

const compareWords=(str1, str2)=>{
let words1=str1.split(" ");
let words2=str2.split(" ");
let count=0;
words1.forEach (function(item,index){
if(item==words2[index]) {
    count++;
}   
})

let errorWords=(words1.length-count);
return (count + " correct out of "+ words1.length+" words and the total number of errors are "+ errorWords+" .");
}

const wordCounter=(str)=>{
    let response=str.split(" ").length;
    return response;
}

 btn.addEventListener('click',function(){
    if(this.innerText=='Start'){
        typeWords.disabled=false;
        playGame();
    }
    else if(this.innerText=='Done'){
        typeWords.disabled=true;
        btn.innerText='Start';
        endPlay();
    }
 });