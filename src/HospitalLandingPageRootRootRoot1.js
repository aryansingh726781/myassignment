import React from "react";
import styled from "styled-components";
import axios from 'axios';
import { Reviews } from "./Reviews";



import { useEffect, useState } from 'react'
export const HospitalLandingPageRootRoot1 = ({}) => {

  const [fake, setFake] = useState([]);
  console.log(fake);

  useEffect = (() => {
    fakestore();
  }, [])


  const fakestore = async () => {
    const myData = await axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1')
    // console.log(response)
    // const myData =  await response.json();
    console.log(myData.data.data)
    setFake(myData.data.data);

  }
  fakestore();

  return (
    <HospitalLandingPageRootRoot>
      <OvalOvalCopyMask>
        <Group2>
          <MediCare3>
            Medi<MediCare2>Care+</MediCare2>
          </MediCare3>
          <Text5>Home</Text5>
          <Text4>About</Text4>
          <Text3>Services</Text3>
          <Text2>News</Text2>
          <NavyBlueRectangle2>
            <Text6>Contact</Text6>
          </NavyBlueRectangle2>
        </Group2>
        <Group3>
          <Group4>
            <WelcomeToMediCare>Welcome to MediCare+ Clinic</WelcomeToMediCare>
            <Text9>Best Specialists</Text9>
            <WeAreOnTheLeadin>
              We are on the leading edge of cancer care. Providing the full
              continuum of cancer treatments and supportive care services in a
              single convenient location.
            </WeAreOnTheLeadin>
            <Group5>
              <NavyBlueRectangle3>
                <Text7>Make an Appointment</Text7>
              </NavyBlueRectangle3>
              <WhiteRectangle1>
                <Text8>Departments</Text8>
              </WhiteRectangle1>
            </Group5>
          </Group4>
          <WhiteRectangle2 />
        </Group3>
      </OvalOvalCopyMask>
      <Text33>Our Services</Text33>
      <WeProvideTheMost>
        We provide the most full medical services, so every person could heave
        the oppurtunity to receive qualitative medical help.
      </WeProvideTheMost>
      <Group>
        <WhiteRectangle16>
          <Shape>
            <Path8 src={`https://file.rendit.io/n/K0qsgHu3E37hSRRhhcyT.svg`} />
            <NavyBlueSquare />
          </Shape>
          <Text32>Dental Care</Text32>
        </WhiteRectangle16>
        <NavyBlueRectangle5>
          <Shape5>
            <Path18 src={`https://file.rendit.io/n/wb2umtAUIzuwrSg1VeI3.svg`} />
          </Shape5>
          <Text31>Pulmonary</Text31>
          <Group6>
            <Text30>LEARN MORE</Text30>
            <PathCopy
              src={`https://file.rendit.io/n/8j0T8FTWTen72DzJiFwY.svg`}
            />
          </Group6>
        </NavyBlueRectangle5>
        <WhiteRectangle15>
          <Group7>
            <Path9 src={`https://file.rendit.io/n/gH7253TgZRBfnxzYUZvl.svg`} />
            <Path10 src={`https://file.rendit.io/n/LQ9qoBDqvCqk8GaovFrR.svg`} />
            <Path11 src={`https://file.rendit.io/n/2Qroj51OQ5WawLiCq54k.svg`} />
            <Path12 src={`https://file.rendit.io/n/ox9yEIDxKhUQcYwZPjbJ.svg`} />
            <Path13 src={`https://file.rendit.io/n/DWOV4AV4s1RfIC4Evnec.svg`} />
            <Shape1>
              <Path14
                src={`https://file.rendit.io/n/JF8wIKsUM8l2AORxn6yV.svg`}
              />
              <Shape2
                src={`https://file.rendit.io/n/lGTPFjvRFJpCP7px3Gx4.svg`}
              />
            </Shape1>
          </Group7>
          <Text29>Neurological</Text29>
        </WhiteRectangle15>
        <WhiteRectangle14>
          <Shape3>
            <Group8>
              <Shape4
                src={`https://file.rendit.io/n/aCl00GXEFQDEVVe3sqNl.svg`}
              />
              <Path15
                src={`https://file.rendit.io/n/Gr9O0vp48Vcy1jbKCw0a.svg`}
              />
            </Group8>
            <Path16 src={`https://file.rendit.io/n/6Ex0M2jMt80mJgoZoWyW.svg`} />
            <Path17 src={`https://file.rendit.io/n/6Ex0M2jMt80mJgoZoWyW.svg`} />
          </Shape3>
          <Text28>Prediatrics</Text28>
        </WhiteRectangle14>
      </Group>
      <Oval3>
        <Group9>
          <ClinicWithInnovati>Clinic With Innovative</ClinicWithInnovati>
          <WeProvideTheMost1>
            We provide the most full medical services, so every person could
            heave the oppurtunity to receive qualitative medical help.
          </WeProvideTheMost1>
          <NavyBlueRectangle4>
            <Text24>Learn More</Text24>
          </NavyBlueRectangle4>
        </Group9>
        <Group10>
          <Group12>
            <WhiteRectangle11>
              <Text25>Qualified Doctors</Text25>
            </WhiteRectangle11>
            <Doctorwoman
              src={`https://file.rendit.io/n/t0KziboWsGlcw4fWc7KT.svg`}
            />
          </Group12>
          <Group13>
            <WhiteRectangle12>
              <Text26>24 Hours Service</Text26>
            </WhiteRectangle12>
            <DoctorwomanCopy1
              src={`https://file.rendit.io/n/jJ2MUohpGKgrEbZlUGtH.svg`}
            />
          </Group13>
        </Group10>
        <Group11>
          <WhiteRectangle13>
            <Text27>Emergency Care</Text27>
          </WhiteRectangle13>
          <DoctorwomanCopy
            src={`https://file.rendit.io/n/iLuYvVZbxLR1UXxp9Vkt.svg`}
          />
        </Group11>
      </Oval3>
      <OvalCopy>
        <WeHaveTheBestSpe>We Have The Best Specialist</WeHaveTheBestSpe>
        <WeHaveAWideExperCopy>
          We have a wide experience in experience design and strategy, with
          locally-rooted knowledge.
        </WeHaveAWideExperCopy>
        <Group14>
          <WhiteRectangle3>
            <Bitmap src={`https://file.rendit.io/n/dnPR46tyktuVOrF33VYT.svg`} />
            <Text10>Dr. Awaatif Al</Text10>
            <Text11>Dental Care</Text11>
          </WhiteRectangle3>
          <WhiteRectangle4>
            <Bitmap1
              src={`https://file.rendit.io/n/dnPR46tyktuVOrF33VYT.svg`}
            />
            <Text12>Dr. Filipa Gaspar</Text12>
            <Text13>Cardiology</Text13>
          </WhiteRectangle4>
          <WhiteRectangle5>
            <Bitmap2
              src={`https://file.rendit.io/n/dnPR46tyktuVOrF33VYT.svg`}
            />
            <Text14>Dr. Sukhmeet Gorae</Text14>
            <Text15>Neurological</Text15>
          </WhiteRectangle5>
          <WhiteRectangle6>
            <Bitmap3
              src={`https://file.rendit.io/n/dnPR46tyktuVOrF33VYT.svg`}
            />
            <Text16>Dr. Siri Jakobsson</Text16>
            <Text17>Prediatrics</Text17>
          </WhiteRectangle6>
        </Group14>
      </OvalCopy>

 
      <div >
      <WhatOurCustomersS>What Our Customers Say</WhatOurCustomersS>
      {fake.map((values) => (
        
          <div  >

            {/* <h3 >{values.Name}</h3>
            <h6>{values.Company}</h6>
            <h6>{values.Reviews}</h6> */}

             <WhiteRectangle8>
        
        <Group15>
          <Group16>
            <WhiteRectangle9>
              <IWantedToThanksE>
               {values.Reviews}
              </IWantedToThanksE>
              <Group18>
                <Oval5
                  src={`https://file.rendit.io/n/wMz7g9fWOUEk0Lqcve60.png`}
                />
                <Group19>
                  <Text18>{values.Name}</Text18>
                  <Text19>{values.Company}</Text19>
                </Group19>
              </Group18>
            </WhiteRectangle9>
            <Oval4 src={`https://file.rendit.io/n/QlUkGzpzrXs9Q5oi32J2.svg`} />
            <Text20>“</Text20>
          </Group16>
          <Group17>
            <WhiteRectangle10>
              <IWantedToThanksE1>
                I wanted to thanks everyone at this facility for the quality of
                care and compassion they showed during my stay.
              </IWantedToThanksE1>
              <Group20>
                <Oval7
                  src={`https://file.rendit.io/n/J2OxIdBfGdVjt2I2fiPE.png`}
                />
                <Group21>
                  <Text21>Patrícia Ribeiro</Text21>
                  <Text22>Patient</Text22>
                </Group21>
              </Group20>
            </WhiteRectangle10>
            <Oval6 src={`https://file.rendit.io/n/QlUkGzpzrXs9Q5oi32J2.svg`} />
            <Text23>“</Text23>
          </Group17>
        </Group15>
      </WhiteRectangle8>
        </div>

        
      ))}

    </div>

    



      <Group1>
        <WhiteRectangle7 />
        <OvalCopy1 src={`https://file.rendit.io/n/eWWPQEUEjxgzLHjvRygE.svg`} />
        <NavyBlueRectangle>
          <SubscribeToNewslet>Subscribe to Newsletter</SubscribeToNewslet>
          <WeHaveAWideExper>
            We have a wide experience in experience design and strategy,
          </WeHaveAWideExper>
          <WhiteRectangle>
            <EnterYourEmailAdd>Enter your email address</EnterYourEmailAdd>
            <NavyBlueRectangle1>
              <Text1>Send Now</Text1>
            </NavyBlueRectangle1>
          </WhiteRectangle>
        </NavyBlueRectangle>
      </Group1>
      <WhiteRectangle17>
        <Group22>
          <MediCare1>
            Medi<MediCare>Care+</MediCare>
          </MediCare1>
          <Text37>Home</Text37>
          <Text36>About</Text36>
          <Text35>Services</Text35>
          <Text34>News</Text34>
        </Group22>
        <WhiteRectangle18>
          <Group23>
            <Oval>
              <Path src={`https://file.rendit.io/n/GUTcc36HorVT1gpIXIik.svg`} />
            </Oval>
            <Oval1>
              <Path1
                src={`https://file.rendit.io/n/0tkP0P4g2AIOTdWCm9fC.svg`}
              />
              <Group24>
                <Path5
                  src={`https://file.rendit.io/n/Jjp58Tcs3Vx0SXwtptpj.svg`}
                />
                <Path6
                  src={`https://file.rendit.io/n/ZqPZC4CYw7xKhSHZqe7i.svg`}
                />
              </Group24>
              <Group25>
                <Path2
                  src={`https://file.rendit.io/n/Ks95D8ueXnibQChPIDiM.svg`}
                />
                <Path3
                  src={`https://file.rendit.io/n/NhuHdNIMyyrPEGq0Lmyl.svg`}
                />
                <Path4
                  src={`https://file.rendit.io/n/31Dh2y3WwLd2vo9TufYY.svg`}
                />
              </Group25>
            </Oval1>
            <Oval2>
              <Path7
                src={`https://file.rendit.io/n/a4clfFewzMGvjj9PNXWF.svg`}
              />
            </Oval2>
          </Group23>
          <PodPayment>©2020 PodPayment - 2020</PodPayment>
        </WhiteRectangle18>
      </WhiteRectangle17>
      <Reviews></Reviews>
    </HospitalLandingPageRootRoot>
   
  );
};

const HospitalLandingPageRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  background-color: #f8fdff;
  overflow: hidden;
`;
const OvalOvalCopyMask = styled.div`
  width: 100.07%;
  gap: 58px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px -1px 46px 0px;
  padding: 25px 120px 140px 120px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/A6s8Mt4bQpiQ7FmlqbSr.svg");
`;
const Group2 = styled.div`
  width: 1133px;
  gap: 52px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const MediCare3 = styled.div`
  align-self: flex-end;
  margin: 15px 336px 0px 0px;
  color: #0073ff;
  font-size: 34px;
  font-weight: 700;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const MediCare2 = styled.div`
  display: contents;
  color: #ff9f6a;
  font-size: 34px;
  font-weight: 700;
  font-family: Source Sans Pro;
`;
const Text5 = styled.div`
  align-self: flex-start;
  margin: 15px 2px 23px 0px;
  color: #0073ff;
  font-size: 16px;
  font-weight: 700;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const Text4 = styled.div`
  align-self: flex-start;
  margin: 15px 2px 23px 0px;
  color: #0073ff;
  font-size: 16px;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const Text3 = styled.div`
  align-self: flex-start;
  margin: 15px 0px 23px 0px;
  color: #0073ff;
  font-size: 16px;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const Text2 = styled.div`
  align-self: flex-start;
  margin: 15px 28px 23px 0px;
  color: #0073ff;
  font-size: 16px;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const NavyBlueRectangle2 = styled.div`
  width: 19.47%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 8px 0px;
  padding: 14px 57px 16px 57px;
  border-radius: 25px;
  box-sizing: border-box;
  background-color: #007ff4;
