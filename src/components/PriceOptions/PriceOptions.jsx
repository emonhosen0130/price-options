import PriceOption from "../PriceOption/Priceoption";

const PriceOptions = () => {
    [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$30/month",
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Locker room access"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": "$50/month",
          "features": [
            "Access to all equipment",
            "Group fitness classes included",
            "Personal training session once a month"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": "$80/month",
          "features": [
            "Access to all equipment",
            "Unlimited group fitness classes",
            "Two personal training sessions per month",
            "Sauna and spa access"
          ]
        }
      ];

    return (
        <div>
            <h2 className="text-4xl "></h2>
            {
               priceOptions.map(option => <PriceOption key={option.id} option ={option}></PriceOption>) 
            }
        </div>
    );
};

export default PriceOptions;