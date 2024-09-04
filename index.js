const age = 26;
const name = 'Neelesh'; 
const arr = [1, 2, 3, 4, 5];
function AFeature() {
    console.log("this is new feature");
    console.log("this is new feature A");
}
function BFeature() {
    console.log("this is old feature");
    console.log("this is new feature B");
}
const dob = '23/05/1998'
const isAdult = () => {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
        
}