`;
const Text6 = styled.div`
  align-self: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Source Sans Pro;
  text-align: center;
  box-sizing: border-box;
`;
const Group3 = styled.div`
  width: 99.83%;
  gap: 79px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Group4 = styled.div`
  width: 48.75%;
  gap: 23px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  margin: 143px 0px;
  box-sizing: border-box;
`;
const WelcomeToMediCare = styled.div`
  align-self: flex-start;
  margin: 0px 0px 6px 0px;
  color: #002348;
  font-size: 24px;
  font-weight: 700;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const Text9 = styled.div`
  align-self: flex-start;
  color: #003b79;
  font-size: 64px;
  font-weight: 700;
  font-family: Source Sans Pro;
  line-height: 78px;
  box-sizing: border-box;
`;
const WeAreOnTheLeadin = styled.div`
  width: 100%;
  align-self: flex-start;
  margin: 0px 0px 26px 0px;
  color: #002348;
  font-size: 20px;
  font-family: Source Sans Pro;
  line-height: 39px;
  box-sizing: border-box;
`;
const Group5 = styled.div`
  width: 99.27%;
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const NavyBlueRectangle3 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  padding: 20px 51px;
  border-radius: 30px;
  box-sizing: border-box;
  background-color: #007ff4;
`;
const Text7 = styled.div`
  align-self: flex-end;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Source Sans Pro;
  text-align: center;
  box-sizing: border-box;
