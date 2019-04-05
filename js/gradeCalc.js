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
});