import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from "react-bootstrap";
import moment from 'moment';
import 'moment-timezone';
import Header from '../components/global/_header'
import HeadingArea from '../components/global/_headingArea'
import '../../assets/sass/home.scss'
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faCheck, faClock } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){}

    render () {
        let items = [];
        for (var hour = 8; hour <= 12; hour++) {
            items.push([hour, 0]);
            items.push([hour, 30]);
        }

        const date = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
        

        let dateArray = []
        let range = []
        let weekdayNames = Array.apply(null, Array(7)).map(
            function (_, i) {
                let timeEvents = []
                const event = {
                    "time": '07:30 AM - 08:30AM',
                    "cost": '100$',
                    "location": "Bessie Cooper",
                    "phone": "+1 (684) 555-01-72",
                    "status": "completed",
                }
                let range = items.map(time => {
                    const [hour, minute] = time;
                    date.setHours(hour);
                    date.setMinutes(minute);
                    timeEvents.push({
                        time: formatter.format(date),
                        event: event,
                    });
                });
                dateArray.push(
                    {
                        "name": moment(i, 'e').format('dddd'),
                        "dayTime": "13:20",
                        "timeEvents": timeEvents
                    }
                )
                return dateArray;
            }
        );

        return (
            <main className="main-wrapper">
                <Header/>
                <HeadingArea/>
                <Container fluid className={'nopadding'}>
                    <div className="calendar-wrap bg-white">
                        {/* Week days list */}
                        <div className="time-list">
                            {weekdayNames[0][0].timeEvents.map((time) => {
                                return (
                                    <div className="time-block flexbox flex-bottom jc-center f12 lightgray">{time.time}</div>
                                )
                            })}
                        </div>
                        <div className="week-days-list flexbox flex-stretch jc-center">
                            {weekdayNames[0].map((day, eventIndex) => {
                                return  (
                                    <div className={"week-day-column flex-one index-" + eventIndex}>
                                        <div className="cell week-day flexbox flex-center jc-center  align-center">
                                            <div className="div-inner">
                                                <div className="day-name semibold">{day.name}</div>
                                                <div className="day-time lightgray">{day.dayTime}</div>
                                            </div>
                                        </div>
                                        {day.timeEvents.map((time, timeIndex) => {
                                            let shouldShow = false
                                            let status = ''
                                            let statusText = ''
                                            if(
                                                eventIndex === 0 && timeIndex === 0 || 
                                                eventIndex === 0 && timeIndex === 3 || 
                                                eventIndex === 1 && timeIndex === 0 || 
                                                eventIndex === 1 && timeIndex === 2 ||
                                                eventIndex === 2 && timeIndex === 4 || 
                                                eventIndex === 3 && timeIndex === 0 ||
                                                eventIndex === 3 && timeIndex === 3 ||
                                                eventIndex === 5 && timeIndex === 1 ||
                                                eventIndex === 5 && timeIndex === 4 ||
                                                eventIndex === 6 && timeIndex === 0 ||
                                                eventIndex === 6 && timeIndex === 2
                                            ){
                                                shouldShow = true
                                            }
                                            if(eventIndex === 0 && timeIndex === 0 || eventIndex === 0 && timeIndex === 3){
                                                status = 'success'
                                            }
                                            if(eventIndex === 1 && timeIndex === 0){
                                                status = 'no-show'
                                            }
                                            if(eventIndex === 1 && timeIndex === 2){
                                                status = 'waiting'
                                            }
                                            return (
                                                <div className={("cell time-cell timeindex-" + timeIndex) + (' status-' + status)}>
                                                    <div className="div-inner">
                                                        <div className="day-time lightgray">{time.time}</div>
                                                        {shouldShow ? (
                                                            <div className="event-box">
                                                                <div className="event-box-inner">
                                                                    <p className="nomargin">{time.event.time}</p>
                                                                    <p className="nomargin mb-10"><strong>Cost:</strong> {time.event.cost}</p>
                                                                    <p className="nomargin bold">{time.event.location}</p>
                                                                    <p className="nomargin mb-10">{time.event.phone}</p>
                                                                    {status === 'success' ? (
                                                                        <p className="mb-05"><FontAwesomeIcon icon={faCheck} /> Completed</p>
                                                                    ) : status === 'waiting' ? (
                                                                        <p className="mb-05"><FontAwesomeIcon icon={faUserFriends} /> Waiting</p>
                                                                    ) : status === 'no-show' ? (
                                                                        <p className="mb-05"><FontAwesomeIcon icon={faCheck} /> No Show</p>
                                                                    ) : (
                                                                        <p className="mb-05"><FontAwesomeIcon icon={faClock} /> Scheduled</p>
                                                                    )}
                                                                    {status === 'waiting' ? (
                                                                        <Button variant='warning' size={'sm'}>Start</Button>
                                                                    ) : ''}
                                                                </div>
                                                            </div>
                                                        ) : ''}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Container>
            </main>
        )
    }
}

const mapStateToProps = state => {
    const { countryListReducer } = state
    return {
        countryList: countryListReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listCountries: (data) => dispatch(data),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
