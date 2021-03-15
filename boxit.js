var param = process.argv.slice(2);

//console.log(param.length);//count of parameter


if(param.length===0){
 console.log('┌┐\n└┘');
}
else if(param.length>0){
    const line = '─'
    const spc = ' '
    var i;
    var arr=[];
    for(i=0;i<param.length;i++){
        arr.push(param[i].length);
    }
    var max = Math.max(...arr);
   
    for(i=0;i<param.length;i++){
        if(param.length === 1){//first line
            console.log('┌'+line.repeat(param[i].length)+'┐');
            console.log('|'+param[i]+'|');
            console.log('└'+line.repeat(param[i].length)+'┘');
        }else if(i===0){
            console.log('┌'+line.repeat(max)+'┐');
            console.log('|'+param[i]+spc.repeat(max-param[i].length)+'|');
            console.log('├'+line.repeat(max)+'┤');
        }else if(i>0 && ((i+1)===param.length)){
            console.log('|'+param[i]+spc.repeat(max-param[i].length)+'|');
            console.log('└'+line.repeat(max)+'┘');
        }else{
            console.log('|'+param[i]+spc.repeat(max-param[i].length)+'|');
            console.log('├'+line.repeat(max)+'┤');
        }
    }
   
}