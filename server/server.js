securecollection = new Meteor.Collection('securecollection');
Meteor.startup( function(){ securecollection.insert({ greeting: "test for the lulz"}) });
Meteor.publish("simpletest", function () {
  return securecollection.find({});
});
