import DetailsCard from './DetailsCard';
import { List } from 'antd';

const getDateTimeDifference = (timeStamp) => {
    var convertedDateTime = new Date(timeStamp);
    var currentDateTime = new Date();
    var diff = (currentDateTime - convertedDateTime)/1000;
    var result = 0;
    var unit;
    var suffix = " ago";

    if(diff < 60){
        unit = " second";
        result = diff;
    }
    else if(diff < 60*60){
        unit = " minute";
        result =  parseInt(diff/60);
    }
    else if(diff < 60*60*24){
        unit = " hour";
        result =  parseInt(diff/(60*60));
    }
    else {
        unit = " day";
        result = parseInt(diff/(60*60*24));
    }
    if(result == 1){
        return result + unit + suffix;
    }
    else{
        return result + unit + "s" + suffix;
    }
}

const HelpCards = ({ list, category }) => {
    return (
        <List
            grid={{gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 6}}
            dataSource={Object.entries(list)}
            renderItem={item => (
                <List.Item key={item[0]}>
                    <DetailsCard
                        key={item[0].trim()} 
                        name={item[1].name}
                        isOrganisation={true}
                        category={category}
                        location={item[1].area?item[1].area:"Uknown"} 
                        phoneNumbers={[item[0]]}
                        emailAddresses={null}
                        verifiedAt={item[1].verified && getDateTimeDifference(item[1].verified)} 
                        verifiedCount={null}
                        contactLink={`https://api.whatsapp.com/send?phone=${
                            item[0].trim().match(/^\d{10}$/)?'91'+item[0].trim().match(/\d{10}/):""
                        }`}
                        details={item[1].desc}
                    />
                </List.Item>
            )}
        />
    )
}

export default HelpCards