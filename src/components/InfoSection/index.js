import React from 'react';
import { Button } from '../ButtonElements';
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    TextWrapper, 
    Topline, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    Column2, 
    Img, 
    ImgWrap } from './InfoElements';

const InfoSection = ({
    goto,
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    darkText, 
    headLine, 
    description, 
    buttonLabel, 
    imgSource, 
    primary,
    dark,
    dark2,
    alt, }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart = {imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Topline>{topLine}</Topline>
                                <Heading lightText = {lightText}>{headLine}</Heading>
                                <Subtitle darkText = {darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button 
                                    to={goto} 
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={imgSource} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection





