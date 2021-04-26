import database from './firebase'

export const getHelpers = (update) => {
    database.ref('help/').once('value')
    .then(snapshot => update(snapshot.val()))
}

export const getLinks = (update) => {
    database.ref('links/').once('value')
    .then(snapshot => update(Object.values(snapshot.val())))
}

export const getUnverified = (update) => {
    database.ref('unverified/').once('value')
    .then(snapshot => {
        if(snapshot.exists()) update(snapshot.val())
        else update(undefined)
    })
}

export const addData = (arr) => {
    let result = {};
    arr.forEach(lead => {
        if(lead['phone'] && lead['State']!="" && lead['State'].match("/")==null){//&&lead['STATE']&&lead['Type of Help']&&lead.Phone){
        // const s = lead['Status'].toLowerCase();
        const st = lead['State'].toLowerCase()//.replace(/\/|\./g, "_");
        const cat = 'Remdesivir'//lead['Type of Help'].toLowerCase().replace(" ", "_");
        // if (!result[s]) result[s]={};
        result [`${st}/${cat}/${lead['phone']}`] = {
                ...lead
            }
    }
    })
    console.log({...result})
    // database.ref(`data/temp`).update(result).then(()=>console.log(result)).catch(e=>console.log(e));
}

export const logChange = (item, change) => {
    const email = localStorage.getItem('email');
    database.ref(`logs/${email}`).push().set({
        state: item[2],
        category: item[3],
        phone: item[0],
        user: email,
        change: change,
        datetime: Date.now()
    })
}

export const markVerified = (item, toggle, refresh) => {
    database.ref(`help/${item[2]}/${item[3]}/${item[0]}`)
    .update({...item[1], verified: Date.now()}).then(()=>{
        database.ref(`unverified/${item[2]}/${item[3]}/${item[0]}`).set(null)
        .then(()=>{
            refresh[0]?getHelpers(refresh[1]):getUnverified(refresh[1]);
            toggle(null);
        })
    });
}

export const wrongEntry = (item, toggle, refresh) => {
    database.ref(`data/wrong/${item[2]}/${item[3]}/${item[0]}`)
    .update({...item[1], verified: Date.now()}).then(()=>{
        database.ref(`unverified/${item[2]}/${item[3]}/${item[0]}`).set(null)
        .then(()=>{
            getUnverified(refresh);
            toggle(null);
        })
    });
}

export const exhausted = (item, toggle, refresh) => {
    database.ref(`unverified/${item[2]}/${item[3]}/${item[0]}`)
    .update({...item[1], verified: Date.now()}).then(()=>{
        database.ref(`help/${item[2]}/${item[3]}/${item[0]}`).set(null)
        .then(()=>{
            getHelpers(refresh);
            toggle(null);
        })
    });
}

export const addHelp = (data, report) => {
    const email = localStorage.getItem('email');
    const dbRef = database.ref(`${email?'help':'unverified'}/${data.region}/${data.category}/${data.phone}`);
    const obj = {};
    ['desc', 'area', 'name', 'verified'].forEach(key => {
        if (data[key]) obj[key] = data[key]
    })
    dbRef.once('value').then(ss => {
        if (ss.exists() && !data.verified) report("707");
        else {
            dbRef.update(obj).then(s => report("200"))
        }
    }).catch(e => report("400"))
}

export const addHelpAdmin = (data, report) => {
    const dbRef = database.ref(`help/${data.region}/${data.category}/`);
    const names = data.name.split(",");
    const phones = data.phone.match(/\d{10}/g);
    if(names.length===phones.length) {
        const obj = {};
        phones.forEach((num, i) => {
            obj[num] = {name: names[i], verified: Date.now()}
        });
        dbRef.update(obj).then(()=>report("200")).catch(e=>console.log(e));
    }
    else console.log(names, phones)
    // const dbRef = database.ref(`help/`);
    // dbRef.once('value').then(ss => {
    //     const help = ss.val();
    //     const d = new Date();
    //     Object.keys(help).forEach(region => {
    //         Object.keys(help[region]).forEach(categ => {
    //             Object.keys(help[region][categ]).forEach(key => {
    //                 help[region][categ][key]['verified'] = 1619102574979;
    //             })
    //         })
    //     })
    //     dbRef.update(help).then(()=>report("200"))
    // })
}