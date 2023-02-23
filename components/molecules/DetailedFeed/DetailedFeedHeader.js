import { DetailedFeedLogo } from "../../atoms";

const DetailedFeedHeader = { 
    headerTitle: (props) => <DetailedFeedLogo {...props} />,
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
}

export default DetailedFeedHeader;