`;
const WhiteRectangle1 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  padding: 20px 82.5px;
  border-radius: 30px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.07);
`;
const Text8 = styled.div`
  align-self: flex-end;
  color: #007df2;
  font-size: 16px;
  font-weight: 700;
  font-family: Source Sans Pro;
  text-align: center;
  box-sizing: border-box;
`;
const WhiteRectangle2 = styled.div`
  width: 51.25%;
  height: 672px;
  align-self: flex-start;
  border-radius: 32px;
  box-sizing: border-box;
  background-color: #ebeeff;
`;
const Text33 = styled.div`
  align-self: flex-end;
  margin: 0px 574px 34px 0px;
  color: #003b79;
  font-size: 54px;
  font-weight: 600;
  font-family: Source Sans Pro;
  line-height: 78px;
  text-align: center;
  box-sizing: border-box;
`;
const WeProvideTheMost = styled.div`
  width: 37.92%;
  align-self: center;
  margin: 0px 0px 69px 0px;
  color: #002348;
  font-size: 20px;
  font-family: Source Sans Pro;
  line-height: 39px;
  text-align: center;
  box-sizing: border-box;
`;
const Group = styled.div`
  width: 83.33%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin: 0px 0px 166px 0px;
  box-sizing: border-box;
`;
const WhiteRectangle16 = styled.div`
  width: 22.75%;
  gap: 55.3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 50px 0px;
  padding: 40.3px 34px 70px 34px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.07);
`;
const Shape = styled.div`
  width: 113px;
  gap: 3.75px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 0px 10px;
  padding: 13.7px 11.8px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/RRttI3ynFFvFw3nb1RFM.svg");
`;
const Path8 = styled.img`
  width: 16.99%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: flex-start;
  margin: 0.55px 0px 80.7px 0px;
  box-sizing: border-box;
`;
const NavyBlueSquare = styled.div`
  width: 5.72px;
  height: 5.72px;
  flex-shrink: 0;
  align-self: flex-start;
  margin: 0px 0px 94.4px 0px;
  border-width: 1px;
  border-style: solid;
  border-color: #007df2;
  box-sizing: border-box;
  background-color: #007df2;
`;
const Text32 = styled.div`
  align-self: flex-start;
  color: #002348;
  font-size: 24px;
  font-weight: 700;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const NavyBlueRectangle5 = styled.div`
  width: 22.75%;
  gap: 51px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 46.1px 34px 49px 34px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #007ef3;
  box-shadow: 0px 10px 50px 25px rgba(0, 126, 243, 0.26);
`;
const Shape5 = styled.div`
  width: 128px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  margin: 0px 0px 11.6px 6px;
  padding: 75.5px 55.5px 33.9px 55.5px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/XDSzW2ezWevN1cHLDak4.svg");
`;
const Path18 = styled.img`
  width: 29.36%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: flex-end;
  box-sizing: border-box;
