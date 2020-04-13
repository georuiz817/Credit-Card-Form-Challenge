import React, { useState} from 'react';
import {Col, Row} from 'react-bootstrap';
 
const CreditBox = () => {

  const [CardNum, setCardNum] = useState('');
  const [CardHolder, setCardHolder] = useState('');
  const [ExpM, setExpM] = useState('MM');
  const [ExpY, setExpY] = useState('YY');
  const [Cvv, setCvv] = useState('');

   return (
    <div>
        <div className='Card'>
            <div className='card-info'>
                <Row className='top'>
                    <Col>
                    <img width='50%' height='150%' src='https://usa.visa.com/dam/VCOM/regional/lac/ENG/Default/Partner%20With%20Us/Payment%20Technology/visapos/full-color-800x450.jpg'/>
                    </Col>
                    <Col>
                    <img id='chip' src='https://cdn4.iconfinder.com/data/icons/modern-future-technology/128/credit-card-chip-ol-512.png' width='30%' height='150%' alt='n/a'/>
                    </Col>
                </Row>
                <br></br>
                <Row className='middle'>
                    <Col>
                    <input id="PreviewNum" className="form-control" maxLength={16} value={CardNum}/></Col>
                </Row>
                <Row className='bottom'>
                    <Col sm={6}>
                    <p>Card Holder</p>
                    <p>{CardHolder}</p>
                    </Col>
                    <Col sm={6}>
                    <p>Expires</p>
                    <span value='M'>{ExpM}</span><span>/</span><span>{ExpY}</span>
                    </Col>
                </Row>
            </div>
        </div>
        <div className='CreditBox'>
            <div className="form-group">
                <form className="form-bar">
                    <Row>
                        <Col>
                            <label for='cardnumber'>Card Number</label>
                            <input className="form-control" value={CardNum} maxLength={16}  type="text" name="cardnumber" onChange={(e)=> setCardNum(e.target.value)}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label for='cardholder'>Card Holder</label>
                            <input className="form-control" value={CardHolder} type="text" name="cardholder" onChange={(e)=> setCardHolder(e.target.value)}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <label for='month'>Expiration Date</label>
                            <select type="select" value={ExpM} name="exp" class="form-control exp" onChange={(e)=>
                            setExpM(e.target.value)}>
                                <option value="" disabled="disabled" selected="selected">Mon</option>
                                <option value={1}>01</option>
                                <option value={2}>02</option>
                                <option value={3}>03</option>
                                <option value={4}>04</option>
                                <option value={5}>05</option>
                                <option value={6}>06</option>
                                <option value={7}>07</option>
                                <option value={8}>08</option>
                                <option value={9}>09</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                            </select>
                        </Col>
                        <Col xs={4}>
                            <label for='year'>
                            <br></br>
                            </label>
                            <select type="select" value={ExpY} name="exp" id='year' class="form-control exp" onChange={(e)=>
                                setExpY(e.target.value)}>
                                <option value="" disabled="disabled" selected="selected">Year</option>
                                <option value={2020}>2020</option>
                                <option value={2021}>2021</option>
                                <option value={2022}>2022</option>
                                <option value={2023}>2023</option>
                                <option value={2024}>2024</option>
                                <option value={2025}>2025</option>
                                <option value={2026}>2026</option>
                                <option value={2027}>2027</option>
                                <option value={2028}>2028</option>
                                <option value={2029}>2029</option>
                                <option value={2030}>2030</option>
                            </select>
                        </Col>
                        <Col className='cvv-class' lg={4}>
                            <label for='cvv'>CVV</label>
                            <input id='cvv' className="form-control" value={Cvv} type="number" max='9999' placeholder="CVV" name="cvv" onChange={(e)=> setCvv(e.target.value)}/>
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