var db=require("riak-js").getClient();



console.log ("Process started " +new  Date());
for (var i=1; i <=10000; i++){

	var p = {id:i, name: "Hello--" + i};
	db.save("people", p.id, p);

	if (i%500==0){
		console.log ("in process  : "+ i + " " + new  Date());
	}
}

console.log ("getting data for 500th record");
db.get ("people", 500, function (err, data, more){
	if (err){
		console.log ("Error : " + err);
	}else{
	console.log (data);
}

});
