import React from 'react';
import styled from 'styled-components'



const ParentDiv = styled.div `
display:flex;
margin:5%;
min-height:20%;
width:90%;
border-radius:5px;
background:grey;
`


const Div = styled.div `
font-size:1.5em;
margin-left:1%;

`

const ImgDiv = styled.div `

`
const P = styled.p `
font-size:2em;
margin-bottom:2%;
`

const Img = styled.img `
margin:10%;
border-radius:5px;
object-fit: cover;
width:80%
`

const A = styled.a `
margin-bottom:25;
text-decoration:none;
color:lightgreen
    :hover {
        color:green
    }
`
const Cal = styled.img `
width:150%;
margin-top:3%;
`

class UserCard extends React.Component {
    state = {
        login: []
    }
    render() {
        return (
            <>
                {this.props.following.map(users => {
                    return (
                        <ParentDiv key={users.id}>
                            <ImgDiv>
                                <Img src={users.avatar_url} alt={users.login}></Img>
                            </ImgDiv>
                            <Div>
                                <P>{users.login}</P>
                                <A href={`https://github.com/${users.login}`}>Github</A><br></br>
                                <A href={`https://github.com/${users.login}?tab=repositories`}>Repositories</A><br></br>
                                <Cal src={`http://ghchart.rshah.org/${users.login}`}></Cal>
                            </Div>
                        </ParentDiv>)
                })}
            </>
        )
    }
}export default UserCard
