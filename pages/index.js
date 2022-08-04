import styles from '../styles/Home.module.css'
import Mentor from '../components/mentor/Index'
import 'antd/dist/antd.css';
import { Button } from 'antd';
import styled from 'styled-components';

const Section = styled.section`
  width : auto;
  height : auto;
  background : #ffffffe4;
  border-radius : 20px;
  padding : 50px;
  margin : 50px;

  @media only screen and (max-width : 450px){
    padding : 20px;
    margin : 10px;
  }

  .content-container {

    .content-header{
      display : flex;
      justify-content : space-between;
      align-items : center;
      margin-bottom : 20px;

      span {
        font-size : 32px;
        font-weight : 500;
      }

      @media only screen and (max-width : 768px){
        & > * {
          flex-wrap : wrap;
          width : 100%;
          text-align : center;
          img {
            width : 50% !important;
          }
        }
      }
    }

    .mentor-data {
      display : grid;
      grid-template-columns : 1fr 1fr 1fr;
      width : 100%;
      margin : 0 auto;

      /* @media only screen and (min-width : 1200px){
        grid-template-columns : 1fr 1fr 1fr 1fr 1fr;
      } */

      @media only screen and (max-width : 1100px) {
        grid-template-columns : 1fr 1fr;
      }

      @media only screen and (max-width : 768px) {
        grid-template-columns : 1fr ;
      }

      .mentor, .booking{
        margin : 0 auto;
        text-align : center;
      }

      .mentor-booking-primary {
        margin : 20px;
        background-color: #0099FF !important;
        border-radius: 5px !important;
        color : white !important;
        width : 150px !important;
        font-size : 18px !important;
      }

      .mentor-booking-primary:hover {
          background: white !important;
          color : #0099FF !important;
          border-color : #0099FF !important;
          font-size : 20px !important;
      }
    }
  }

`

export default function Home(props) {

  const mentorData = [
    {
      name: 'ปีย์ ตัณฑ์กุลรัตน์',
      position: 'Senior Developer Consultant',
      organization: 'Thoughtworks',
      img: '/images/mentor/2.jpeg',
      type: 'online'
    },
    {
      name: 'ปฏิภาณ บุณฑริก',
      position: 'ผู้กำกับภาพยนตร์',
      organization: 'Error Brothers Ltd.',
      img: '/images/mentor/4.jpg',
      type: 'onsite'
    },
    {
      name: 'บุษกานต์ นวลแก้ว',
      position: 'UX/UI Designer',
      organization: 'Error Brothers Ltd.',
      img: '/images/mentor/5.png',
      type: 'onsite'
    },
    {
      name: 'ผศ.ดร. สมปรารถนา ฤทธิ์พริ้ง',
      position: 'อาจารย์ประจำภาควิชาวิศวกรรมทรัพยากรน้ำ ',
      organization: 'คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร',
      img: '/images/mentor/1.jpg',
      type: 'onsite'
    },
    {
      name: 'อาริญา หงสวินิตกุล',
      position: 'Project Management Consultant',
      organization: 'กำลังศึกษาต่อ Executive MBA จุฬาลงกรณ์มหาวิทยาลัย',
      img: '/images/mentor/3.png',
      type: 'onsite'
    }
  ]
  return (
    <div className={styles.container}>
      <Section className='section-container'>
        <div className='content-container'>
          <div className="content-header">
            <div className="logo-img">
              <img src="/images/logo.png" alt="" />
            </div>
            <span>Mentor</span>
          </div>
          <div className="mentor-data">
            {mentorData.map((item) => (
                <div className="mentor">
                  <Mentor key={item.name} {...item} />
                </div>
              )
            )}
            <div className="booking">
              <img src="/images/qr.png" alt="" />
              <div className="mentor-booking">
                <Button className="mentor-booking-primary" href='https://bit.ly/mentor-booking'>Book</Button>
              </div>
            </div>
          </div>
        </div>

      </Section>
    </div>
  )
}
