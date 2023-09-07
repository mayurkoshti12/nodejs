const fs = require('fs');
// console.log(process);


/* Creating/Remove file & contents via comman line */
/* const input = process.argv;

if(input[2]=='add'){

    fs.writeFileSync(input[3], input[4]);
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}else{

    console.log("Invalid Input");
} */


/* Creating dynamic file and contents */
const path = require('path');
const dirPath = path.join(__dirname, 'files');
console.log(dirPath);

for(i=1;i<=5; i++){

    fs.writeFileSync(dirPath+'/data'+i+'.text', 'Data Count:'+i);
}

/* Reading dynamic file and contents */

fs.readdir(dirPath, (err, myfiles)=>{

    //console.log(myfiles);

    myfiles.forEach(item => {
        // console.log(item);
        const data =  fs.readFileSync(dirPath+'/'+item, { encoding: 'utf8' });
        console.log(data);

   });


    }
);



