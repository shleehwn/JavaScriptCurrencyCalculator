//1. 박스2개 만들기
//2. 드랍다운 리스트 만들기
//3. 환율정보 가져오기
//4. 드랍다운 리스트에서 아이템 선택하면 아이템 바뀜.
//5. 금액을 입력하면은 환전이 된다. 
//6. 드랍다운 리스트에서 아이템을 선택하면 다시 그
//.단위기준으로 환전이 됨.
//7.숫자를 한국어로 읽는법
//8.반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이
//적용이 된다. 

let currencyRatio = {
    USD:{
        KRW: 1184.36,
        USD: 1,
        VND: 22972.50,
        unit : "달러"
    },
    KRW:{
        KRW : 1,
        USD : 0.00084,
        VND : 19.40,
        unit : "원"

    },
    VND:{
        KRW : 0.052,
        USD : 0.000044,
        VND : 1,
        unit : "동"
    }
}
let fromCurrency = 'USD'
let toCurrency= 'USD'

document
 .querySelectorAll("#from-currency-list a")
 .forEach((menu)=> menu.addEventListener("click",function(){
    //1.버튼을 가져온다
    //2.버튼의 값을 바꾼다.
    document.getElementById("from-button").textContent=this.textContent   
    //3.선택된 currency 값을 변수에 저장해준다.
    fromCurrency = this.textContent;
    convert("from")
    console.log("fromCurrency는", fromCurrency);
 }));


 document
 .querySelectorAll("#to-currency-list a")
 .forEach((menu)=> menu.addEventListener("click",function(){
    //1.버튼을 가져온다
    //2.버튼의 값을 바꾼다.
    document.getElementById("to_button").textContent=this.textContent   
    //3.선택된 currency 값을 변수에 저장해준다.
    toCurrency = this.textContent;
    convert("to")
    console.log("toCurrency는", toCurrency);
 }));

//1.console.log(currencyRatio.USD.unit);
//console.log (currencyRatio['KRW']['unit']);

//1.키를 입력하는 순간
//2.환전이 되서
//3.환전된값이 보인다.



function convert(type){
    //1.환전
    //얼마를 환전? 가지고 있는 돈이 뭔지, 바꾸고자하는 돈이 뭔지
    // 돈 * 환율 = 환전금액
if (type == "from"){
    
        let amount = document.getElementById("from-input").value
        let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency]
        let fromCurrencyUnit = '달러'
       
        console.log("환전금액",convertedAmount );
        document.getElementById("to-input").value = convertedAmount
        fromCurrencyUnit = currencyRatio[fromCurrency]['unit']
        console.log("환전단위는", fromCurrencyUnit);
        document.getElementById("from-currency-unit").textContent = fromCurrencyUnit
    }else{
        let amount1 = document.getElementById("to-input").value
        let convertedAmount1 = amount1 * currencyRatio[toCurrency][fromCurrency]
        let toCurrencyUnit = '달러'
        console.log("환전금액22",convertedAmount1 );
    
        document.getElementById("from-input").value = convertedAmount1
        toCurrencyUnit = currencyRatio[toCurrency]['unit']
        console.log("환전단위는2222", toCurrencyUnit)
    
        document.getElementById("to-currency-unit").textContent = toCurrencyUnit
    }
}


