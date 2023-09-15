function fun1() {
    console.log('line 1');
};
function fun2() {
    setTimeout(()=>{
        console.log('line 2');

    },1000);
};
function fun3() {
    console.log('line 3');
};

fun1();
fun2();
fun3();
//asynchronous means it does not wait for other methods it do work. here second method print after 1000 sec but 3rd method not wating for that one it excute  after 1000 sec then 2nd method excute.