var mongojs=require("mongojs");
var db  = mongojs.connect ("test", ["people"]);

//db.people.find().count (function (e,n){
//	console.count ("Total : " + n);
//
//});
console.log ("Process started " +new  Date());
for (var i=1; i <=10000; i++){

	var p = {id:i, name: "Hello--" + i};
	db.people.save(p);

	if (i%500==0){
		console.log ("in process  : "+ i + " " + new  Date());
	}
}

console.log ("getting data for 500th record");
db.people.find ({id:500},  function (err,data){
	if (err){
		console.log ("Error : " + err);
	}else{
	console.log (data);
}

});
