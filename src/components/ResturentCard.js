import { STAR_URL } from "../utils/constants";
import CDN_URL from "../utils/constants";



const ResturentCard=(props)=>{
    const {resData}=props
    const {cloudinaryImageId,name,avgRating,cuisines,areaName,sla:{ slaString }} =resData?.info
    return(
        <div className="res-card">
            <div className="individual">
                <img className="res-img" src={CDN_URL+cloudinaryImageId} alt=""/>
                <h3 className="name">{name}</h3>
            
                <div className="content">
                    <img className="star" src={STAR_URL} alt="" />
                    <span className="rating">  {avgRating} .  { slaString } minutes </span>
                </div>
                <div className="place"> {cuisines.join(',')} </div>
                <div className="place"> {areaName}</div>
            </div>
        </div>
    )
}
export default ResturentCard;