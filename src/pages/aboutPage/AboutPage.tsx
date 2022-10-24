import React from "react";
import AliceKeyboard from "../../asset/svg/AliceKeyboard";
import CorneKeyboard from "../../asset/svg/CorneKeyboard";
import ErgoDoxKeyboard from "../../asset/svg/ErgoDoxKeyboard";
import OthoLinearKeyboard from "../../asset/svg/OthoLinearKeyboard";
import styled from "styled-components";

const AboutPage: React.FC = () => {
    return (
        <div>
            <Styled>
                <p>
                    Devtypes will help you optimize your keymaps.
                </p>
                <p>
                    No matter what layout your keyboard is
                </p>
                <CarouselContainer>
                    <CarouselItemContainer>
                        <CarouselContent>
                            <AliceKeyboard/>
                        </CarouselContent>
                        <CarouselTitle>
                            <p>Alice layout 1</p>
                        </CarouselTitle>
                    </CarouselItemContainer>
                    <CarouselItemContainer>
                        <CarouselContent>
                            <AliceKeyboard/>
                        </CarouselContent>
                        <CarouselTitle>
                            <p>Alice layout 2</p>
                        </CarouselTitle>
                    </CarouselItemContainer>
                </CarouselContainer>
                <AliceKeyboard/>
                <p>Alice layout</p>
                <CorneKeyboard/>
                <p>Corne layout</p>
                <OthoLinearKeyboard/>
                <p>OthoLinear</p>
                <ErgoDoxKeyboard/>
                <p>Corne layout</p>
                <p>
                    If you want additional features, feel free to contact me
                </p>
            </Styled>
            <h1>suggestions</h1>
            <p>
                send mail to me!
            </p>

        </div>
    )
}

const CarouselContainer = styled.div`
  width: 400px;
  height: 200px;
  background-color: red;
  overflow: hidden;
`

const CarouselItemContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`

const CarouselContent = styled.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  
  width: 70%;

  display: flex;
  justify-content: center;
  align-items: center;

`

const CarouselTitle = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 50%);
  
  font-size: 20px;
`

const Styled = styled.div`
  width: 100%;

`

export default AboutPage;
