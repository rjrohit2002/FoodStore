import ResturentCard from "./ResturentCard"
//import restList from "../utils/mockData"
import { useState, useEffect} from "react";
import Seamers from "./Seamers";
const Body=()=>{

  //State Variable
  // Always define useState inside component
  // Try to initialize on top of component
  // Neve create state variable inside if-else,for loop and function
  const [listOfRes,setlistOfRes]=useState([]);
  const [filteredList, setFilteredList]=useState([]);
  const [searchText,setSearchText]=useState("");
  
  console.log ("rendered");
  console.log( searchText)
  useEffect(()=>{
      fetchData();
  },[])
  const fetchData= async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json= await data.json();
    console.log(json);
    setlistOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.
      restaurants
      )
      setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.
        restaurants)
      


  }

 
  //Normal JS Variable
    let listOfRestaurents=[
        {"info": {
            "id": "691733",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Kashmiri Gate",
            "areaName": "Kashmere Gate Metro Station",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Chinese",
              "Asian",
              "Tibetan",
              "Desserts"
            ],
            "avgRating": 3.4,
            "parentId": "61955",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 53,
              "lastMileTravel": 3.6,
              "serviceability": "SERVICEABLE",
              "slaString": "50-55 mins",
              "lastMileTravelString": "3.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            }
        }
    },
    {
        "info": {
            "id": "691734",
            "name": "Dominos",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Kashmiri Gate",
            "areaName": "Kashmere Gate Metro Station",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Chinese",
              "Asian",
              "Tibetan",
              "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "61955",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 53,
              "lastMileTravel": 3.6,
              "serviceability": "SERVICEABLE",
              "slaString": "50-55 mins",
              "lastMileTravelString": "3.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            }
        }}
        
    ];

// // Conditional Rendering
//   if(listOfRes.length==0){
//     return <Seamers/>
//   }


    return listOfRes.length==0 ? (<Seamers/>) : (
    <div className="body">
        <div className="filter">
          <input name="search" type="text" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
           
          }}/>
           
          <button onClick={()=>{
            const filteredRes= listOfRes.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredList(filteredRes)
          }}>Search</button>
           <button className="filter-btn" onClick={()=>{
               const filterList=listOfRes.filter((res)=>res.info.avgRating>4).sort((a, b) => b.info.avgRating - a.info.avgRating);;
               setFilteredList(filterList);
              }}
              >
                 Top Rated Resturent
           </button>
           <div className="res-container">
            {
           filteredList.map((res)=> (<ResturentCard key={res.info.id} resData={res} />))
}

           </div>


        </div>

    </div>
    )
}
export default Body;