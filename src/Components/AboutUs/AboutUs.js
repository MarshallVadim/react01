import React, {Component} from 'react';
import './AboutUs.scss'
import '../../Animation.css'

class AboutUs extends Component {
    render() {
        return (
            <main className="about-page">
                <div className="container-about">
                    <section className="grid info">
                        <div className="column-xs-12 column-md-1">
                            <div className="aboutUs">
                                <h1 className="section-heading">About Me</h1>
                            </div>
                        </div>
                        <div className="column-xs-12 column-md-4">
                            <img className={'img-about animated pulse'} src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"/>
                        </div>
                        <div className="column-xs-12 column-md-7">
                            <div className="intro">
                                <h2>Jared Leto is an award-winning author and lifestyle blogger.</h2>
                                <p>Crud indignant permissively through burped nodded timorous onto the as wore less ouch
                                    far rewound considering so broken dachshund jeepers sanely confident. Contemplated
                                    growled apart enthusiastically punitively much much darn onto deep dear returned
                                    some cockatoo hungrily fortuitously enchantingly ouch sanely on unceremonious
                                    especially much yikes darn.</p>
                                <p>Gecko far one before ouch far indistinctly ouch much doubtfully the alas some
                                    classically far insincerely much honey close savage ground according enthusiastic
                                    and that then about realistic however more forlornly dear demonstrably a this.</p>
                                <p>Less urgently ape one some hamster much well that dolphin strode hey underneath so
                                    eagle ouch a hey turtle notwithstanding truly censoriously congratulated dear one
                                    mandrill weak much then disconsolately wholesome.</p>
                            </div>
                        </div>
                        <div className="column-xs-12 column-md-7">
                            <blockquote>
                                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa provident voluptatem
                                    consectetur illum, natus placeat incidunt tempora architecto aliquid recusandae
                                    eligendi repudiandae ex laborum neque quod cum id facere nulla.</h3>
                            </blockquote>
                        </div>
                        <div className="column-xs-12 column-md-5">
                            <img className={'img-about animated pulse'} src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"/>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}

export default AboutUs;