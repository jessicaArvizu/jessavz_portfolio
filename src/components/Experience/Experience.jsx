import React from 'react';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
    return (
        <section id='experience' className='mt-24'>
            <ExperienceCard
                url='https://www.toptal.com/'
                date='Feb 2022 - Dec 2023'
                title='Technical Screener | Frontend Developer'
                subTitle='Toptal'
                description='I conducted 400+ interviews, provided detailed feedback,
                and improved selection processes. Also, I developed React applications,
                emphasizing efficiency and technology utilization for success.'
                skills={['JavaScript', 'Material UI', 'React', 'HTML & CSS/SCSS', 'Node', 'Time management',
                    'Soft skills', 'SCRUM', 'Agile Methodologies']}
            />
            <ExperienceCard
                url='https://www.envato.com/'
                date='Oct 2019 - Feb 2022'
                title='Code Reviewer'
                subTitle='Envato México'
                description=' As a Code Reviewer, I ensured CodeCanyon projects met Envato&apos;s 
                standards, maintaining quality for Envato Marketplaces. Reviewed JavaScript, PHP,
                React, and WordPress projects, enhancing platform excellence.'
                skills={['React', 'JavaScript', 'PHP', 'WordPress', 'Node', 'HTML & CSS/SCSS']}
            />
            <ExperienceCard
                url='https://www.linkedin.com/company/top-marketing-strategies/'
                date='Jun 2018 - Oct 2019'
                title='Team Leader | Frontend Developer'
                subTitle='Top Marketing Strategies'
                description='As Team Leader, I managed a cross-functional team in México,
                overseeing international communication, coordination,
                and project development. At Top Marketing Strategies,
                I developed websites for various U.S. clients.'
                skills={['jQuery', 'JavaScript', 'PHP', 'WordPress', 'HTML & CSS/SCSS', 'Node']}
            />
            <ExperienceCard
                url='https://www.tesselar.mx/'
                date='Jun 2017 - Jun 2018'
                title='Full Stack Android Developer'
                subTitle='Tesselar'
                description='As a full-stack Android developer, I was responsible for designing, building,
                and maintaining Android applications, as well as their integration with Salesforce CRM.'
                skills={['Android', 'Salesforce', 'Mockito', 'Kotlin']}
            />
        </section>
    );
}