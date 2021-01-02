import React from 'react';
import styled from 'styled-components';
import { StyledDiv, StyledLine } from '../styles';
import { Link } from 'react-router-dom';

import SkillTag from './SkillTag';

import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";

import me from '../img/me.jpg';

import {motion} from 'framer-motion';
import { fade, lineAnimation, photoAnimation } from '../animation';


const About = () => {
    const skills = ['flutter', 'dart', 'html', 'css / sass', 'javascript', 'bootstrap', 'react . js', 'c / c++', 'figma'];
    return(
        <StyledAboutSection>
            <StyledImgContainer>
                <motion.img variants={photoAnimation} src={me} alt="about me" width="80%" />
            </StyledImgContainer>
            <StyledLine variants={lineAnimation} className="divider"/>
            <StyledAboutme>
                <motion.h3 variants={fade}>About me</motion.h3>
                <motion.p variants={fade}>Hi I'm Prathmesh, a Frontend Web Developer & Computer Science Engineer who loves building webpages and Software products. I’d love to combine my passion for learning and developing with my software development skills to continue building personalized products for people.</motion.p>
                <motion.p variants={fade}>My short term goal is I want a such a platform where I can grow my career along with the organization's growth and My Long term goal is I want to be one of the reason for the success of the organization and I want to see my organization as a bench mark to other organizations.</motion.p>
                <StyledLine variants={lineAnimation}/>
                <StyledSkillsSection variants={fade}>
                    {skills.map((skill)=><SkillTag skill={skill}/>)}
                </StyledSkillsSection>
                <motion.div variants={fade}>
                <motion.button variants={fade}><Link to='/projects'>
                        <AiOutlineArrowRight size="20px" className="btn-icon"/>
                    </Link></motion.button>
                    <motion.button variants={fade}> <Link to='/contact'>
                    <AiOutlineMail size="20px" className="btn-icon"/>
                    </Link></motion.button>
                </motion.div>
            </StyledAboutme>
        </StyledAboutSection>
    );
}

const StyledAboutSection = styled(StyledDiv)`
        padding-top: 10vh ;


    .divider{
        display:none;
    }
    @media (max-width: 1200px){
margin-top: 1.5rem;

        display: block;
    padding: 2rem 2.5rem;
        width: 100%;
        text-align: center;
        .divider{
        display: block;
    }

    }
`;

const StyledImgContainer = styled.div`
    flex: 1;
    img{
        width: 90%;
    }
    @media (max-width: 1200px){
        img{
            margin-top: 10rem;
        }

    }
`;
const StyledAboutme = styled.div`
    flex: 1.25;
    button{
        margin: 1.5rem;
    }    
`;
const StyledSkillsSection = styled(motion.div)`
    margin: 20px 0;
    width: 80%;
    display:flex;
    flex-wrap: wrap;
    @media (max-width: 1200px){
        justify-content:center;
        width: 100%;
    }
`;

export default About;