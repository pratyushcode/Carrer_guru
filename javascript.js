
let flag;
let class_current="";
let subjects=[];
let mindsets=[];
let interests=[];
function toggle_color(){
btn_1=document.getElementById("9th");
btn_2=document.getElementById("10th");
btn_3=document.getElementById("11th");
btn_4=document.getElementById("12th");
btn_1.style.backgroundColor= "#5f6777";
btn_2.style.backgroundColor= "#5f6777";
btn_3.style.backgroundColor= "#5f6777";
btn_4.style.backgroundColor= "#5f6777";


}
function selection(x){
    if(x==9){
        class_current="9th";
      }
      else if(x==10){
        class_current="10th";
      }
      else if(x==11){
        class_current="11th";
      }else if(x==12){
        class_current="12th";
      }
       if(class_current=="9th"){

            btn=document.getElementById("9th");
            toggle_color();
            btn.style.backgroundColor= "#0d637e";

        }
        else if(class_current=="10th"){
            btn=document.getElementById("10th");
            toggle_color();
            btn.style.backgroundColor= "#0d637e";
        }
        else if(class_current=="11th"){
            btn=document.getElementById("11th");
            toggle_color();
            btn.style.backgroundColor= "#0d637e";
        }
        else if(class_current=="12th"){
            btn=document.getElementById("12th");
            toggle_color();
            btn.style.backgroundColor= "#0d637e";
        }
        console.log(class_current);
}

function selectionsubject(x){
    if(x==1){
        btn=document.getElementById("maths");
        if(subjects.includes("maths")){
            subjects=subjects.filter(subject=> subject!="maths");
            
        }
        else{
            subjects.push("maths");
            console.log("maths pushed");
        }
        
        subjects.includes("maths")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(subjects);  
    }
    else if(x==2){
        btn=document.getElementById("physics");
        
        if(subjects.includes("physics")){
            subjects=subjects.filter(subject=> subject!="physics");
            
        }
        else{
            subjects.push("physics");
        }
        
        subjects.includes("physics")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(subjects);  
    }
    else if(x==3){
        btn=document.getElementById("chemistry");
        if(subjects.includes("chemistry")){
            subjects=subjects.filter(subject=> subject!="chemistry");
            
        }
        else{
            subjects.push("chemistry");
        }
        
        subjects.includes("chemistry")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(subjects); 
    }
    else if(x==4){
        btn=document.getElementById("history");
        if(subjects.includes("history")){
            subjects=subjects.filter(subject=> subject!="history");
            
        }
        else{
            subjects.push("history");
        }
        
        subjects.includes("history")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(subjects); 
    }
    else if(x==5){
        btn=document.getElementById("biology");
        if(subjects.includes("biology")){
            subjects=subjects.filter(subject=> subject!="biology");
            
        }
        else{
            subjects.push("biology");
        }
        
        subjects.includes("biology")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(subjects); 
    }
    else if(x==6){
        btn=document.getElementById("english");
        if(subjects.includes("english")){
            subjects=subjects.filter(subject=> subject!="english");
            
        }
        else{
            subjects.push("english");
        }
        
        subjects.includes("english")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(subjects); 
    }
    
    else if(x==7){
        btn=document.getElementById("economics");
        if(subjects.includes("economics")){
            subjects=subjects.filter(subject=> subject!="economics");
            
        }
        else{
            subjects.push("economics");
        }
        
        subjects.includes("economics")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(subjects); 
    }
    else if(x==8){
        btn=document.getElementById("geography");
        if(subjects.includes("geography")){
            subjects=subjects.filter(subject=> subject!="geography");
            
        }
        else{
            subjects.push("geography");
        }
        
        subjects.includes("geography")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(subjects); 
    }
    else if(x==9){
        btn=document.getElementById("civics");
        if(subjects.includes("civics")){
            subjects=subjects.filter(subject=> subject!="civics");
            
        }
        else{
            subjects.push("civics");
        }
        
        subjects.includes("civics")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(subjects); 
    }

}


