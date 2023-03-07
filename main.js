let arr=[4,5,2,1,6,3];
function nSmall(arr,n){
for(i=0;i<arr.length;i++)
{
	for(j=i+1;j<arr.length;j++)
	{
		if(arr[i]>arr[j])
		{
			temp=arr[j];
			arr[j]=arr[i];
			arr[i]=temp;
		}
	}
}
console.log(arr);
let small=arr[n-1];
return small;
}

console.log("2nd Smallest number is" + nSmall(arr,2));
console.log("Smallest number is" + nSmall(arr,1));
document.write("1st Smallest number is" +  nSmall(arr,1)  + "<br>" + 	  "2nd Smallest number is" +nSmall(arr,2));

