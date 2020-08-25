//function to upload schedule 
function uploadSchedule(_quarter, _year, _major, _classes, _rating, _description, db) {
    let _classnames = []
    _classes.forEach(element => _classnames.push(element.name))

    db.collection('schedules').add({
        quarter: _quarter,
        year: _year,
        major: _major,
        classes: _classes,
        classnames: _classnames,
        rating: _rating,
        description: _description,
    })
}

//class object 
function createClass(_name, _type, _difficultyRating, _interestingRating, _comment, db) {
    return {
        name: _name.trim(),
        type: _type,
        difficultyRating: _difficultyRating,
        interestingRating: _interestingRating,
        comment: _comment

    }
}

//get full schedule of desired classes combination, return a promise
async function getSchedule(classnames, db) {
    const dbRef = db.collection('schedules').where("classnames", "array-contains", classnames[0].trim());
    try {
        let querySnapshot = await dbRef.get();
        let result = []
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
    return sub.every(v => master.indexOf(v.trim()) !== -1)
}

//get recommended classes based on year and major 
async function getRecommendedClasses(year, major, db) {
    const dbRef = db.collection('schedules').where("year", "==", year).where("major", "==", major)
    try {
        let frequencyCount = new Map();
        let querySnapshot = await dbRef.get();
        querySnapshot.forEach(doc => {
            doc.data().classes.forEach(cls => {
                if (frequencyCount.has(cls.name)) {
                    frequencyCount.set(cls.name, frequencyCount.get(cls.name) + 1);
                } else {
                    frequencyCount.set(cls.name, 1);
                }
            })
        });

        const sortedCount = new Map([...frequencyCount.entries()].sort((a, b) => b[1] - a[1]));

        let finalResult = new Map();
        let count = 0;
        for (let [key, value] of sortedCount) {
            finalResult.set(key, value);
            count++;
            if (count === 5) break;
        }
        return finalResult;

    } catch (err) {
        console.log('Error getting documents', err);
    }
}

//previous function gets the name of the classes, this function is to get the extra information (comment, rating etc)
async function getClassInformation(className, db) {
    const dbRef = db.collection('schedules').where("classnames", "array-contains", className);
    try {
        let classesInfo = [];
        let querySnapshot = await dbRef.get();
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

//get a list of easy GE's 
async function getEasyGEs(db) {
    const dbRef = db.collection('schedules');
    try {
        let querySnapshot = await dbRef.get();
        let difficultyCount = new Map();
        querySnapshot.forEach(doc => {
            doc.data().classes.forEach(cls => {
                if (cls.type === 'GE') {
                    if (cls.name in difficultyCount) {
                        difficultyCount.get(cls.name).push(cls.difficultyRating);
                    } else {
                        let classDifficultyRatings = [cls.difficultyRating];
                        difficultyCount.set(cls.name, classDifficultyRatings);
                    }
                }
            });
        });

        let averageRating = new Map();
        for (let [key, value] of difficultyCount) {
            let average = (array) => array.reduce((a, b) => a + b) / array.length; //this is a function
            averageRating.set(key, average(value));
        }

        const sortedRating = new Map([...averageRating.entries()].sort((a, b) => b[1] - a[1]));
        let finalResult = new Map();
        let count = 0;
        for (let [key, value] of sortedRating) {
            finalResult.set(key, value);
            count++;
            if (count === 10) break;
        }
        return finalResult;

    } catch (err) {
        console.log('Error getting documents', err);
    }
}

//get a list of interesting GE's 
async function getInterestingGEs(db) {
    const dbRef = db.collection('schedules');
    try {
        let querySnapshot = await dbRef.get();
        let interestingCount = new Map();
        querySnapshot.forEach(doc => {
            doc.data().classes.forEach(cls => {
                if (cls.type === 'GE') {
                    if (cls.name in interestingCount) {
                        interestingCount.get(cls.name).push(cls.interestingRating);
                    } else {
                        let classInterestingRatings = [cls.interestingRating];
                        interestingCount.set(cls.name, classInterestingRatings);
                    }
                }
            });
        });

        let averageRating = new Map();
        for (let [key, value] of interestingCount) {
            let average = (array) => array.reduce((a, b) => a + b) / array.length; //this is a function
            averageRating.set(key, average(value));
        }

        const sortedRating = new Map([...averageRating.entries()].sort((a, b) => b[1] - a[1]));
        let finalResult = new Map();
        let count = 0;
        for (let [key, value] of sortedRating) {
            finalResult.set(key, value);
            count++;
            if (count === 10) break;
        }
        return finalResult;

    } catch (err) {
        console.log('Error getting documents', err);
    }
}

module.exports = { 
    uploadSchedule, 
    createClass, 
    getSchedule, 
    getRecommendedClasses, 
    getClassInformation, 
    getEasyGEs, 
    getInterestingGEs,
};