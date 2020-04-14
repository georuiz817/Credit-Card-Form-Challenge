<div className='Card'>
<div className='card-info'>
    <Row className='top'>
        <Col>
        <img  alt='n/a' width='50%' height='150%' src='https://usa.visa.com/dam/VCOM/regional/lac/ENG/Default/Partner%20With%20Us/Payment%20Technology/visapos/full-color-800x450.jpg'/>
        </Col>
        <Col>
        <img id='chip' src='https://cdn4.iconfinder.com/data/icons/modern-future-technology/128/credit-card-chip-ol-512.png' width='30%' height='150%' alt='n/a'/>
        </Col>
    </Row>
    <br></br>
    <Row className='middle'>
        <Col>
        <p maxLength={16}>{CardNum}</p>
        </Col>
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





.Card{
    background-image: url('https://wallpapercave.com/wp/wp2249067.jpg');
    background-size: cover;
    width: 35%;
    border-radius: 5px;
    box-shadow: 10px 10px 5px black;
    position: fixed;
    top: 20%;
    left: 60%;
    margin-top: 5%;
    height: 60%;
    color: white;
  }
  
  #chip{
    float: right;
  }
  
  #PreviewNum{
    width: 70%;
    margin-top: 15%;
    }
  
  .card-info{
    padding: 5%;
  }
  
  .middle{
   margin-top: 1%;
  }
  
  .bottom{
    margin-top: 20%;
  }
  