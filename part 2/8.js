//application of closures
function func() {
    let counter = 0;
    return function () {
        if (counter < 1) {
            console.log("Hi You called me");
            counter++;
        } else {
            console.log("mai already call ho chuka hu");
        }
    }
}


const myFunc = func();
myFunc();
myFunc();

const myFunc2=func();
myFunc2();
myFunc2();