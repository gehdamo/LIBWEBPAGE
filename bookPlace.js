let bookPlaceIMG = document.querySelector("#img-BOOKplace");

let nowYear;
function getTime(){
    let time = new Date();
    nowYear = time.getFullYear();
    
}

function startBOOKsearch (Year, Number, Enable) {
    
    if((2000<=Year) && (Year<=2022)){
        console.log(Year, Number, Enable, "SUCCES");
        if(nowYear==Year){
            console.log("이번 년도 신간");
            bookPlaceIMG.innerHTML = "<img src='test-IN.jpg'>";
        }
        else if((nowYear-1) == Year){
            console.log("작년 신간");
        }
        else{
            console.log("안쪽 서가");
        }
    }
    else{
        console.log('ERROR(Year)');
        alert("책 연도를 잘못 입력하셨습니다");
    }

    

    
}

function selectImgBookPlace (Place) {
    switch(Place){
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
    }
}

function init(){
    setInterval(getTime, 1000);
}

init();