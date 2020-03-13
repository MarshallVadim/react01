import React, {Component} from 'react';
import ContentHeader from "../Components/ContentHeader/ContentHeader";
import {Button, Card, CardDeck, Container} from "react-bootstrap";
import Statistics from "../Components/Statistics/Statistics";

class Home extends Component {
    render() {
        return (
            <>
                <ContentHeader/>
                <Statistics/>
            {/*    <Container>*/}
            {/*    <h2 className = {'text-center m-4'}>Out team</h2>*/}
            {/*    <CardDeck className = 'm-4'>*/}
            {/*        <Card bg={"light"}>*/}
            {/*            <Card.Img*/}
            {/*                variant = 'top'*/}
            {/*                src = 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'*/}
            {/*            />*/}
            {/*            <Card.Body>*/}
            {/*                <Card.Title>Developers</Card.Title>*/}
            {/*                <Card.Text>*/}
            {/*                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eaque, quod. Illo,*/}
            {/*                    mollitia provident rerum sapiente sint suscipit. Accusamus blanditiis facere laudantium*/}
            {/*                    maxime natus omnis quis temporibus ut, voluptate voluptatibus.*/}
            {/*                </Card.Text>*/}
            {/*                <Button variant = {'primary'}>AboutUs team</Button>*/}
            {/*            </Card.Body>*/}
            {/*        </Card>*/}
            {/*        <Card bg={"light"}>*/}
            {/*            <Card.Img*/}
            {/*                variant = 'top'*/}
            {/*                src = 'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'*/}
            {/*            />*/}
            {/*            <Card.Body>*/}
            {/*                <Card.Title>Developers</Card.Title>*/}
            {/*                <Card.Text>*/}
            {/*                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eaque, quod. Illo,*/}
            {/*                    mollitia provident rerum sapiente sint suscipit. Accusamus blanditiis facere laudantium*/}
            {/*                    maxime natus omnis quis temporibus ut, voluptate voluptatibus.*/}
            {/*                </Card.Text>*/}
            {/*                <Button variant = {'primary'}>AboutUs team</Button>*/}
            {/*            </Card.Body>*/}
            {/*        </Card>*/}
            {/*        <Card bg={"light"}>*/}
            {/*            <Card.Img*/}
            {/*                variant = 'top'*/}
            {/*                src = 'https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'*/}
            {/*            />*/}
            {/*            <Card.Body>*/}
            {/*                <Card.Title>Developers</Card.Title>*/}
            {/*                <Card.Text>*/}
            {/*                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eaque, quod. Illo,*/}
            {/*                    mollitia provident rerum sapiente sint suscipit. Accusamus blanditiis facere laudantium*/}
            {/*                    maxime natus omnis quis temporibus ut, voluptate voluptatibus.*/}
            {/*                </Card.Text>*/}
            {/*                <Button variant = {'primary'}>AboutUs team</Button>*/}
            {/*            </Card.Body>*/}
            {/*        </Card>*/}
            {/*    </CardDeck>*/}
            {/*</Container>*/}
            </>
        );
    }
}

export default Home;