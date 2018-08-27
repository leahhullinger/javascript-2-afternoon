const whosOnline = (friends) => {
    // Your code here...
      const results = {}
      
      for( var i = 0; i<friends.length;i++){
        if(friends[i].status === "online" && friends[i].lastActivity <= 10){
          if(!results.online){
            results.online = []
          }
          results.online.push(friends[i].username)
        } 
        else if (friends[i].status === "offline"){
          if(!results.offline){
            results.offline = []
          }
          results.offline.push(friends[i].username) 
        } 
        else if (friends[i].status === "online" && friends[i].lastActivity < 10){
          if(!results.away){
            results.away = []
          }
          results.away.push(friends[i].username)
          
        }
      }
        
    return results;
    
    }