`;
const Text31 = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const Group6 = styled.div`
  width: 196px;
  gap: 98.5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Text30 = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const PathCopy = styled.img`
  width: 7.22%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: flex-end;
  margin: 4.5px 0px 1.5px 0px;
  box-sizing: border-box;
`;
const WhiteRectangle15 = styled.div`
  width: 22.75%;
  gap: 59.1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 50px 0px;
  padding: 42.1px 34px 70px 34px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.07);
`;
const Group7 = styled.div`
  width: 128px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 0px 6px;
  box-sizing: border-box;
`;
const Path9 = styled.img`
  width: 9.53%;
  min-width: 0px;
  height: 17.3px;
  min-height: 0px;
  left: 16.374740600585938px;
  top: 39.1278076171875px;
  position: absolute;
  box-sizing: border-box;
`;
const Path10 = styled.img`
  width: 9.53%;
  min-width: 0px;
  height: 17.3px;
  min-height: 0px;
  left: 76.71174621582031px;
  top: 39.12744140625px;
  position: absolute;
  box-sizing: border-box;
`;
const Path11 = styled.img`
  width: 8.52%;
  min-width: 0px;
  height: 14.8px;
  min-height: 0px;
  left: 33.92399597167969px;
  top: 18.80029296875px;
  position: absolute;
  box-sizing: border-box;
`;
const Path12 = styled.img`
  width: 8.52%;
  min-width: 0px;
  height: 14.8px;
  min-height: 0px;
  left: 60.43701934814453px;
  top: 19.5111083984375px;
  position: absolute;
  box-sizing: border-box;
`;
const Path13 = styled.img`
  width: 8.52%;
  min-width: 0px;
  height: 14.8px;
  min-height: 0px;
  left: 33.92399597167969px;
  top: 61.312744140625px;
  position: absolute;
  box-sizing: border-box;
`;
const Shape1 = styled.div`
  width: 100%;
  position: relative;
  gap: 23.1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-start;
  padding: 14.9px 14.8px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/4i88BTiqJ2IbZe2FhMhe.svg");
`;
const Path14 = styled.img`
  width: 6.63%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: flex-start;
  margin: 32.6px 0px 54.6px 0px;
  box-sizing: border-box;
`;
const Shape2 = styled.img`
  width: 46.47%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: flex-end;
  margin: 56.9px 0px 0px 0px;
  box-sizing: border-box;
`;
const Text29 = styled.div`
  align-self: flex-start;
  color: #002348;
  font-size: 24px;
  font-weight: 700;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const WhiteRectangle14 = styled.div`
  width: 22.75%;
  gap: 55px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 50px 0px;
  padding: 40px 34px 70px 34px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.07);
`;
const Shape3 = styled.div`
  width: 95.4px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 0px 11px;
  padding: 36.7px 11px 24.9px 11px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/zxNSMA31oY3vkmRKiQuA.svg");
`;
const Group8 = styled.div`
  width: 62.9px;
  gap: 5.54px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 0px 1.76px 0px;
  box-sizing: border-box;
`;
const Shape4 = styled.img`
  width: 91.24%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Path15 = styled.img`
  width: 8.7%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: flex-end;
  margin: 33.8px 0px 5.84px 0px;
  box-sizing: border-box;
`;
const Path16 = styled.img`
  width: 66.9%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: center;
  box-sizing: border-box;
`;
const Path17 = styled.img`
  width: 66.9%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: center;
  box-sizing: border-box;
`;
const Text28 = styled.div`
  align-self: flex-start;
  color: #002348;
  font-size: 24px;
  font-weight: 700;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const Oval3 = styled.div`
  width: 100%;
  gap: 31px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 166px 121px 166px 120px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/dLTgICWmAMb018oehmte.svg");
`;
const Group9 = styled.div`
  width: 48.02%;
  gap: 34px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 301px 27px 200px 0px;
  box-sizing: border-box;
`;
const ClinicWithInnovati = styled.div`
  align-self: flex-start;
  color: #003b79;
  font-size: 54px;
  font-weight: 600;
  font-family: Source Sans Pro;
  line-height: 78px;
  box-sizing: border-box;
`;
const WeProvideTheMost1 = styled.div`
  width: 100%;
  align-self: flex-start;
  margin: 0px 0px 10px 0px;
  color: #002348;
  font-size: 20px;
  font-family: Source Sans Pro;
  line-height: 39px;
  box-sizing: border-box;
`;
const NavyBlueRectangle4 = styled.div`
  width: 186px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  margin: 0px 0px 0px 3px;
  padding: 20px 53px;
  border-radius: 30px;
  box-sizing: border-box;
  background-color: #007ff4;
`;
const Text24 = styled.div`
  align-self: flex-end;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Source Sans Pro;
  text-align: center;
  box-sizing: border-box;
`;
const Group10 = styled.div`
  width: 24.8%;
  gap: 91px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  box-sizing: border-box;
`;
const Group12 = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 0px 25px 120px 25px;
  box-sizing: border-box;
`;
const WhiteRectangle11 = styled.div`
  width: 100%;
  height: 236px;
  left: 0px;
  top: 116px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 154px 26px 52px 26px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.07);
`;
const Text25 = styled.div`
  align-self: flex-start;
  color: #002348;
  font-size: 24px;
  font-weight: 600;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const Doctorwoman = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  align-self: center;
  box-sizing: border-box;
`;
const Group13 = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 0px 25px 120px 25px;
  box-sizing: border-box;