function selectionmindset(x) {
    if(x==1){
        btn=document.getElementById("Logical");
        if(mindsets.includes("Logical")){
            mindsets=mindsets.filter(subject=> subject!="Logical");
            
        }
        else{
            mindsets.push("Logical");
            console.log("Logical pushed");
        }
        
        mindsets.includes("Logical")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(mindsets);  
    }
    else if(x==2){
        btn=document.getElementById("Analytical");
        
        if(mindsets.includes("Analytical")){
            mindsets=mindsets.filter(subject=> subject!="Analytical");
            
        }
        else{
            mindsets.push("Analytical");
        }
        
        mindsets.includes("Analytical")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(mindsets);  
    }
    else if(x==3){
        btn=document.getElementById("STEM");
        if(mindsets.includes("STEM")){
            mindsets=mindsets.filter(subject=> subject!="STEM");
            
        }
        else{
            mindsets.push("STEM");
        }
        
        mindsets.includes("STEM")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(mindsets); 
    }
    else if(x==4){
        btn=document.getElementById("Disciplined");
        if(mindsets.includes("Disciplined")){
            mindsets=mindsets.filter(subject=> subject!="Disciplined");
            
        }
        else{
            mindsets.push("Disciplined");
        }
        
        mindsets.includes("Disciplined")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(mindsets); 
    }
    else if(x==5){
        btn=document.getElementById("Physical");
        if(mindsets.includes("Physical")){
            mindsets=mindsets.filter(subject=> subject!="Physical");
            
        }
        else{
            mindsets.push("Physical");
        }
        
        mindsets.includes("Physical")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(mindsets); 
    }
    else if(x==6){
        btn=document.getElementById("Reasoning");
        if(mindsets.includes("Reasoning")){
            mindsets=mindsets.filter(subject=> subject!="Reasoning");
            
        }
        else{
            mindsets.push("Reasoning");
        }
        
        mindsets.includes("Reasoning")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(mindsets); 
    }
    
    else if(x==7){
        btn=document.getElementById("Linguistic");
        if(mindsets.includes("Linguistic")){
            mindsets=mindsets.filter(subject=> subject!="Linguistic");
            
        }
        else{
            mindsets.push("Linguistic");
        }
        
        mindsets.includes("Linguistic")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(mindsets); 
    }
    else if(x==8){
        btn=document.getElementById("Organisational");
        if(mindsets.includes("Organisational")){
            mindsets=mindsets.filter(subject=> subject!="Organisational");
            
        }
        else{
            mindsets.push("Organisational");
        }
        
        mindsets.includes("Organisational")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(mindsets); 
    }
    else if(x==9){
        btn=document.getElementById("Learning");
        if(mindsets.includes("Learning")){
            mindsets=mindsets.filter(subject=> subject!="Learning");
            
        }
        else{
            mindsets.push("Learning");
        }
        
        mindsets.includes("Learning")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(mindsets); 
    }
}

function selectioninterests(x){
    if(x==1){
        btn=document.getElementById("Reading");
        if(interests.includes("Reading")){
            interests=interests.filter(subject=> subject!="Reading");
            
        }
        else{
            interests.push("Reading");
            console.log("Reading pushed");
        }
        
        interests.includes("Reading")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(interests);  
    }
    else if(x==2){
        btn=document.getElementById("Travel");
        
        if(interests.includes("Travel")){
            interests=interests.filter(subject=> subject!="Travel");
            
        }
        else{
            interests.push("Travel");
        }
        
        interests.includes("Travel")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(interests);  
    }
    else if(x==3){
        btn=document.getElementById("Music");
        if(interests.includes("Music")){
            interests=interests.filter(subject=> subject!="Music");
            
        }
        else{
            interests.push("Music");
        }
        
        interests.includes("Music")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(interests); 
    }
    else if(x==4){
        btn=document.getElementById("Art");
        if(interests.includes("Art")){
            interests=interests.filter(subject=> subject!="Art");
            
        }
        else{
            interests.push("Art");
        }
        
        interests.includes("Art")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(interests); 
    }
    else if(x==5){
        btn=document.getElementById("History2");
        if(interests.includes("History")){
            interests=interests.filter(subject=> subject!="History");
            
        }
        else{
            interests.push("History");
        }
        
        interests.includes("History")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(interests); 
    }
    else if(x==6){
        btn=document.getElementById("Space");
        if(interests.includes("Space")){
            interests=interests.filter(subject=> subject!="Space");
            
        }
        else{
            interests.push("Space");
        }
        
        interests.includes("Space")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(interests); 
    }
    
    else if(x==7){
        btn=document.getElementById("Sports");
        if(interests.includes("Sports")){
            interests=interests.filter(subject=> subject!="Sports");
            
        }
        else{
            interests.push("Sports");
        }
        
        interests.includes("Sports")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(interests); 
    }
    else if(x==8){
        btn=document.getElementById("Movies");
        if(interests.includes("Movies")){
            interests=interests.filter(subject=> subject!="Movies");
            
        }
        else{
            interests.push("Movies");
        }
        
        interests.includes("Movies")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(interests); 
    }
    else if(x==9){
        btn=document.getElementById("Coding");
        if(interests.includes("Coding")){
            interests=interests.filter(subject=> subject!="Coding");
            
        }
        else{
            interests.push("Coding");
        }
        
        interests.includes("Coding")?btn.style.backgroundColor="#0d637e":btn.style.backgroundColor="#5f6777"
        console.log(interests); 
    }

}

function returnData() {
    let endUrl = careerURl(class_current, subjects, mindsets, interests);
    let baseUrl = "http://careerguru.pythonanywhere.com/api?";
    
    fetch(baseUrl + endUrl).then(response => response.text()).then(data=>console.log(data));
    
}