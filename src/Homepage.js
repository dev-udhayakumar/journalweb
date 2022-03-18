import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../src/firebaseconfig"
const HomePage = () => {

    const [data, setData] = useState([]);

    async function fecthdata() {
        const querySnapshot = await getDocs(collection(db, "EntryData"));
        const mapdata = querySnapshot.docs.map((e) => {
            return {
                Date: e.data().Date,
                text: e.data().Entry,
            }
        })
        setData(mapdata);
        console.log(mapdata);
    }

    useEffect(() => {
        fecthdata();
    },[])

    return (
        <>
            <div class="container-fluid">
                <div class="container-sm">
                    <h2 class="mb-5">Journal web</h2>
                    {data.map((element, index) => {
                        return (
                            <div key={index} class="card rounded border-0">
                                <h5 class="card-title ms-3  ">{element.Date}</h5>
                                <div class="card-body">
                                    {element.text}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default HomePage;