import styled from 'styled-components';
const Container = styled.div`
    max-width : 350px;
    width : auto;
    text-align : center;

    .mentor-image {
        figure {
            width : 200px;
            height : 200px;
            margin: 0 auto;
            padding: 0;
            overflow: hidden;
            border-radius : 100%;

            @media only screen and (max-width : 450px){
                width : 150px;
                height : 150px;
            }

        }

        img {
            width : 200px;
            height : 200px;
            border-radius : 100%;
            object-fit : cover;

            @media only screen and (max-width : 450px){
                width : 150px;
                height : 150px;
            }

        }

        figure img {
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transition: .3s ease-in-out;
            transition: .3s ease-in-out;
        }
        figure:hover img {
            -webkit-transform: scale(1.3);
            transform: scale(1.3);
        }
    }

    .mentor-type{
        width : 150px;
        height : 100%;
        max-height : 25px;
        background : ${(props) => (props.type === 'online' ? 'linear-gradient(90deg, #9BE15D 0%, #00E3AE 100%)' : 'linear-gradient(90deg, #F6D365 0%, #FDA085 100%)')};
        border-radius: 60px;
        font-weight: 500;
        font-size: 16px;
        margin-top : -20px;
        z-index : 1 ;
        position: relative;
        margin-left : auto;
        margin-right : auto;
    }


    .mentor-description {
        h3 {
            font-weight: 500;
            font-size: 26px;
            margin-bottom : 0px;
        }

        h4 {
            font-weight: 400;
            font-size: 18px;
        }

        h5 {
            font-weight: 400;
            font-size: 15px;
        }
    }
`

export default function Mentor(props) {
    return (
        <Container className='mentor-container' {...props}>
            <div className="mentor-image">
                <figure><img src={props.img} alt='mentor' /></figure>
            </div>
            <div className="mentor-type">
                <span>{props.type}</span>
            </div>
            <div className="mentor-description">
                <h3 className='mentor-description-name'>{props.name}</h3>
                <h4 className='mentor-description-name'>{props.position}</h4>
                <h5 className='mentor-description-company-profile'>{props.organization}</h5>
            </div>
        </Container>
    );
}