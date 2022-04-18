function runProgram(input) {
    input=input.trim().split("\n");
    var n=+input[0].trim();
    var a=input[1].trim();
    var m=+input[2].trim();
    var b=input[3].trim();
      var obj1 = {}
      var obj2 = {}
        for(var i=0;i<n;i++){ 
            if(obj1[a[i]]==undefined){
                obj1[a[i]] = 1;
            }else{
                obj1[a[i]] += 1;
                
            }
        }
        for(var j=0;j<m;j++){ //abc
            if(obj2[b[j]]==undefined){
                obj2[b[j]] = 1;
            }else{
                obj2[b[j]] += 1;
                
            }
        }
    var count=0;   
    var sum=0;
    for(var i in obj2){ //abbc
        for(var j in obj1){ //aabbc 
            if(i==j){
                if(obj2[i]<=obj1[j]){
                    sum+=obj2[i];
                }
            }
        }
    }      
    if(sum==m){
        console.log("Yes");
    }else{
        console.log("No");
        
    }
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  