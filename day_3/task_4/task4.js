function matrix1(matrix){
  var result=[];
  var top=0;
  var right=matrix[0].length-1;
 var bottom = matrix.length - 1;
  var left=0;
  while(left<=right && top<=bottom){
    for(var i=left;i<=right;i++){
      result.push(matrix[top][i]);
    }
    top++;
    for(var i=top;i<=bottom;i++){
      result.push(matrix[i][right]);
    }
    right--;
    if(top<=bottom){
      for(var i=right;i>=left;i--){
        result.push(matrix[bottom][i]);
      }
      bottom--;
      
    }
    if(left<=right){
      for(var i=bottom;i>=top;i--){
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
}

var input = [ [ 1,  2,  3,  4],[ 5,  6,  7,  8],[ 9, 10, 11, 12],[13, 14, 15, 16]];


var result = matrix1(input);
for (var i = 0; i < result.length; i++) {
    console.log(result[i]);
}
