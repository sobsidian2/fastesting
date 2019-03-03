// var request = require("request");
var request = require("axios");
var querystring = require('querystring');
describe("Hello World ", function() {
    var header = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    var form = {
        username: 'demo@fillaseat.com',
        password: 'demo1234'
    };
    var baseUrl = 'https://mobile.fillaseat.com/';
    var events = "https://mobile.fillaseat.com/events/getallbyname/v2/lasvegas/{apitoken}/{eventdisplay}/0";
    var formData = querystring.stringify(form);
    it("Test Login API",async function() {
        var login= await request.post(baseUrl+"auth/login/lasvegas",formData, {headers: header} );
        console.log("Login Response Status: ",login.status);
        console.log(login.data);
        expect(login.status).toBe(200);
        expect(login.data.Result).toBe("success");
    });

    it("Test Events API",async function() {
        var login= await request.post(baseUrl+"auth/login/lasvegas",formData, {headers: header} );
        var events= await request.post(baseUrl+"events/getallbyname/v2/lasvegas/"+login.data.Token+"/"+login.data.EventDisplay+"/0", {headers: header} );
        console.log("Events Response Status: ",events.status);
        console.log(events.data);
        expect(events.status).toBe(200);
        expect(events.data.data).not.toBe(null);
    });

    it("Test Event Details API",async function() {
        var login= await request.post(baseUrl+"auth/login/lasvegas",formData, {headers: header} );
        var events= await request.post(baseUrl+"events/getallbyname/v2/lasvegas/"+login.data.Token+"/"+login.data.EventDisplay+"/0", {headers: header} );
        console.log("Events Response Status: ",events.status);
        expect(events.status).toBe(200);
        expect(events.data.data).not.toBe(null);
        var event = events.data.data;
        console.log("EVENT",event[1].eid);
        var eventDetail= await request.post(baseUrl+"events/geteventdetail/lasvegas/"+login.data.Token+"/"+event[0].eid, {headers: header} );
        console.log("Events Detail Response Status: ",eventDetail.status);
        console.log(eventDetail.data);
        expect(eventDetail.status).toBe(200);
        expect(eventDetail.data.data).not.toBe(null);
    });

    it("Test Event Performances API",async function() {
        var login= await request.post(baseUrl+"auth/login/lasvegas",formData, {headers: header} );
        var events= await request.post(baseUrl+"events/getallbyname/v2/lasvegas/"+login.data.Token+"/"+login.data.EventDisplay+"/0", {headers: header} );
        console.log("Events Response Status: ",events.status);
        expect(events.status).toBe(200);
        expect(events.data.data).not.toBe(null);
        var event = events.data.data;
        console.log("EID",event[1].eid);
        var eventDetail= await request.post(baseUrl+"events/geteventdetail/lasvegas/"+login.data.Token+"/"+event[0].eid, {headers: header} );
        var eventPerformance= await request.post(baseUrl+"events/getallperformancesforevent/lasvegas/"+login.data.Token+"/"+event[0].eid, {headers: header} );
        console.log("Events Performance Response Status: ",eventPerformance.status);
        console.log(eventPerformance.data);
        expect(eventPerformance.status).toBe(200);
        expect(eventPerformance.data.data).not.toBe(null);
    });

    it("Test Event Reservation API",async function() {
        var login= await request.post(baseUrl+"auth/login/lasvegas",formData, {headers: header} );
        var events= await request.post(baseUrl+"events/getallbyname/v2/lasvegas/"+login.data.Token+"/"+login.data.EventDisplay+"/0", {headers: header} );
        console.log("Events Response Status: ",events.status);
        expect(events.status).toBe(200);
        expect(events.data.data).not.toBe(null);
        var event = events.data.data;
        console.log("EID",event[1].eid);
        var eventPerformance= await request.post(baseUrl+"events/getallperformancesforevent/lasvegas/"+login.data.Token+"/"+event[0].eid, {headers: header} );
        console.log("Events Performance Response Status: ",eventPerformance.status);
        expect(eventPerformance.status).toBe(200);
        expect(eventPerformance.data.data).not.toBe(null);
        var perform = eventPerformance.data.data;
        console.log("PID",perform[0].pid);
        var eventReservattion = await request.post(baseUrl+"events/placereservation/lasvegas/"+login.data.Token+"/"+perform[0].pid+"/1/1", {headers: header} );
        console.log("Events Reservation Response Status: ",eventReservattion.status);
        console.log(eventReservattion.data);
        expect(eventReservattion.status).toBe(200);
        expect(eventReservattion.data.data).not.toBe(null);
    });







    /*it("Test Login with Request", async function(){
     var httpResponse = await request({url:url, headers: header, body: formData, method: 'POST'});
     console.log(httpResponse);
     });*/
});
