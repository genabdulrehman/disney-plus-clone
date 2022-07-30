import React from "react";
import styled from "styled-components";
function Details() {
	return (
		<Container>
			<Background>
				<img
					src="https://variety.com/wp-content/uploads/2022/02/TheAmazingMaurice_1_cUlysses-Films_Cantilever-Media-1.jpg?w=1000"
					alt="background image"
				/>
			</Background>
			<ImageTitle>
				<img src="images/viewers-pixar.png" />
		
			</ImageTitle>
			<Controls>
				<PlayButton>
					<img src="images/play-icon-black.png" />
					<span>Play</span>
				</PlayButton>
				<TrailerButton>
					<img src="images/play-icon-white.png" />
					<span>Trailer</span>
				</TrailerButton>
				<AddButton>
					<span>+</span>
				
				</AddButton>
				<GroupWatchButton> <img src="images/group-icon.png" alt="" /></GroupWatchButton>
			</Controls>

			<Subtitle>
				2009 ⚬ 7m ⚬ Fantasy, Drama, Animations
			</Subtitle>
			<Description>
			Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos.
			</Description>
		</Container>
	);
}

export default Details;
const Container = styled.div`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.4vw + 5px);
	position: relative;

`;

const Background = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	z-index: -1;
	opacity: 0.8;
	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
`;

const ImageTitle = styled.div`
	height: 30vh;
	width: 35vw;
	min-height: 170px;
	min-with: 200px;
	img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}
`;

const Controls = styled.div`
	display: flex;
	align-items:center;
	// margin: 0 20px;
`;
const PlayButton = styled.button`
	border-radius: 4px;
	font-size: 15px;
	padding: 0px 24px;
	margin-right: 20px;
	display: flex;
	align-items: center;
	justify-content:center;
	height: 56px;
	background: white;
	border: none;
	letter-spacing: 1.8px;
	cursor: pointer;
	&:hover {
		background: rgb(198, 198, 198);
	}
`;
const TrailerButton = styled(PlayButton)`
background:rgba(0,0,0,0.3);
border:1px solid rgb(249,249,249);
color:rgb(249,249, 249);
text-transform:uppercase;



`;

const AddButton = styled.button`
margin-right:16px;
border-radius:40x;

height:44px;
width:44px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;

background:rgba(0,0,0,0.6);
border: 2px solid white;
cursor:pointer;
span{
	font-size:30px;
	color:white;
}
&:hover {
	background: rgb(198, 198, 198);
}
`
const GroupWatchButton = styled(AddButton)``;


const Subtitle = styled.div`
color:rbg(249, 249, 249);
font-size:15px;
min-height:20px;
margin-top:26px;
`

const Description = styled.div`
color:rbg(249, 249, 249);
line-height:1.4;
font-size:20px;
min-height:20px;
margin-top:16px;
`