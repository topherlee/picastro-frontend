import { PicastroLogo } from "../../atoms";

const DetailedFeedHeader = { 
    headerTitle: (props) => <PicastroLogo {...props} />,
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
}

export default DetailedFeedHeader;