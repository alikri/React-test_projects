import "./travel.main.styles.scss";
import TravelHeader from "./travel-header/travel-header.component";
import TravelCard from "./travel-card.component.jsx/travel-card.component";
import JapanImg from "./travel-assets/77.png";
import SydnayImg from "./travel-assets/78.png";
import NorwayImg from "./travel-assets/84.png";

const TravelMain = () => {

	const travelContent = [
		{
			id: 1,
			title: "Mount Fuji",
			location: "Japan",
			googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
			startDate: "12 Jan, 2021",
			endDate: "24 Jan, 2021",
			description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
			imageUrl: `${JapanImg}`
		},
		{	id: 2,
			title: "Sydney Opera House",
			location: "AUSTRALIA",
			googleMapsUrl: "https://goo.gl/maps/SbjzjYUA3kFyfWTR8",
			startDate: "27 May, 2021",
			endDate: "8 Jun, 2021",
			description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
			imageUrl: `${SydnayImg}`
		},
		{
			id: 3,
			title: "Geirangerfjord",
			location: "NORWAY",
			googleMapsUrl: "https://goo.gl/maps/4ghTytd9LtiGWfTW6",
			startDate: "01 Oct, 2021",
			endDate: "18 Nov, 2021",
			description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
			imageUrl: `${NorwayImg}`
		}
	]

	const travelCards = travelContent.map((card) => <TravelCard
		key={card.id}
		{...card}
	/>)

	return (
		<div>
			<TravelHeader />
			{travelCards}
			</div>
	)
}

export default TravelMain;