import React from "react"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Timeline() {
    return (
        <div className="bg-amethyst bg-gradient-to-r from-amethyst to-lavender">
            <VerticalTimeline lineColor='#5f689f'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#f5f0ea', color: '#5f689f' }}
                    contentArrowStyle={{ borderRight: '7px solid  #f5f0ea' }}
                    date="Feb 2022 - Dec 2023"
                    dateClassName={'text-cotton'}
                    iconStyle={{ background: '#b5b7d3', color: '#5f689f' }}
                    icon={<i class="fa-solid fa-briefcase" style={{ marginTop: '35%', marginLeft: '35%' }}></i>}
                >
                    <h3 className="vertical-timeline-element-title font-bold">Technical Screener | Frontend Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle text-sm">Toptal</h4>
                    <p className="text-sm">
                        I conducted 400+ interviews, provided detailed feedback,
                        and improved selection processes.
                        Also, I developed React applications,
                        emphasizing efficiency and technology utilization for success.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#f5f0ea', color: '#5f689f' }}
                    contentArrowStyle={{ borderRight: '7px solid  #f5f0ea' }}
                    date="Oct 2019 - Feb 2022"
                    dateClassName={'text-cotton'}
                    iconStyle={{ background: '#b5b7d3', color: '#5f689f' }}
                    icon={<i class="fa-solid fa-briefcase" style={{ marginTop: '35%', marginLeft: '35%' }}></i>}
                >
                    <h3 className="vertical-timeline-element-title font-bold">Code Reviewer</h3>
                    <h4 className="vertical-timeline-element-subtitle text-sm">Envato</h4>
                    <p className="text-sm">
                        As a Code Reviewer, I ensured CodeCanyon projects met Envato's standards,
                        maintaining quality for Envato Marketplaces. Reviewed JavaScript, PHP,
                        React, and WordPress projects, enhancing platform excellence.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#f5f0ea', color: '#5f689f' }}
                    contentArrowStyle={{ borderRight: '7px solid  #f5f0ea' }}
                    date="Jun 2018 - Oct 2019"
                    dateClassName={'text-cotton'}
                    iconStyle={{ background: '#b5b7d3', color: '#5f689f' }}
                    icon={<i class="fa-solid fa-briefcase" style={{ marginTop: '35%', marginLeft: '35%' }}></i>}
                >
                    <h3 className="vertical-timeline-element-title font-bold">Team Leader | Frontend Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle text-sm">Top Marketing Strategies</h4>
                    <p className="text-sm">
                        As Team Leader, I managed a cross-functional team in México,
                        overseeing international communication, coordination,
                        and project development. At Top Marketing Strategies,
                        I developed websites for various U.S. clients.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#f5f0ea', color: '#5f689f' }}
                    contentArrowStyle={{ borderRight: '7px solid  #f5f0ea' }}
                    date="Jun 2017 - Jun 2018"
                    dateClassName={'text-cotton'}
                    iconStyle={{ background: '#b5b7d3', color: '#5f689f' }}
                    icon={<i class="fa-solid fa-briefcase" style={{ marginTop: '35%', marginLeft: '35%' }}></i>}
                >
                    <h3 className="vertical-timeline-element-title font-bold">Full Stack Android Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle text-sm">Tesselar</h4>
                    <p className="text-sm">
                        As a full-stack Android developer, I was responsible for designing, building,
                        and maintaining Android applications, as well as their integration with Salesforce CRM.
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    )
}