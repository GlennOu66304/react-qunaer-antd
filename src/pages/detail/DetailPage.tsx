import React from 'react'
// import styles from './DetailPage.module.css'
// 3)RouteComponentProps react-rotuer-dom
import {RouteComponentProps} from 'react-router-dom'

// 4)interface prop types check
interface MatchParams{
    touristRouteId:string
}

export const DetailPage: React.FC<RouteComponentProps< MatchParams>> = (props) => {
    // console.log(props)
    // aftert add the  MatchParams and the <RouteComponentProps< MatchParams>> , the error after props.location will lose
    
    // every router compoponetn will have props :2)match.history,location(props)
    // console.log(props.history)
    // console.log(props.location)
    // console.log(props.match)

    return (
    
        // <div>Thi is the detail page</div>
        // 5){props.match.params.touristRouteID}
      <h3>旅游路线详情页面.路线ID:{props.match.params.touristRouteId} </h3>
    )

}