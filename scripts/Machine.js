class Machine extends React.Component {
    render() {
   let props = this.props;
   let {s1, s2, s3} = props;
   let arr = [s1,s2,s3];
   let arr2 = [];
   let msg;
  
   let num = () =>  Math.floor(Math.random() * 3);

   for (let ar of arr){
    arr2.push(arr[num()]);
   }

   arr2[0]=== arr2[1] && arr2[2] === arr2[1]
   ? msg ="congratulation, You won!" 
   : msg = "Sorry dude, you lose!"

  return (
        <div>
        <h1>{arr2}</h1>
        <p>{msg}</p>
        </div>
        )       
    }
}
