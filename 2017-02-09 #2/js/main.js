var user = {
  name: "Hunter0x10",
  stats: {
    strength: 500,
    intelligence: 100500
  },
  bag: {
    "super flask of water": {
      weight: 3,
      heal: 5,
      harm: 0
    },
    "steel dagger": {
      weight: 2,
      heal: 0,
      harm: 10
    }
  }
}


function func(obj) {
 for(var key in obj){
   if(typeof obj[key] == 'object'){
     console.log(key);
     func(obj[key]);
   }else{
     console.log(key)
   }
 }
}
func(user);
