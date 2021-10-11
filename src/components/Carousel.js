// import React from "react";

// import Card from "../components/Card"

// // import matrix from "../assets/Images/matrix.jpg"
// // import Duck from "../assets/Images/Duck.jpg"
// // import fishbowl from "../assets/Images/fishbowl.jpg"
// import { Container, Row } from "react-bootstrap";

// class Carousel extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             items: [
//                 ...props.data
//                 // {
//                 //     id: 0,
//                 //     title: "matrix",
//                 //     subTitle: "I'm in",
//                 //     imgSrc: matrix,
//                 //     link: "https://4.bp.blogspot.com/-q8pWnwdx8PQ/XEWVajCiZHI/AAAAAAABewo/FBHUGUNMc5Qn-PN260bGf85dylPITsw9wCK4BGAYYCw/s1600/matrix.jpg",
//                 //     selected: false
//                 // },
//                 // {
//                 //     id: 1,
//                 //     title: "Duck",
//                 //     subTitle: "Rubber Ducky",
//                 //     imgSrc: Duck,
//                 //     link: "https://live.staticflickr.com/7024/6634747879_6302602c2a_b.jpg",
//                 //     selected: false
//                 // },
//                 // {
//                 //     id: 2,
//                 //     title: "fishbowl",
//                 //     subTitle: "Two lost souls swimming in a fish bowl",
//                 //     imgSrc: fishbowl,
//                 //     link: "https://static.freemake.com/blog/wp-content/uploads/2014/09/best-pc-screensavers.jpg",
//                 //     selected: false
//                 // },
//             ]
//         }
//     }

//     handleCardClick = (id, card) => {
//         let items = [...this.state.items]
//         // console.log(items.id)
//         items[id].selected = items[id].selected ? false : true

//         // items.forEach((item, index) => {
//         //     if(item.id !== id) {
//         //         item.selected = false
//         //     }
//         // })

//         this.setState({
//             items
//         })
//     }

//     makeItems = (items) => {
//         return items.map((item, index) => {
//             return <Card item={item} click={(e => this.handleCardClick(index, e))} key={item.id} />
//         })
//     }

//     render() {
//         return(
//             <Container fluid={true}>
//                 <Row className="justify-content-around">
//                     {this.makeItems(this.state.items)}
//                 </Row>
//             </Container>
//         )
//     }
// }

// export default Carousel
