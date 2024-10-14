const cfpData = getLS ();

const saveLS = function(cfpData) {
    const serialisedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfp", serialisedArr);
}

const getLS = function() {
    const retrievedArr = localStorage.getItem("cfp");
    if (retrievedArr !== null) {
        return JSON.parse(retrievedArr)
    } else {
        return [];
    }
}

export { cfpData, saveLS, getLS };