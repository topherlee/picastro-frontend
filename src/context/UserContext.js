import jwtDecode from "jwt-decode";


export const getUserID = function(token) {
    return jwtDecode(token?.access).user_id;
}