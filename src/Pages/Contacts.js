import React, {Component} from 'react';
import {Button, Col, Container, Form, Media, Row} from "react-bootstrap";

class Contacts extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={5}>
                        <h1 className={'text-center m-3'}> Contact us </h1>
                        <Form>
                            <Form.Group controleId='formBasicEmail'>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type='email' placeholder='Enter email'/>
                                <Form.Text>
                                    We'll never share your email with anyone else
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controleId='formBasicPassword'>
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as='textarea' rows='3'/>
                            </Form.Group>
                            <Form.Group controleId='formBasicCheckbox'>
                                <Form.Check type='checkbox' label='Check me out'/>
                            </Form.Group>
                            <Button variant={'primary'} type={'submit'}>Submit</Button>
                        </Form>
                    </Col>
                    <Col md={7}>
                        <Media className='m-3'>
                            <Media.Body>
                                <p><img
                                    align="left"
                                    width={235}
                                    height={350}
                                    className={'mr-3'}
                                    src={'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
                                />
                                    <h5>Олександр Романюк / Ріелтор</h5>
                                    Я виріс у селі Терешівці, що в Хмельницькому районі.
                                    Почав займатися ріелторською діяльністю в 2010 році, навчаючись на 5-му курсі Хмельницького національного університету (факультет менеджменту).
                                    Паралельно писав кандидатську дисертацію на тему: «Управління кадровим потенціалом підприємства в процесі реалізації стратегії».
                                    Після двох років досить успішної ріелторської діяльності я вирішив кардинально змінити своє життя – виграв конкурс на участь у Програмі стажування у Верховній Раді України і переїхав в Київ. До речі, поруч зі мною стажування проходили двоє діючих народних депутатів і багато інших успішних прогресивних людей.
                                    Після стажування я ще 3 роки працював помічником у відомих політиків та підприємців спочатку в Києві, а потім у Хмельницькому. Займався переважно маркетингом.
                                    На початку 2016 р знову повернувся до ріелторської діяльності.
                                    Чому я кажу про «ріелторську діяльність»? Бо для мене це не робота, а стиль життя.
                                    Тут я можу максимально використати свої навички в сфері комунікацій, маркетингу, переговорів тощо. Я вважаю себе професіоналом, який здатний в інтересах клієнта максимально вигідно, швидко, зручно та безпечно вирішити його задачу щодо купівлі, продажу чи оренди нерухомості.<br/>
                                    Моя ціль: мати багато задоволених клієнтів, а не вичавлювати з людей максимальну комісію.<br/>
                                    Мої захоплення: література, футбол, маркетинг, настільний теніс, історія, покер, «мафія», більярд, біатлон, шахи.<br/>
                                    Улюблена книга: «Фінансист. Титан. Стоік» Т. Драйзер<br/>
                                    Улюблений фільм: «Градіатор»<br/>
                                    Улюблений серіал: «Гра пристолів»<br/>
                                    Готовий до взаємовигідної співпраці. <b>Дзвоніть: 096-73-23-267, 063-17-80-007</b>, або пишіть у приватні повідомлення. Консультація безкоштовна.<br/>
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contacts;