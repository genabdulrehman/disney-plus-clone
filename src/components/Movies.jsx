import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Reccommended for you</h4>
        <Content>
            <Wrap>
                <img src="https://static.toiimg.com/photo/62756430.cms" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://fandomwire.com/wp-content/uploads/2021/03/10-Hollywood-Movies-That-Led-To-The-Cancellation-Of-Other-Movies.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://occ.a.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfsWb5mTNa7xaCijWuKRY8oTuQT_3gGKZKGT_DQaV8xZVma0suZA2c4WVCwM_JVFu5Rz0hsU9OJ4C5DOMGt6cmHDo-zVwMtA_vSM.jpg?r=855" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://i.ytimg.com/vi/HODvk9rJgWo/maxresdefault.jpg" alt="" />
            </Wrap>
           
            
        </Content>
        <h4>Most Watched</h4>
        <Content>
        <Wrap>
                <img src="https://kgsmovierants.files.wordpress.com/2015/09/quad-aw-in-imax-29434-everest-1.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2019/01/19/Photos/Processed/deadpool_2-k2GG--621x414@LiveMint.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://i.ytimg.com/vi/HODvk9rJgWo/maxresdefault.jpg" alt="" />
            </Wrap>
        </Content>
    </Container>
  )
}

export default Movies


const Container = styled.div``

const Content = styled.div`
display:grid;
grid-gap:20px;
grid-template-columns:repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`

border-radius:20px;
transition:all 250ms cubic-bezier(0.25, 0.46, 0.45,0.95) 0s;
cursor:pointer;

overflow:hidden;
border:3px solid rgba(249,249,249, 0.1);
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
img{
    object-fit:cover;
    width:100%;
    height:100%;
}
&:hover{
    transform:scale(1.05);
    border:3px solid white;
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
    rgb(0 0 0 / 73%) 0px 30px 22px -10px;
}

`