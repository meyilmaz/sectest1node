Meteor.autorun( function(){
    Meteor.subscribe("simpletest");
}
);

secureclientcollection = new Meteor.Collection('securecollection');

Template.hello.helpers({
    greeting:function(){
        return secureclientcollection.find().fetch()[0];
    }
});