let henryObj = {};

for (let tr of document.getElementsByTagName("tr")) {
    for (let th of tr.getElementsByTagName("td")) {
        
        const [types, effectivenessString] = th.getAttribute("title").split(" = ");

        const [attackType, defenseType] = types.split(" → ");

        const effectiveness = effectivenessString.split(" ")[0];

        // console.log(attackType, defenseType, effectiveness);

        if (!Object.keys(henryObj).includes(attackType)) {
            henryObj[attackType] = [];
        } else {

            const subobj = {[defenseType]: effectiveness}

            henryObj[attackType].push(subobj);
        }

        // henryObj[attackType] = [...henryObj[attackType], defenseType];

    }
}

console.log(henryObj);