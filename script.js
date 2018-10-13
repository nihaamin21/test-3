// write your JS code here
let count=0;
let price= 0.00;
    function btn1() {
         document.querySelector('#value').value = count--;
         document.querySelector('#priceBtn').value = count * price ;
    }

    function btn2() {
        document.querySelector('#value').value = count++;
        document.querySelector('#priceBtn').value = count  * price ;
    }
