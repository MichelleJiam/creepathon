conn = new Mongo(); 
db = conn.getDB("test"); 
col = db.getCollection("venmo");
col.find({"payment.actor.first_name": "NAME"}).sort( { "payment.actor.username": 1 } ).forEach(function (object) {
    print ("Actor (" + object.payment.actor.id +"): " + object.payment.actor.first_name + " "+ object.payment.actor.last_name);
    if (object.payment.target.user != null)
    {
        print ("    Target ("+object.payment.target.user.id+"): " + object.payment.target.user.first_name + " "+ object.payment.target.user.last_name);
        print ("    Note: " + object.payment.note);
    }
    else
        print("NO TARGET USER IN THIS TRANSACTION");
});
