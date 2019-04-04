$(document).ready(function(){
   $("input[type='submit']").click(function(){
      var i;
      var answers = [4, 5, 3, 1, 2, 2, 4, 4, 3, 2, 1, 2, 2, 1, 2, 5, 3, 4, 1, 1] 
      var grade = 0;
      for (i=1; i <= 20; i++) {
         var radioValue = $("input[name='"+'question-'+i+'-answers'+"']:checked").val();
         if(radioValue && (radioValue == answers[i-1]) ){
            grade++;
         }   
      }
   });

   document.getElementById('demo').innerHTML = 15 + ":" + 00;
   startTimer();
   function startTimer() {
       var presentTime = document.getElementById('demo').innerHTML;
       var timeArray = presentTime.split(/[:]+/);
       var m = timeArray[0];
       var s = checkSecond((timeArray[1] - 1));
       if(s==59){m=m-1}
      //if(m<0){alert('timer completed')}

      document.getElementById('demo').innerHTML = m + ":" + s;
      setTimeout(startTimer, 1000);
   }

   function checkSecond(sec) {
     if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
     if (sec < 0) {sec = "59"};
     return sec;
   }
});