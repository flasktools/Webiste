import styled from 'styled-components';
import { useState, useEffect } from 'react';

const TEXT = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
auctor metus nulla, quis egestas nibh bibendum eget. Proin suscipit
consequat tortor mollis bibendum. Curabitur condimentum tortor eget
tempor condimentum. Sed tincidunt aliquam quam, in tempor nisl molestie
quis. Class aptent taciti sociosqu ad litora torquent per conubia
nostra, per inceptos himenaeos. Morbi fringilla augue lorem, quis
pretium sapien efficitur sit amet. Vestibulum in tellus quis ligula
molestie feugiat. Ut quis diam eget dui tristique iaculis. Aenean tempus
arcu lacus, ac tincidunt libero facilisis eu.
`;

export default function Book() {
	const [page, setPage] = useState(0);

	useEffect(() => {
		console.log(page);
	}, [page]);

	return (
		<Box>
			<BookWarp>
				<LeftSide onClick={() => setPage(page + 1)}>
					<BookCoverLeft />
					<BookCoverRight />
					<Layer translate={{ x: -10, y: 10, z: 2 }} flipped={page > 0} rotation={160}>
						<PageFront translate={{ y: 11 }}>{TEXT}</PageFront>
						<PageLeft>{TEXT}</PageLeft>
					</Layer>
					<Layer translate={{ x: -12, y: 10, z: 2 }} flipped={page > 1} rotation={160}>
						<PageLeft> {TEXT}</PageLeft>
					</Layer>
				</LeftSide>
				<RightSide onClick={() => setPage(page - 1)} />
			</BookWarp>
		</Box>
	);
}

const Box = styled.div`
	display: flex;
	width: 100%;
	max-width: 1000px;
	height: 100vh;

	margin: auto;
	justify-content: center;
	align-items: stretch;
	perspective: 4000px;
	perspective-origin: 50% 0%;
`;

const BookWarp = styled.div`
	position: relative;
	display: flex;
	width: 80vw;
	margin-top: 6vh;
	margin-bottom: 6vh;
	padding-right: 1%;
	padding-left: 1%;
	justify-content: center;
	perspective: 4000px;
	perspective-origin: 50% 50%;
	transform: translate3d(0px, 5%, -264px) rotateX(27deg) rotateY(0deg) rotateZ(-10deg);
	transform-style: preserve-3d;
`;

/* 
    LEFT 
*/
const LeftSide = styled.div`
	position: relative;
	display: flex;
	width: 49%;
	backface-visibility: hidden;
	perspective: 4000px;
	perspective-origin: 0% 50%;
	transform: rotateX(0deg) rotateY(20deg) rotateZ(0deg);
	transform-origin: 100% 50%;
	transform-style: preserve-3d;
`;

const BookCoverLeft = styled.div`
	flex: 1;
	height: 105%;
	border-top-left-radius: 4%;
	border-bottom-left-radius: 4%;
	background-color: #2e1800;
	box-shadow: inset 4px -4px 4px 1px #42382d, inset 7px -7px 4px 0 #251100;
	perspective: 4000px;
	transform: translate3d(-15px, -20px, 4px) scaleX(1.05);
	transform-style: preserve-3d;
`;

const PageLeft = styled.div`
	flex: 1;
	border-top-left-radius: 1%;
	border-bottom-left-radius: 1%;
	background-color: #fff;
	box-shadow: inset 0 0 26px 2px #d8cccc, -1px 1px 13px 0 rgb(34 27 20 / 81%);
	padding: 20px;

	display: block;
	background: rgb(255, 225, 156);

	pointer-events: none;
`;

const PageFront = styled.div`
	flex: 1;
	border-top-left-radius: 1%;
	border-bottom-left-radius: 1%;
	background-color: #fff;
	box-shadow: inset 0 0 26px 2px #d8cccc, -1px 1px 13px 0 rgb(34 27 20 / 81%);
	padding: 20px;

	display: block;
	background: rgb(255, 225, 156);

	pointer-events: none;
	transform: rotateY(180deg);
`;
/* 
    RIGHT
*/

const RightSide = styled.div`
	position: relative;
	display: flex;
	width: 49%;
	height: 105%;
	perspective: 4000px;
	perspective-origin: 0% 50%;
	transform: rotateX(0deg) rotateY(-1deg) rotateZ(0deg);
	transform-style: preserve-3d;
`;

const BookCoverRight = styled.div`
	position: fixed;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
	display: flex;
	justify-content: flex-start;
	transform-style: preserve-3d;
	transform-origin: right center;
	height: 105%;
	border-top-left-radius: 4%;
	border-bottom-left-radius: 4%;
	background-color: #2e1800;
	box-shadow: inset 4px -4px 4px 1px #42382d, inset 7px -7px 4px 0 #251100;
	perspective: 4000px;
	transform: translate3d(-5px, -20px, 4px) scaleX(1.07) RotateY(160deg);
	transform-style: preserve-3d;
`;

// transform-origin: left center;
// rotateY(360deg);

const BaseLayer = styled.div`
	position: fixed;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
	display: flex;
	justify-content: flex-start;
	transform-style: preserve-3d;
	transform-origin: right center;
	transition: transform 1.5s ease-in-out;
`;

const Layer = styled(BaseLayer)`
	${({ translate, flipped }) => `
    transform: translate3d(${translate.x}px, ${translate.y}px, ${translate.z * 5}px) rotateY(${
		flipped ? 160 : 2
	}deg);
    margin-bottom: ${translate.z + 5}px;
  `}

	pointer-events: none;
`;
