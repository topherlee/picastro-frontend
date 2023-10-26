import React, { useContext, useState } from "react";
import {
    Text,
    View
} from "react-native";

import { AuthContext } from "../../../context/AuthContext";
import globalStyling from "../../../../constants/globalStyling";


const CommentOutputContainer = (props) => {
    const [comment, setComment] = useState('');

    return (
        <View style={globalStyling.commentOutputContainer}>
            <Text>
                Test comment text.
            </Text>
        </View>
    )
}

export default CommentOutputContainer;