function Test()
{
let age=18;
let name="kiran";
let setStatus=false;
let userdefault=undefined;
let responseValue=null;
console.log(age);
console.log(name);
console.log(setStatus);
console.log(userdefault);
console.log(responseValue);
let oldage=age;
age=25;
let status=setStatus;
setStatus=true;
console.log(age);
console.log(oldage);
console.log(status);
console.log(setStatus);

const Hi=()=>{alert("Check the console output!")}
    return (
        <div>
        <button onClick={Hi}>Click me</button></div>
    );
}
ReactDOM.render(<Test/>,document.getElementById("mydiv"));