`;
const WhiteRectangle12 = styled.div`
  width: 100%;
  height: 242px;
  left: 0px;
  top: 110px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 160px 26px 52px 26px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.07);
`;
const Text26 = styled.div`
  align-self: flex-start;
  color: #002348;
  font-size: 24px;
  font-weight: 600;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const DoctorwomanCopy1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  align-self: center;
  box-sizing: border-box;
`;
const Group11 = styled.div`
  width: 24.8%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 206px 0px 236px 0px;
  padding: 0px 25px 121px 25px;
  box-sizing: border-box;
`;
const WhiteRectangle13 = styled.div`
  width: 100%;
  height: 242px;
  left: 0px;
  top: 111px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 160px 26px 52px 26px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.07);
`;
const Text27 = styled.div`
  align-self: flex-start;
  color: #002348;
  font-size: 24px;
  font-weight: 600;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const DoctorwomanCopy = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  align-self: center;
  box-sizing: border-box;
`;
const OvalCopy = styled.div`
  width: 100%;
  gap: 34px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  margin: 0px 0px 51px 0px;
  padding: 164px 119px 85px 119px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/DUutdOviEzDr85ZRF7ta.svg");
`;
const WeHaveTheBestSpe = styled.div`
  align-self: flex-end;
  margin: 0px 278px 0px 0px;
  color: #003b79;
  font-size: 54px;
  font-weight: 600;
  font-family: Source Sans Pro;
  line-height: 78px;
  text-align: center;
  box-sizing: border-box;
`;
const WeHaveAWideExperCopy = styled.div`
  width: 45.42%;
  align-self: center;
  margin: 0px 0px 34px 0px;
  color: #002348;
  font-size: 20px;
  font-family: Source Sans Pro;
  line-height: 39px;
  text-align: center;
  box-sizing: border-box;
`;
const Group14 = styled.div`
  width: 99.92%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  box-sizing: border-box;
`;
const WhiteRectangle3 = styled.div`
  width: 22.81%;
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 0px 0px 34px 0px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.07);
`;
const Bitmap = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  margin: 0px 0px 13px 0px;
  box-sizing: border-box;
`;
const Text10 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 0px 34px;
  color: #002348;
  font-size: 24px;
  font-weight: 700;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const Text11 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 0px 34px;
  color: #002348;
  font-size: 18px;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const WhiteRectangle4 = styled.div`
  width: 22.81%;
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 0px 0px 34px 0px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.07);
`;
const Bitmap1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  margin: 0px 0px 13px 0px;
  box-sizing: border-box;
