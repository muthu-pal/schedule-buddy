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
function uploadSchedule(_year, _rating, _quarter, _major, _description, _classes) {
    _classnames = []
    _classes.forEach(element => _classnames.push(element.name))

    db.collection('schedules').add({
        year: _year,
        rating: _rating,
        quarter: _quarter,
        major: _major,
        description: _description,
        classes: _classes, 
        classnames: _classnames
    })
}

//class object 
function createClass(_comment, _name, _rating, _type) {
    return {
        comment: _comment,
        name: _name.trim(),
        rating: _rating,
        type: _type
    }
}

//get full schedule of desired classes combination, return a promise
async function getSchedule(classnames) {
    dbRef = db.collection('schedules').where("classnames", "array-contains", classnames[0].trim());
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
    return sub.every(v => master.indexOf(v.trim()) != -1)
}

//get recommended classes based on quarter/year and major 
async function getRecommendedClasses(quarter, year, major) {
    dbRef = db.collection('schedules').where("quarter", "==", quarter).where("year", "==", year).where("major", "==", major)
    try {
        var frequencyCount = new Map();
        var querySnapshot = await dbRef.get();
        querySnapshot.forEach(doc => {
            doc.data().classes.forEach(cls => {
               if (frequencyCount.has(cls.name)) {
                   frequencyCount.set(cls.name, frequencyCount.get(cls.name)+1); 
               } else {
                   frequencyCount.set(cls.name, 1); 
               }
            })
        });

        const sortedCount = new Map([...frequencyCount.entries()].sort((a, b) => b[1] - a[1]));

        var finalResult = new Map(); 
        var count = 0; 
        for(let [key,value] of sortedCount) {
            finalResult.set(key, value); 
            count++;
            if(count == 5) break; 
        }
        return finalResult;
        
    } catch (err) {
        console.log('Error getting documents', err);
    } 
}

//previous function gets the name of the classes, this function is to get the extra information (comment, rating etc)
async function getClassInformation(className) {
    dbRef = db.collection('schedules').where("classnames", "array-contains", className);
    try {
        classesInfo = []; 
        var querySnapshot = await dbRef.get();
        querySnapshot.forEach(doc => {
            doc.data().classes.forEach(cls => {
               if (cls.name === className) {
                   classesInfo.push(cls); 
               } 
            })
        }); 
        return classesInfo; 
    } catch (err) {
        console.log('Error getting documents', err);
    } 
}

// //get a list of easy / interesting GE's 
// function getGEs() {
//     dbRef = db.collection('GE');
//     try {
//         var querySnapshot = await dbRef.get();
//         result = []
//         querySnapshot.forEach(doc => {
//             if (hasSubArray(doc.data().classnames, classnames)) {
//                 result.push(doc.data()); 
//             } 
//         });
//         return result;
//     } catch (err) {
//         console.log('Error getting documents', err);
//     } 
// }