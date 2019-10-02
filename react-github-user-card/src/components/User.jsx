import React from 'react';
import axios from 'axios';
import styled from 'styled-components'


const ParentDiv = styled.div `
display:flex;
margin:5%;
height:20%;
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
class User extends React.Component {
    state = {
        me: []
    }
    componentDidMount = () => {
        axios
        .get('https://api.github.com/users/crsullivan')
        .then(data => {
            this.setState({
                me: data.data
            })
        })
        .catch(err => {
            console.log(err, 'Error')
        })
    }
    render() {
        return (
            <>
                <ParentDiv key={this.state.me.id}>
                    <ImgDiv>
                        <Img src={this.state.me.avatar_url}></Img>
                    </ImgDiv>
                    <Div>   
                        <P>{this.state.me.login}</P>
                        <A href={`https://github.com/${this.state.me.login}`}>Github</A><br></br>
                        <A href={`https://github.com/${this.state.me.login}?tab=repositories`}>Repositories</A><br></br>
                        <Cal src={`http://ghchart.rshah.org/${this.state.me.login}`}></Cal>
                    </Div>
                </ParentDiv>
            </>
        )
    }
}export default User;