`;
const Text12 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 0px 34px;
  color: #002348;
  font-size: 24px;
  font-weight: 700;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const Text13 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 0px 34px;
  color: #002348;
  font-size: 18px;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const WhiteRectangle5 = styled.div`
  width: 22.81%;
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 0px 0px 34px 0px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.07);
`;
const Bitmap2 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  margin: 0px 0px 13px 0px;
  box-sizing: border-box;
`;
const Text14 = styled.div`
  align-self: flex-end;
  margin: 0px 29px 0px 0px;
  color: #002348;
  font-size: 24px;
  font-weight: 700;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const Text15 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 0px 34px;
  color: #002348;
  font-size: 18px;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const WhiteRectangle6 = styled.div`
  width: 22.81%;
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 0px 0px 34px 0px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.07);
`;
const Bitmap3 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  margin: 0px 0px 13px 0px;
  box-sizing: border-box;
`;
const Text16 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 0px 34px;
  color: #002348;
  font-size: 24px;
  font-weight: 700;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const Text17 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 0px 34px;
  color: #002348;
  font-size: 18px;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const WhiteRectangle8 = styled.div`
  width: 100%;
  gap: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  margin: 0px 0px 38px 0px;
  padding: 80px 98.7px;
  box-sizing: border-box;
  background-color: #f8fdff;
`;
const WhatOurCustomersS = styled.div`
  align-self: flex-start;
  margin: 0px 0px 0px 22.3px;
  color: #003b79;
  font-size: 54px;
  font-weight: 600;
  font-family: Source Sans Pro;
  line-height: 78px;
  box-sizing: border-box;
`;
const Group15 = styled.div`
  width: 98.18%;
  gap: 27.7px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  box-sizing: border-box;
`;
const Group16 = styled.div`
  width: 49.98%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 16.8px 31.7px 232px 31.7px;
  box-sizing: border-box;
`;
const WhiteRectangle9 = styled.div`
  width: 96.76%;
  height: auto;
  left: 0px;
  top: 23px;
  position: absolute;
  gap: 19px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 67px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.07);
`;
const IWantedToThanksE = styled.div`
  width: 99.77%;
  align-self: flex-end;
  color: #002348;
  font-size: 20px;
  font-family: Source Sans Pro;
  line-height: 39px;
  box-sizing: border-box;
`;
const Group18 = styled.div`
  width: 262px;
  gap: 22px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 0px 1px;
  box-sizing: border-box;
`;
const Oval5 = styled.img`
  width: 24.58%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: flex-start;
  margin: 0px 0px 3px 0px;
  box-sizing: border-box;
`;
const Group19 = styled.div`
  width: 75.42%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 1px 0px 0px 0px;
  box-sizing: border-box;
`;
const Text18 = styled.div`
  align-self: flex-start;
  color: #002348;
  font-size: 24px;
  font-weight: 600;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const Text19 = styled.div`
  align-self: flex-start;
  color: #002348;
  font-size: 18px;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const Oval4 = styled.img`
  width: 13.97%;
  min-width: 0px;
  height: 83.3px;
  min-height: 0px;
  left: 513px;
  top: 0px;
  position: absolute;
  box-sizing: border-box;
`;
const Text20 = styled.div`
  position: relative;
  align-self: flex-end;
  color: #ffffff;
  font-size: 59.1px;
  font-family: Helvetica;
  box-sizing: border-box;
`;
const Group17 = styled.div`
  width: 49.98%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 16.8px 31.7px 232px 31.7px;
  box-sizing: border-box;
`;
const WhiteRectangle10 = styled.div`
  width: 96.76%;
  height: 294px;
  left: 0px;
  top: 23px;
  position: absolute;
  gap: 19px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 67px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.07);
`;
const IWantedToThanksE1 = styled.div`
  width: 99.77%;
  align-self: flex-end;
  color: #002348;
  font-size: 20px;
  font-family: Source Sans Pro;
  line-height: 39px;
  box-sizing: border-box;
`;
const Group20 = styled.div`
  width: 239px;
  gap: 22px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 0px 1px;
  box-sizing: border-box;
`;
const Oval7 = styled.img`
  width: 27.19%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: flex-start;
  margin: 0px 0px 3px 0px;
  box-sizing: border-box;
`;
const Group21 = styled.div`
  width: 72.81%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 1px 0px 0px 0px;
  box-sizing: border-box;
`;
const Text21 = styled.div`
  align-self: flex-start;
  color: #002348;
  font-size: 24px;
  font-weight: 600;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const Text22 = styled.div`
  align-self: flex-start;
  color: #002348;
  font-size: 18px;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const Oval6 = styled.img`
  width: 13.97%;
  min-width: 0px;
  height: 83.3px;
  min-height: 0px;
  left: 513px;
  top: 0px;
  position: absolute;
  box-sizing: border-box;
`;
const Text23 = styled.div`
  position: relative;
  align-self: flex-end;
  color: #ffffff;
  font-size: 59.1px;
  font-family: Helvetica;
  box-sizing: border-box;
`;
const Group1 = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 112px 121px 110px 121px;
  box-sizing: border-box;
`;
const WhiteRectangle7 = styled.div`
  width: 100%;
  height: 698px;
  left: 0px;
  top: 2px;
  position: absolute;
  box-sizing: border-box;
  background-color: #f8fdff;
`;
const OvalCopy1 = styled.img`
  width: 301px;
  min-width: 0px;
  height: 301px;
  min-height: 0px;
  left: 1123px;
  top: 0px;
  position: absolute;
  box-sizing: border-box;
`;
const NavyBlueRectangle = styled.div`
  width: 100%;
  position: relative;
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  padding: 44px 175px 105px 175px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #007ff4;
`;
const SubscribeToNewslet = styled.div`
  align-self: flex-start;
  margin: 0px 0px 0px 145px;
  color: #ffffff;
  font-size: 48px;
  font-weight: 600;
  font-family: Source Sans Pro;
  line-height: 78px;
  box-sizing: border-box;
`;
const WeHaveAWideExper = styled.div`
  align-self: flex-end;
  margin: 0px 169px 68px 0px;
  color: #ffffff;
  font-size: 20px;
  font-family: Source Sans Pro;
  line-height: 39px;
  text-align: center;
  box-sizing: border-box;
`;
const WhiteRectangle = styled.div`
  width: 846px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  padding: 23px 22px 23px 36px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #ffffff;
