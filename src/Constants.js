const Constants = {
	mainContent: {},
	sideNav: {
		styles: {
			width: "250px",
		},
		viewOrder:{
			section1: 1,
			section2: 2,
			section3: 3,
		},
		section1: {
			display: "Section 1",
			viewOrder:{
				link1: 1,
				link2: 2,
				link3: 3,
			},
			link1: {
				display: "Home",
				linkTo: "",
			},
			link2: {
				display: "Trending",
				linkTo: "",
			},
			link3: {
				display: "Subscriptions",
				linkTo: "",
			},
		},
		section2: {
			display: "Section 2",
			viewOrder:{
				link1: 1,
				link2: 2,
				link3: 3,
			},
			link1: {
				display: "Home",
				linkTo: "",
			},
			link2: {
				display: "Trending",
				linkTo: "",
			},
			link3: {
				display: "Subscriptions",
				linkTo: "",
			},
		},
		section3: {
			display: "Section 3",
			viewOrder:{
				link1: 1,
				link2: 2,
				link3: 3,
			},
			link1: {
				display: "Home",
				linkTo: "",
			},
			link2: {
				display: "Trending",
				linkTo: "",
			},
			link3: {
				display: "Subscriptions",
				linkTo: "",
			},
		},
	},
	ProductListing: [
		{
			title: "product1 title",
			price: "50",
			currency: "$",
			description: "product1 description here...",
			stock: 1
		},
		{
			title: "product2 title",
			price: "60",
			currency: "$",
			description: "product2 description here...",
			stock: 0
		}
	],
}

export default Constants;