import React, { useState} from 'react';
import {Col, Row} from 'react-bootstrap';


const CreditBox = () => {

  const [CardNum, setCardNum] = useState('');
  const [CardHolder, setCardHolder] = useState('');
  const [ExpM, setExpM] = useState('');
  const [ExpY, setExpY] = useState('');
  const [Cvv, setCvv] = useState('');

   return (
            <div className='CreditBox'>
              <div>
                {CardNum}
                {CardHolder}
                {ExpM}
                {ExpY}
                {Cvv}
              </div>
              <div className="form-group">
                <form className="form-bar">
                  <Row>
                    <Col>
                    <label for='cardnumber'>Card Number</label>
                    <input className="form-control" value={CardNum} type="text" name="cardnumber" onChange={(e) => setCardNum(e.target.value)}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <label for='cardholder'>Card Holder</label>
                      <input className="form-control" value={CardHolder} type="text" name="cardholder" onChange={(e) => setCardHolder(e.target.value)}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <label for='month'>Expiration Date</label>
                      <select type="select" value={ExpM} name="exp" class="form-control exp" onChange={(e) => setExpM(e.target.value)}>
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
                      <label for='year'><br></br></label>
                      <select type="select" value={ExpY} name="exp" class="form-control exp" onChange={(e) => setExpY(e.target.value)}>
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
                      <input id='cvv' className="form-control" value={Cvv} type="number" max='9999'  placeholder="CVV" name="cvv" onChange={(e) => setCvv(e.target.value)}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col> 
                      <input className="btn btn-warning" type="submit" value="Submit" />
                    </Col>
                  </Row>
                </form>
            </div>
          </div>
            )
          }

export default CreditBox