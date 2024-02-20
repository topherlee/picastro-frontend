// // import React, { useContext } from "react";

// // import { AuthContext } from "../../context/AuthContext";

// const imageLike = async (requestData, fetchInstance, token) => {

//     // const {
//     //     token,
//     //     fetchInstance,
//     //     user
//     // } = useContext(AuthContext);

//     const likeUrl = '/api/like/';

//     console.log("imageLike");

//     try {
//         console.log("imageLike requestData", requestData);

//         var response = await fetchInstance(likeUrl, {
//             method: 'POST',
//             headers: {
//                 'Authorization': `Token ${token.access}`,
//                 'Content-Type': 'application/json'
//             },
//             body: requestData
//         })

//         return response
//     } catch (err) {
//         console.log('ERROR',err)
//         return response
//     }
// }

// export default imageLike;

// // useEffect(() => {

// //     fetch(`${domain}/api/current_user/`, {
// //         method: 'GET',
// //         headers: {
// //             'Authorization': `Token ${token.access}`,
// //             'Content-Type': 'application/json'
// //         }
// //     })
// //     .then(res => {return res.json()})
// //     .then((result) => {
// //         //console.log("INCOMINGDATA",result.username)
// //         setCurrentUser(result);
// //     }).catch (err => {
// //         console.log(err);
// //         //setData(existingData);
// //     })
// // }, [])
