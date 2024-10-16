const saveLS = cfpData => {
    const serialisedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfp", serialisedArr);
}

const getLS = () => {
    const retrievedArr = localStorage.getItem("cfp");
    if (retrievedArr !== null) {
        return JSON.parse(retrievedArr)
    } else {
        return [];
    }
}
const cfpData = getLS ();
export { cfpData, saveLS, getLS };//cfpData