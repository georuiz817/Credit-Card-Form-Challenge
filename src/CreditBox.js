import React, { useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const CreditBox = () => {

  const [CardNum, setCardNum] = useState('');
  const [CardHolder, setCardHolder] = useState('');
  const [ExpM, setExpM] = useState('');
  const [ExpY, setExpY] = useState('');
  const [CVC, setCVC] = useState('');


  return (
    <div>
        <div id="PaymentForm">
            <Cards
                cvc={CVC}
                expiry={ExpM + ExpY}
                name={CardHolder}
                number={CardNum}
            />
        </div>
        <div className='CreditBox'>
            <div className="form-group">
                <form className="form-bar">
                    <Row>
                        <Col>
                            <label htmlFor='cardnumber'>Card Number</label>
                            <input className="form-control" value={CardNum} maxLength={16}  type="text" name="cardnumber" onChange={(e)=> setCardNum(e.target.value)}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor='cardholder'>Card Holder</label>
                            <input className="form-control" value={CardHolder} type="text" name="cardholder" onChange={(e)=> setCardHolder(e.target.value)}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <label htmlFor='month'>Expiration Date</label>
                            <select type="select" value={ExpM} name="exp" className="form-control exp" onChange={(e)=>
                            setExpM(e.target.value)}>
                                <option value="" disabled="disabled" defaultValue="selected">Mon</option>
                                <option value={'01'}>01</option>
                                <option value={'02'}>02</option>
                                <option value={'03'}>03</option>
                                <option value={'04'}>04</option>
                                <option value={'05'}>05</option>
                                <option value={'06'}>06</option>
                                <option value={'07'}>07</option>
                                <option value={'08'}>08</option>
                                <option value={'09'}>09</option>
                                <option value={'10'}>10</option>
                                <option value={'11'}>11</option>
                                <option value={'12'}>12</option>
                            </select>
                        </Col>
                        <Col xs={4}>
                            <label htmlFor='year'>
                            <br></br>
                            </label>
                            <select type="select" value={ExpY} name="exp" id='year' className="form-control exp" onChange={(e)=>
                                setExpY(e.target.value)}>
                                <option value="" disabled="disabled" defaultValue="selected">Year</option>
                                <option value={20}>2020</option>
                                <option value={21}>2021</option>
                                <option value={22}>2022</option>
                                <option value={23}>2023</option>
                                <option value={24}>2024</option>
                                <option value={25}>2025</option>
                                <option value={26}>2026</option>
                                <option value={27}>2027</option>
                                <option value={28}>2028</option>
                                <option value={29}>2029</option>
                                <option value={30}>2030</option>
                            </select>
                        </Col>
                        <Col className='cvv-class' lg={4}>
                            <label htmlFor='cvv'>CVV</label>
                            <input id='cvv' className="form-control" value={CVC} type="text" placeholder="CVV" name="CVC" onChange={(e)=> setCVC(e.target.value)}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <input className="btn btn-primary" type="submit" value="Submit" />
                        </Col>
                    </Row>
                </form>
            </div>
        </div>
    </div> 
    )
  }

export default CreditBox