`;
const EnterYourEmailAdd = styled.div`
  align-self: flex-start;
  margin: 17px 0px 18px 0px;
  color: #9b9b9b;
  font-size: 20px;
  font-family: Source Sans Pro;
  line-height: 39px;
  box-sizing: border-box;
`;
const NavyBlueRectangle1 = styled.div`
  width: 22.34%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  padding: 27px 52px;
  border-radius: 37px;
  box-sizing: border-box;
  background-color: #007ff4;
`;
const Text1 = styled.div`
  align-self: flex-end;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Source Sans Pro;
  text-align: center;
  box-sizing: border-box;
`;
const WhiteRectangle17 = styled.div`
  width: 100%;
  gap: 51px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  padding: 50px 0px 0px 0px;
  box-sizing: border-box;
  background-color: #f7fbff;
`;
const Group22 = styled.div`
  width: 83.19%;
  gap: 52px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  box-sizing: border-box;
`;
const MediCare1 = styled.div`
  align-self: flex-start;
  margin: 0px 651px 0px 0px;
  color: #0073ff;
  font-size: 34px;
  font-weight: 700;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const MediCare = styled.div`
  display: contents;
  color: #ff9f6a;
  font-size: 34px;
  font-weight: 700;
  font-family: Source Sans Pro;
`;
const Text37 = styled.div`
  align-self: flex-start;
  margin: 0px 2px 23px 0px;
  color: #0073ff;
  font-size: 16px;
  font-weight: 700;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const Text36 = styled.div`
  align-self: flex-start;
  margin: 0px 2px 23px 0px;
  color: #0073ff;
  font-size: 16px;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const Text35 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 23px 0px;
  color: #0073ff;
  font-size: 16px;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const Text34 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 23px 0px;
  color: #0073ff;
  font-size: 16px;
  font-family: Source Sans Pro;
  box-sizing: border-box;
`;
const WhiteRectangle18 = styled.div`
  width: 100%;
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 49px 121px 91px 121px;
  box-sizing: border-box;
  background-color: #ecf4ff;
`;
const Group23 = styled.div`
  width: 171px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  margin: 0px 0px 0px 3px;
  box-sizing: border-box;
`;
const Oval = styled.div`
  width: 29.82%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 17px 21px 16px 21px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/AKKCfuV8wyqvv5dRZ9i6.svg");
`;
const Path = styled.img`
  width: 99.22%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: center;
  box-sizing: border-box;
`;
const Oval1 = styled.div`
  width: 29.82%;
  position: relative;
  gap: 0.38px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 17px 16px 16px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/AKKCfuV8wyqvv5dRZ9i6.svg");
`;
const Path1 = styled.img`
  width: 9.59%;
  min-width: 0px;
  height: 11px;
  min-height: 0px;
  left: 17px;
  top: 20.523193359375px;
  position: absolute;
  box-sizing: border-box;
`;
const Group24 = styled.div`
  width: 13.9px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 2.26px 0px 0px;
  box-sizing: border-box;
`;
const Path5 = styled.img`
  width: 63.76%;
  min-width: 0px;
  height: 5.99px;
  min-height: 0px;
  left: 5.03363037109375px;
  top: 0px;
  position: absolute;
  box-sizing: border-box;
`;
const Path6 = styled.img`
  width: 51.44%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  position: relative;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Group25 = styled.div`
  width: 16.1px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  box-sizing: border-box;
`;
const Path2 = styled.img`
  width: 47.02%;
  min-width: 0px;
  height: 4.89px;
  min-height: 0px;
  left: 5.0335693359375px;
  top: 6.174560546875px;
  position: absolute;
  box-sizing: border-box;
`;
const Path3 = styled.img`
  width: 44.23%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  position: relative;
  align-self: flex-end;
  margin: 4.51px 0px 0px 0px;
  box-sizing: border-box;
`;
const Path4 = styled.img`
  width: 55.75%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  position: relative;
  align-self: flex-start;
  margin: 0px 0px 1.86px 0px;
  box-sizing: border-box;
`;
const Oval2 = styled.div`
  width: 29.82%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 18px 16px 18.4px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/AKKCfuV8wyqvv5dRZ9i6.svg");
`;
const Path7 = styled.img`
  width: 94.74%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: flex-end;
  box-sizing: border-box;
`;
const PodPayment = styled.div`
  width: 17.78%;
  align-self: flex-start;
  color: #667c94;
  font-size: 14px;
  font-weight: 600;
  font-family: Open Sans;
  line-height: 34px;
  box-sizing: border-box;
`;
