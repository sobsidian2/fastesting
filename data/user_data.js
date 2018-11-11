
// store user data in object for ease of use and readability...
var UserData = {
    baseUrl : {
        admin: "https://secure2.fillaseat.com/lasvegas/a/dmin/",
        client: "https://www.fillaseatlasvegas.com/login2.php",
        // client: browser.baseUrl
    },
    loginCredentials : {
        admin:{
            city: "LAS VEGAS",
            username: "demoadmin@fillaseat.com",
            password: "demo1234"
        },
        client: {
            username: browser.params.login.username,
            password: browser.params.login.password
        }
    },

    createUserData : {
        firstName : 'sajid',
        lastName: 'manzoor', // a random string wil also be appended with last name
        email: 'sqaprofessional@gmail.com',
        address: 'this is edit address of user',
        city: 'amsterdam',
        zip: '654321',
        homePhone: '1234567890',
        cellPhone: '1234567890',
        isActive: 'No',
        isAdmin: 'No',
        membershipType: 'Gold',
        isPaid: 'No',
        state:'Alabama'
    },

    editUserData : {
        firstName : 'sajid1',
        lastName: 'manzoor1', // a random string wil also be appended with last name
        email: 'sqaprofessional1@gmail.com',
        address: 'this is test address of user',
        city: 'lahore',
        zip: '12345',
        homePhone: '9876543210',
        cellPhone: '9876543210',
        isActive: 'Yes',
        isAdmin: 'Yes',
        membershipType: 'Platinum',
        isPaid: 'Yes',
        state:'California'
    },

    searchUser: {
        user: "Test"
    },

    addEventData : {
        name : 'Test Event',
        description: 'this is test description of new test event',
        additionalInfo: 'this is additional information of new event',
        ageRestriction: '18 and Over',
        dressCode: 'Casual',
        isActive: 1,
        freeShow: 1,
        price: '15',
        ticketValue: '',
        showLimit: '15',
        maxReservationLimit: '0',
        venue: 'Hooters Casino',
        venueAddress:'115 E. Tropicana Ave',
        venueUrl:'',
        venueEmail:'test@test.com',
        contactName:'sajid manzoor',
        contactPhone:{
            phone1:'111',
            phone2:'111',
            phone3:'1111'
        },
        imagePath:'../uploadfiles/photo1.png',
        youtubeUrl:'7CVtTOpgSyY'
    },

    updateEventData : {
        name : 'Dummy Event',
        description: 'this is test description of udpated test event',
        additionalInfo: 'this is additional information of udpated event',
        ageRestriction: '10 and Over',
        dressCode: 'Casual',
        isActive: 1,
        freeShow: 1,
        price: '15',
        ticketValue: '',
        showLimit: '12',
        maxReservationLimit: '0',
        venue: 'Hooters Casino',
        venueAddress:'115 E. Tropicana Ave',
        venueUrl:'',
        venueEmail:'dummy@test.com',
        contactName:'dummy dummy',
        contactPhone:{
            phone1:'222',
            phone2:'222',
            phone3:'2222'
        },
        imagePath:'../uploadfiles/photo1.png',
        youtubeUrl:'7CVtTOpgSyY'
    },

    imageUpdatePath:'../uploadfiles/nature.jpg',

    addPerformance: {
      date:{
          day: '15',
          month:'11',
          year:'0'
      },
        time:{
            hour: '4',
            min:'4',
            period:'0'
        },
        webStartdate:{
            day: '16',
            month:'11',
            year:'0'
        },
        webEnddate:{
            day: '25',
            month:'11',
            year:'0'
        },
        webStartTime:{
            hour: '4',
            min:'4',
            period:'0'
        },
        WebEndTime:{
            hour: '4',
            min:'4',
            period:'0'
        },
        pickUp: 'sample ticket pick up value',
        totalTickets: '100',
        active: '0',
        featured:'0',
        additionalInfo: 'dummy tst additional info',
    },
    editPerformance: {
        date:{
            day: '15',
            month:'11',
            year:'0'
        },
        time:{
            hour: '4',
            min:'4',
            period:'0'
        },
        webStartdate:{
            day: '15',
            month:'11',
            year:'0'
        },
        webEnddate:{
            day: '25',
            month:'11',
            year:'0'
        },
        webStartTime:{
            hour: '4',
            min:'4',
            period:'0'
        },
        WebEndTime:{
            hour: '4',
            min:'4',
            period:'0'
        },
        pickUp: 'sample ticket pick up value',
        totalTickets: '100',
        active: '0',
        featured:'0',
        additionalInfo: 'dummy tst additional info',
    },
    massMail:{
        to: 'All Active Members',
        subject:'test mass email',
        alertEmail:'sqaprofessional1@gmail.com',
    },

    //CLIENT RELATED TEST DATA
    viewEvent:{
        name:'Test Event'
    },
    billingInfo:{
        address:'Test',
        city:'Nevada',
        state:'Nevada',
        zip:'22222',
        creditCardName:'4111111111111111',
        creditCardNumber:'4111111111111111',
        ccv:'123',
        expiryMonth:'',
        expiryYear:''
    },

    joinPersonalInfo:{
        firstName: 'Test',
        lastName: 'User',
        email: 'user1@sandbox.fillaseat.com',
        password:'123456',
        homePhone: '5673334444',
        cellPhone:'5553334444',
        dob:{
            day:'15',
            month:'11',
            year:'1990'
        },
        hearUs:'Facebook',
    },


};
module.exports = UserData;