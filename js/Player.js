class Player{
     constructor(){
         
     }

     getCount(){
         var palyerCountRef = database.ref('playerCount');
         palyerCountRef.on("value",function(data){
             playerCount = data.val();    
         })
     }

   updateCount(count){
        database.ref('/').update({
        palyerCount : Count
  });
   }

   update(name){
       var playerIndex = "player"+ playerCount;
       database.ref(playerIndex).set({
           name : name
       });
   }
}