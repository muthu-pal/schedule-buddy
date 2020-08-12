const firebaseConfig = {
    apiKey: "AIzaSyB-ZOFGWh1RypwbK1I_Tz6Pw0S073k16zU",
    authDomain: "schedule-buddy-fc6c5.firebaseapp.com",
    databaseURL: "https://schedule-buddy-fc6c5.firebaseio.com",
    projectId: "schedule-buddy-fc6c5",
    storageBucket: "schedule-buddy-fc6c5.appspot.com",
    messagingSenderId: "701626130578",
    appId: "1:701626130578:web:c68e333703087b6d1d064b"
};

firebase.initializeApp(firebaseConfig); 
const db = firebase.firestore();

//_classes include -> comment, name, rating, type fields 
function uploadSchedule(_username, _year, _rating, _quarter, _major, _description, _classes) {
    _classnames = []
    _classes.forEach(element => _classnames.push(element.name))

    db.collection('schedules').add({
        username: _username, 
        year: _year,
        rating: _rating,
        quarter: _quarter,
        major: _major,
        description: _description,
        classes: _classes, 
        classnames: _classnames
    })
}

//get full schedule of desired classes combination, return a promise
async function getSchedule(classnames) {
    dbRef = db.collection('schedules').where("classnames", "array-contains", classnames[0]);
    try {
        var querySnapshot = await dbRef.get();
        result = []
        querySnapshot.forEach(doc => {
            if (hasSubArray(doc.data().classnames, classnames)) {
                result.push(doc.data()); 
            } 
        });
        return result;
    } catch (err) {
        console.log('Error getting documents', err);
    } 
}

function hasSubArray(master, sub) {
    return sub.every(v => master.indexOf(v) != -1)
}
