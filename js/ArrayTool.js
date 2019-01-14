function ArrayTool(){
	this.max=function(arr){
		var max = 0;
		for(a in arr){
			if(arr[a]>max)
				max=arr[a];
		}
		return max;		 
	}
	this.index=function(arr,i){
		return arr[i];
	}
}