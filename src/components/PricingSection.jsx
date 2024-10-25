
import {
  Typography,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
// import { CheckCircleIcon } from "@heroicons/react/24/solid";
// import { MinusCircleIcon } from "@heroicons/react/24/outline";

function PricingCard({ title, desc, price, options }) {
  return (
    <Card variant="gradient" color="white">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="!m-0 p-6"
      >
        <Typography
          variant="h6"
          color="blue-gray"
          className="capitalize font-bold mb-1"
        >
          {title}
        </Typography>
        <Typography
          variant="small"
          className="font-normal !text-gray-500"
        >
          {desc}
        </Typography>
        <Typography
          variant="h3"
          color="blue-gray"
          className="!mt-4 flex gap-1 !text-4xl"
        >
          {price[0]}
          {price[1]}
          <Typography
            as="span"
            color="blue-gray"
            className="-translate-y-0.5 self-end opacity-70 text-lg font-bold"
          >
            /{price[2]}
          </Typography>
        </Typography>
      </CardHeader>
      <CardBody className="pt-0">
        <ul className="flex flex-col gap-3 mb-6 h-[100px]">
          {options.map((option, key) => (
            <li
              key={key}
              className="flex items-center gap-3 text-gray-700"
            >
              {option.icon}
              <Typography
                variant="small"
                className="font-normal text-inherit"
              >
                {option.info}
              </Typography>
            </li>
          ))}
        </ul>
        <div className="flex items-end">
        <Button fullWidth variant="gradient" color="gray">
          Get Started
        </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export function PartnershipPricing() {
  const cards = [
    {
      title: "Free",
      desc: "Basic listing on DEW website and app",
      price: ["$", "0", "month"],
      options: [
        {
          // icon: (
          //   <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />
          // ),
          info: "Basic listing with business name and contact details",
        },
      ],
    },
    {
      title: "Silver",
      desc: "Enhanced listing for increased visibility",
      price: ["$", "50", "month"],
      options: [
        {
          // icon: (
          //   <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />
          // ),
          info: "Enhanced listing with photos and special offers",
        },
        {
          // icon: (
          //   <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />
          // ),
          info: "Direct links to reservations or online booking systems",
        },
      ],
    },
    {
      title: "Gold",
      desc: "Prime exposure on DEW itineraries",
      price: ["$", "100", "month"],
      options: [
        {
          // icon: (
          //   <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />
          // ),
          info: "Featured placement on DEW’s itineraries",
        },
        {
          // icon: (
          //   <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />
          // ),
          info: "Highlighted placement in search results",
        },
      ],
    },
    {
      title: "Platinum",
      desc: "Full integration with premium features",
      price: ["$", "200", "month"],
      options: [
        {
          // icon: (
          //   <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />
          // ),
          info: "Full integration with AI-powered recommendations",
        },
        {
          // icon: (
          //   <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />
          // ),
          info: "Premium advertising spots on DEW’s homepage",
        },
        {
          // icon: (
          //   <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />
          // ),
          info: "Maximized visibility across the platform",
        },
      ],
    },
  ];

  return (
    <section className="py-24 px-8 lg:mx-20">
      <div className="w-full mx-auto ">
        <Typography color="blue-gray" className="mb-4 font-bold text-lg text-center">
          Partner With DEW to Showcase Your Business
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !leading-snug lg:!text-4xl !text-2xl text-center"
        >
          Choose the right plan for you
        </Typography>
        <Typography
          variant="lead"
          className="mb-10 font-normal !text-gray-500 text-center lg:mx-40 my-20"
        >
          Become a part of Detroit’s most exciting weekend planning platform by showcasing your restaurant, entertainment venue, or hotel. Choose the package that suits your business needs and watch your customer base grow with our tailored recommendations and premium exposure opportunities.
        </Typography>
        <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 max-w-full">
          {cards.map(({ title, desc, options, price }, key) => (
            <PricingCard
              key={key}
              title={title}
              desc={desc}
              price={price}
              options={options}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Typography variant="small" className="text-5xl font-bold">
            Why Partner with DEW?
          </Typography>
          <ul className="mt-16 flex flex-col items-start lg:mx-96 list-disc list-inside text-lg text-gray-600">
            <li className="text-start"><strong>Boost Your Visibility:</strong> <br/> Gain exposure to tourists and locals looking for tailored weekend plans.</li>
            <li className="text-start"><strong>Drive More Bookings:</strong> <br/> Direct links to your reservations or offers make it easier for customers to choose you.</li>
            <li className="text-start"><strong>Tailored Advertising:</strong> <br/> DEW's AI ensures your business is recommended to users most likely to visit, maximizing your marketing spend.</li>
          </ul>
        </div>
        <div className="mt-10 text-center">
          <Typography variant="small" className="text-[18px] font-normal !text-gray-500">
            Special Offer: Sign up for Silver, Gold, or Platinum now and get 50% off your first month! Don’t miss this chance to reach new customers.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default PartnershipPricing;
